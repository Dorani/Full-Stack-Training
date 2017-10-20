var lis = document.querySelectorAll('li');

//what if we want to apply to all lis:

for(var i = 0; i < lis.length; i++){
  lis[i].addEventListener('mouseover', function(){
    this.style.color = "green";
  });
  lis[i].addEventListener('mouseout', function(){
    this.style.color = "black";
  });
}
