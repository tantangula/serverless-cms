const response = (statusCode, body, additionalHeaders) => ({
  statusCode,
  body: body,
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', ...additionalHeaders },
});

exports.methods = deps => async (event, context, callback) => {
  try {
    switch (event.httpMethod) {
      case 'GET':
        return await get(deps, event);
      case 'POST':
        return await post(deps, event);
      default: return response('405',
        { Message: `Unsupported method: ${event.httpMethod}` },
        { Allow: 'GET' });
    }
  } catch(err) {
    return response('500', JSON.stringify({ Error: err.message }));
  }
};

const get = async (deps, event) => {
  let table = "posts";
  let params = {
      TableName: table
  };
  try {
    let dbResponse = await deps.docClient.scan(params).promise();
    return response('200', JSON.stringify(dbResponse, null, 2));
  } catch(err) {
    console.log("err", err);
    throw err;
  }
};

const post = async (deps, event) => {
  let body = JSON.parse(event.body);
  
  try {
    let params = {
      TableName: 'posts',
      AttributesToGet: [
        'id'
      ]
    };
    
    let dbResponse = await deps.docClient.scan(params).promise();
    let sorted = dbResponse.Items.sort(function(a,b){
      return b['id'] - a['id'];
    });
    
    params = {
      TableName: 'posts',
      Item: {
        id: sorted[0].id + 1,
        time: new Date().getTime(),
        title: body.title,
        body: body.body
      }
    };
    
    dbResponse = await deps.docClient.put(params).promise();
    return response('200', JSON.stringify(dbResponse, null, 2));
  } catch(err) {
    console.log("err", err);
    throw err;
  }
};
