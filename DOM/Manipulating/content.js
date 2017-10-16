//select the <p> tag:
var tag = document.querySelector("p");

//retrieve the textContent:
tag.textContent// this will return the contents of the paragraph

//alter the context
tag.textContent = "blag blag";


//be careful, know what is exactly inside an element
//if there are tags you want to preserve


tag.innerHTML
//This will you give you the contents along with any supplementary tags inside the p tag, ie:strong tag etc.., this iwll give us everything as a string
