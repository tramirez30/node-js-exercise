// Http Module

const http = require("http");

// 2 parameters with createServer(request, response) method
// Both params are objects
// first param is incoming request -- i.e request webpage
// second param is the response -- what were sending back

const server = http.createServer((req, res) => {
  // if request url is = homepage
  if (req.url === "/") {
    // this is what gets sent back (res)
    res.end("Welcome to Test Page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  // When address does not exist, this will get invoked
  // Include an <a> to take user back to homepage
  res.end(`<h1> OOPS! Does Not Exist </h1>
  <p> We ran into an error, try again! </p>
  <a href="/"> Back Home </a>`);
});

// Specify port we are listening too
// We do this by using server.listen() method

server.listen(5000);
