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
console.log(faker.commerce.price());

//combine above 2 in a single license
console.log(faker.commerce.productName() + " - $" + faker.commerce.price());

console.log("-----------------------------------------")
console.log("Welcome to my Shop:");
console.log("------------------------------------------")
//repeat 10 times
for (var i = 0; i < 10; i++){
  console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
