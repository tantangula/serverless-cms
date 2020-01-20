const methods = require('./posts.handler.js').methods;
const aws = require("aws-sdk");
const docClient = new aws.DynamoDB.DocumentClient();

exports.handler = methods({
  docClient: docClient
});