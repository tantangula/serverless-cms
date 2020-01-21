"use strict";

const methods = require('../post.handler.js').methods;
const chai = require("chai");

chai.should();

console.log("TESTS");

const handler = methods({
  docClient: {
    query: (params) => {
      return {
        promise: () => {
          return {
            "Items": [
              {
                "time": 1579571200409,
                "id": 2,
                "body": "<h2>dubble</h2><div class=\"button\">double you</div>",
                "title": "double"
              }
            ],
            "Count": 1,
            "ScannedCount": 1
          };
        }
      };
    }
  }
});

describe("Get a post", function() {
  it("successfully retrieves requested post", async function() {
    let response = await handler({
      httpMethod: 'GET',
      pathParameters:{
        id:'2'
      }
    });
    response.statusCode.should.equal(200);
    
    let body = JSON.parse(response.body);
    
    body.Count.should.equal(1);
    body.Items[0].id.should.equal(2);
  });
});