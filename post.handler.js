const response = (statusCode, body, additionalHeaders) => ({
  statusCode,
  body: body,
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', ...additionalHeaders },
});

const get = async (deps, event) => {
  try {
    let params = {
      TableName: 'posts',
      KeyConditionExpression: "#id = :id",
      ExpressionAttributeNames:{
        "#id": "id"
      },
      ExpressionAttributeValues: {
        ":id": parseInt(event.pathParameters.id)
      }
    };
    let dbResponse = await deps.docClient.query(params).promise();
    return response(200, JSON.stringify(dbResponse, null, 2));
  } catch(err) {
    console.log('err', err);
    throw err;
  }
};

exports.methods = deps => async (event, context, callback) => {
  try {
    switch (event.httpMethod) {
      case 'GET':
        return await get(deps, event);
      default: return response('405',
        { Message: `Unsupported method: ${event.httpMethod}` },
        { Allow: 'GET' });
    }
  } catch(err) {
    return response('500', JSON.stringify({ Error: err.message }));
  }
};