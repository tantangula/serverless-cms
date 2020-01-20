'use strict';

const fs = require('fs');
const path = require('path');

const aws = require("aws-sdk");

var docClient = new aws.DynamoDB.DocumentClient();

exports.post = async function(event, context, callback) {
  //let contents = fs.readFileSync(`build${path.sep}index.html`);
  var table = "posts";

  let body = JSON.parse(event.body);

  console.log('event', body);
  
  var params = {
      TableName: table,
      Key:{
          "id": "1"
      }
  };
  
  let tableData = 'nothing';
  try {
    let dbGet = await docClient.get(params).promise();
    tableData = JSON.stringify(dbGet, null, 2);
  } catch(err) {
    console.log("err", err);
  }
  
  let result = {
    statusCode: 200,
    body: tableData,
    headers: {
      'content-type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }
  };

  return result;
};
