'use strict';

const fs = require('fs');
const path = require('path');

const response = (statusCode, body, additionalHeaders) => ({
  statusCode,
  body: body,
  headers: { 'Content-Type': 'text/html', ...additionalHeaders },
});

exports.get = function(event, context, callback) {
  let contents = fs.readFileSync(`build${path.sep}index.html`);
  return response(200, JSON.stringify(contents));
};
