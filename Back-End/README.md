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

  - Embedded javascript, lets us embed js code inside of html
  - Use the render method and have to look for an ejs file in your directory, and when it finds it, take the contents and send it back in the response.
  - Make sure, in order to render an ejs file, you need to npm install ejs --save
  - Then run your app and refresh
  - A file of html that we are now sending back to the user and rendering in browser.

  - dynamic templates
      - .EJS
      - use ejs <%= variable %>
          - wtvr goes inside is treated as js code
          - wtvr is returned is printed to html
          - to pass data through we pass in obj with key value pairs we have access to the properties of the obj, which is equal to "thing" which changes everytime

### Databases

- What is a database?
    - A collection of information/data
    - Has an interface, ie we can write code to interact with it

- SQL(Relational) vs NoSQL(non-Relational) Databases

- SQL has been around the longest:
    - Tabular and flat:
    - Define what a user looks like, usually - an ID, name, age, city
    - Every single user that we add, follows this pattern but adding instances of a user to the table
    - Another separete table can be created called comments, that has an ID and text
    - If I want there to be a relationship where a user has a commented associated with some comments
        - The only way to express this relationship is through join table
        - So we would have to somehow merge both tables with a common denominator "ID".
        - Joins a user ID with comment ID

    - Everything is Tabular and NOT very flexible at all, you need to follow a pattern from the start and stick to it.


  - NoSQL we don't have to define patterns ahead of time, no table, no tabular structure and things can be nested:
  - Binary JavaScript object notation
      - Bunch of js notations in the form of objects!
      - Looks like JS
      - Key value pairs and the important part, is comments can be nested in the data and adding objects and push into that data structure
      - Flexible structure
      - You can define properties, and add users dynamically, and give those users specifics attributes.
      - Big difference between both databases!

## Intro to MongoDB

  - What is MongoDB?

      - MongoDB is an open source database that uses a document-oriented data model.

      - MongoDB is one of several database types to arise in the mid-2000s under the NoSQL banner. Instead of using tables and rows as in relational databases, MongoDB is built on an architecture of collections and documents. Documents comprise sets of key-value pairs and are the basic unit of data in MongoDB. Collections contain sets of documents and function as the equivalent of relational database tables.


  - Why are we using it?

      - Lots of companies use it!
      - Most popular database now with Node and Express and the MEAN/MERN stack!
      - Great tools inside of an express app at our disposal

  - Brew install it after updating brew!
  - Go to MongoDB.org


## Our First Mongo Commands

    - mongod
    - mongo
    - help
    - show dbs
    - use
    - insert
    - find
    - update
    - remove

## To begin

- In your terminal after having successfully installed MongoDB run the following commands in order in 2 separate tabs:
    - mongod: the primary daemon process for the MongoDB system. It handles data requests, manages data access, and performs background management operations. This document provides a complete overview of all command line options for
    - mongo : The mongo shell is an interactive JavaScript interface to MongoDB. You can use the mongo shell to query and update data as well as perform administrative operations.

    - The mongo shell is a component of the MongoDB distributions. Once you have installed and have started MongoDB, connect the mongo shell to your running MongoDB instance.

## One's we will be using and purpose
- help:
  - give us a list of basic features of mongo
- show dbs:
  - show all databases
- use:
  - go into dbs and use it, if it exists, but if it doesn't it will create an empty database, it will wait for us to add in collections

- insert:
  - mongo is non relational so its flexible, so we can have a dog with one property, and another with 3 so on and so forth
  - in order to add to the database:
  - db.dogs.insert({name: "rusty", breed:"pom"}) = db is the current database, dogs is the current "collection", insert is the command that allows us to inject data for this case its an object with 2 properties
      - we should get back a WriteResult({nInserted:1})
      - to prove that it was created:
- Show collections:
  - shows now I have a dogs collection

- Find: will give me all the dogs - everything in that collection:
    - db.dogs.find()
    - it will return data + a unique obj id assigned by mongo.
    - we will be using it to refer to specific items

- Sometimes we want to find a particular instances of a dog
    - db.dogs.find({name:"rusty"})
    - return a single dog with name rusty


- Update: allows us to make updates to the databases
    - db.dogs.update({name:"rusty"}, {$set: {name: "bambam", isCute: true}})
    - So what we have done above is the follow:
        - updated the dogs where name is rusty, then we use $ set and provide an object to set, and it will preserve breed as pom and won't delete it
        - and we also added a new property at the same time!

- Delete or Removing: allows us to completely remove or destroy a dog from the dogs db
    - db.dogs.remove({breed: "pom"})
    - removing all dogs where the breed is pom
    - returns a WriteResult({nRemoved: 1})
