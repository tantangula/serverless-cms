console.log("hello from import");
console.log(process.env);
module.exports = {
  url: process.env.NODE_ENV === "development" ? "https://tantangula.s3-us-west-2.amazonaws.com":""
}