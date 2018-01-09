var faker = require("faker");

var randomName = faker.name.findName();//faker.category.method
var randomEmail = faker.internet.email();//faker.category.method
console.log(randomName);
console.log(randomEmail);


//check out docs
  //go under api methods
  //isolate commerce category
    //productName and price methods

console.log(faker.commerce.productName());
