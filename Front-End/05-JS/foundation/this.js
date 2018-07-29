var comments = {};

comments.data = ["good job!", "bye", "lame"];

function print(arr){
  arr.forEach(function(el){
    console.log(el);
  });
}

print(comments.data);



// another way to do this:

function(){
  this.data.forEach(function(el){
    console.log(el);
  });
}

//this.data is how u go inside of print and access this data
//a good way to access data that was pre-defined
