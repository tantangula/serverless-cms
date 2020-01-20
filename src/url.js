module.exports = {
  assets: process.env.NODE_ENV === "development" ? "https://d2hamo3qr4v6we.cloudfront.net":"",
  api: process.env.NODE_ENV === "development" ? "http://18.188.168.190:8081":"" 
};