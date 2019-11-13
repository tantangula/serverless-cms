'use strict';

const fs = require('fs');
const path = require('path');

exports.get = function(event, context, callback) {
  //let contents = fs.readFileSync(`build${path.sep}index.html`);
  let result = {
    statusCode: 200,
    body: process.env.FILE_URL + "/files/logo.png", //contents.toString(),
    headers: {
      'content-type': 'text/html',
      "Access-Control-Allow-Origin": "*"
    }
  };

  callback(null, result);
};
