//require the http module
const http = require('http');

//event driven architecture
const server = http.createServer((req, res) => {
  console.log(req);
});


//listen for incoming request on port 3000
server.listen(3000, () => {
  console.log("we live!")
});
