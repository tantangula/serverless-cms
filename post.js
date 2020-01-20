'use strict';

const fs = require('fs');
const path = require('path');

const aws = require("aws-sdk");

var docClient = new aws.DynamoDB.DocumentClient();

exports.get = async function(event, context, callback) {
  var table = 'posts';
  
  console.log('id: ', event.pathParameters.id);

  var params = {
    TableName: table,
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeNames:{
      "#id": "id"
    },
    ExpressionAttributeValues: {
      ":id": event.pathParameters.id
    }
  };
  
  let tableData = 'nothing';
  try {
    let dbGet = await docClient.query(params).promise();
    tableData = JSON.stringify(dbGet, null, 2);
  } catch(err) {
    console.log('err', err);
  }
  
  let result = {
    statusCode: 200,
    body: tableData,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };

  callback(null, result);
};
