const fs = require('fs');

const requestHandler = (req, res) => {

  const url = req.url;
  const method = req.method;

  if(url === "/"){

    res.write('<html>');
    res.write('<head>Welcome</head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message> "<button type ="submit">Send</button></form></body>');

    res.write('</html>')
    return res.end();
  }

  if(url === '/message' && method === 'POST'){
    const body = [];
    //listen to certain events, data events
    req.on('data', (chunk) => {
      //push that chunk of data into the body array
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      //create a new file, dummy data
      fs.writeFile('message.txt', message, (err) => {
        //allows us to write meta, pass status code '302' which stands for redirect
        //pass js obj with headers {}
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>Welcome</head>');
  res.write('<h1>Welcome to my nodejs server</h1>');
  res.write('</html>')
  res.end();

}


module.exports = requestHandler;
