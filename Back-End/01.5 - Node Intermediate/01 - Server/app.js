//require the http module
const http = require('http');

//event driven architecture
const server = http.createServer((req, res) => {
  const url = req.url;

  if(url === "/"){
    res.write('<html>');
    res.write('<head>Welcome</head>');
    res.write('<body><form action="/message" method="POST"><input type="text"><button type ="submit">Send</button></form></body>');
  }

  console.log(req);
  res.write('<h1>hello from my nodejs server</h1>');
});


//listen for incoming request on port 3000
server.listen(3000, () => {
  console.log("we live!")
});
