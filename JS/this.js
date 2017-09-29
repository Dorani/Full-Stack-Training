var comments = {};

comments.data = ["good job!", "bye", "lame"];

function print(arr){
  arr.forEach(function(el){
    console.log(el);
  });
}

print(comments.data);
