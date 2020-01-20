'use strict';

const fs = require('fs');
const path = require('path');

const aws = require("aws-sdk");

var docClient = new aws.DynamoDB.DocumentClient();

exports.get = async function(event, context, callback) {
  var table = "posts";

  var params = {
      TableName: table
  };
  
  let tableData = 'nothing';
  try {
    let dbGet = await docClient.scan(params).promise();
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

  callback(null, result);
};

exports.post = async function(event, context, callback) {
  let body = JSON.parse(event.body);
  
  console.log('event: ', body.body);
  
  let result = {
    statusCode: 200,
    body: 'thumbs up',
    headers: {
      'content-type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }
  };

  callback(null, result);
};
