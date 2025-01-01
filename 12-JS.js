// selection
// selection have 3 types:-
// document.getElementById
var firstimg = document.querySelector('#abcd');

// document.getElementsByClassName
var secimg = document.querySelector('.abcd');

// document.getElementsByTagName
var firh3 = document.querySelector('.xyz');

var sech3 = document.querySelector('#xyz')
var h3 = document.querySelector('h3');
h3.textContent += " Nice to meet you."

var h1 = document.querySelector('h1');
h1.innerHTML = '<i>Hello</i>'


// universal selection
// select and save
var btn = document.querySelector('button');
btn.textContent = "Starting..."

var h2 = document.querySelector("h2");
h2.style.color = "crimson";
h2.style.fontFamily = "gilroy";
h2.style.fontSize = "50px";

// make a class in css and using it direcrtly JS
var a = document.querySelector("h3");
h3.classList.add('makeit');

// to add the element in body by using create, append and remove child  
var h4 = document.createElement('h4');
h4.textContent = "Welcome Master.";
h4.classList.add("makeit");
document.querySelector("body").appendChild(h4);//add the element 

document.querySelector("body").removeChild(h4);//remove the element