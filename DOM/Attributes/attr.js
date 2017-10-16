//say we have an html document with the following href and img tag

<a href="www.google.com">I am a link</a>
<img src="log.png">

//1st lets select and Assign
var link = document.querySelector('a');
//change the href attribute
link.setAttribute('href', 'wwww.dogs.com');

//change the img src
//1st lets select and Assign
var img = document.querySelector('img');
img.setAttribute('src', "corgi.png");
