var lis = document.querySelectorAll('li');

//what if we want to apply to all lis:

for(var i = 0; i < lis.length; i++){
  lis[i].addEventListener('mouseover', function(){
    this.classList.add('selected');//seperation of concerns, using classes always best practice, css will manipulate style and js witll trigger css
  });
  lis[i].addEventListener('mouseout', function(){
      this.classList.remove('selected');//seperation of concerns
  });
  lis[i].addEventListener('click', function(){
    this.classList.toggle('done');
  });
}
