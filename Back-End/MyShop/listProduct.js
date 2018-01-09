var faker = require("faker");

var randomName = faker.name.findName();//faker.category.method
var randomEmail = faker.internet.email();//faker.category.method
console.log(randomName);
console.log(randomEmail);
