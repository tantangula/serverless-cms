console.log("hello from import");
console.log(process.env);
module.exports = {
  assets: process.env.NODE_ENV === "development" ? "https://tantangula.s3-us-west-2.amazonaws.com":"",
  api: process.env.NODE_ENV === "development" ? "http://34.216.160.37:8081":"" 
}