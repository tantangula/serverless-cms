console.log("hello from import");
console.log(process.env);
module.exports = {
  assets: process.env.NODE_ENV === "development" ? "https://d2hamo3qr4v6we.cloudfront.net":"",
  api: process.env.NODE_ENV === "development" ? "http://54.245.183.226:8081":"" 
};