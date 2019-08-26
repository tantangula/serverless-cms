'use strict';

const fs = require('fs');
const path = require('path');

exports.get = function(event, context, callback) {
  //let contents = fs.readFileSync(`build${path.sep}index.html`);
  let result = {
    statusCode: 200,
    body: "Helllooooooo",//contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
