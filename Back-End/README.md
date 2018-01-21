## Download Postman

  - Let's us make http request and view responses, to debug when data is not coming back
  as we wanted it to.

  - http request are independent of browsers, something to keep in mind.

  - now if we make a request, go to www.google.com
      - we will be using http verbs to tell the server what to do with the request
      - retrieve data from the serve would be a GET request
      - uploading, submmiting, sending data would be a POST request
      - PUT and PATCH, would be requests to edit or updates
      - DELETE request, does exactly what it sounds like it.

    - these are all protocol, so if I say this is a delete request, then we should expect that it will delete something.

  - So after we make a GET request on postman to google we will get a response:
      - the body of the response ie the html, css, js etc...
      - headers ie like the meta data about the response, they contain info like
          - content type = which is the language it will respond back to the client in
          - date and time, when the request and response took place
          - status: a number, 202, 404 etc... part of protocol of http, standardized way to say that the request that was made is fine and sends back status code 200.
          - you can send data with a query string using a GET request, and if the server is expecting a name parameter then it will respond

### In Postman

  - make a GET request to reddit.com and click on params and what that will let you do, is add a url parameter, key and value and postman will make the request and add the string
      - click send and go to the body, we get a bunch of html and css where you can isolate
      - go to the body, depending on the type of request, if it is a post request, you can pass in the paramaters from the body tag in the form-data


### Back-end

  - After a request is made to reddits server, there will be code on the server that will be listening for different requests and responding with diff pieces:
      - starting the server, and the app will be hosted on localhost 3000
      - in our terminal, we run the name of the command "node nameofapp.js"
      - it will tell us hopefully, someone made a GET request to the url / with a status 200
      - try doing this in postman also, with diff routes as well

    - our app will have the following:
      - dependancies
      - setting up a database
      - routes


### What is Node?

  - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

  - In the past, all js was front-end code cause the only place it can run is the browser.
      - That all changed when nodejs came along
      - so now we can write js on the server side
      - to interact with our database, write files, change tables, all the server side logic
      - and we can write js on front-end

### Why learn it?

  - popular
  - great community
  - open source
  - great libraries
  - JS, this is the most awesome reason.
  - High performance


### What is NPM?

  - On the front-end when we wanted to include bootstrap, or jQuery, we would include things would a script tag, but if we are writing node on the server side, we would require libraries through NPM.
  - Code that somone else has written that we can include and add towards our project
  - All the packages are centralized
  -  NPM has a command line tool, all we have the to do is type in npm install "name of package" and as long as npm knows about it, it will automatically be installed

### Why is it awesome

  - centralized repo of almost 200k packages (module)
  - easy to use
  - framework, mongooes, morgon, ejs, body-parser etc...

### Node Modules

  - a directory that is automatically created for us whenever we install a package
  - then we need to import it to our application with the require statement
      - we need to require it, see next commit or line one in app.js
      - run node app.js to see it generate a random cat everytime

### What is a framework

  - both lib and frameworks are external code, but lib is something you are in control of, one method, 2 methods we want to use etc..
  - frameworks make decisions for us, and we fill in the blanks with the important parts. They take all the set up work and pre-packages it up so we dont need to do the ground work, rather than spending time working on basic stuff making it.

  - the defining diff between and lib and a framework
      - inversion of control
          - it means when we call a library, you are in control
          - with a framework, it calls you

### Why Express

  - express is by far the most popular node web framework
  - big community
  - much lighter weight, unopinionated, so we need to understand more what is going on, less than rails.

### Start

  - npm install express
  - require it, and initialize
  - app.get takes 2 diff parameters, the url or path which is the route or home /
  - the other is a callback function which takes 2 arguments, request and responses:
      - req and res are objects, req contains all the information about the req that was made that triggered the routes
      - same for response
      - check app.js in FirstExpressApp
### Server
  - tell express to listen for request (start server)
  - we need to write the code to tell it to listen to requests
  - check app.js in FirstExpressApp


### Package.json

  - javascript object notation, data type, a way of formating text in a file to represent structure
  - a file that contains all the meta-data about this app Express
  - name author github license homepage and most importantly the dependancies: list of packages and versions needed in order for app to run
  - this file collects them All
  - when we are sharing code, and they depend on 100's of packages, we can just put them in the package.json.
  - (-- save) will take the package name and version and auto save it into our package.json file
  - inside the folder where i want my app to live i type in "npm init"
      - series of questions that you may answer
      - all that data gets compiled and make our package.json files
      - so now when you install new packages
          - npm install express --save
          - you get a dependencies field with the package

### Routing

  - order of routes matters
    - the first route that matches a given request
    - then we are done

  - patterns to route are optimal
  - we make use of route parameters, or route paths
  - ":"" tells express not to match character, but to lsn for a patterns

### EJS   

  - Use the render method and have to look for an ejs file in your directory, and when it finds it, take the contents and send it back in the response.
  - Make sure, in order to render an ejs file, you need to npm install ejs --save
  - Then run your app and refresh
  - A file of html that we are now sending back to the user and rendering in browser.
