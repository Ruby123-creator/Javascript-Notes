// what is bom??
// The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
// The window object is supported by all browsers. It represents the browser's window.default object for browser is window


// All global JavaScript objects, functions, and variables automatically become members of the window object.
// Global variables are properties of the window object.
// Global functions are methods of the window object.
// Even the document object (of the HTML DOM) is a property of the window object:
// bom: navigate ,screen resize ,location ,frames,history ,alert


// what is dom??
// DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or 
// remove elements from the document. We can also add events to these elements to make our page more dynamic.
// The DOM views an HTML document as a tree of nodes. A node represents an HTML element.
//document - html document &&  objects - tags,attributes ,text


/*
//How to select elements in the documents
1. getElementById(): get elements having the given id
 2. querySelector(): find elements with one or more css selectors
 3.querySelectorAll(): find all the elements that matches css selector and return the list of nodes
 */


 //to get the element
 let paragraph = document.getElementById("para");
 console.log(paragraph);
 let paracontent = paragraph.textContent;
 console.log(paracontent);

//to change the element
 let heading = document.querySelector("h1");
 console.log(heading);
 heading.style.color ="red";
 heading.innerText ="Changing the heading";
heading.innerHTML ='<p>new para</p>';

let subtitle = document.querySelector(".subtitle");
console.log(subtitle);
let para = document.querySelector("#para");
console.log(para);

let subtitles = document.querySelectorAll("p");
console.log(subtitles);


// how to add the Elements to the document
// 1. createElement(): add new elements to dom tree

let list = document.createElement("ul");//element create
console.log(list);
//appending the new element to my documnet body
document.body.appendChild(list);

let listitem1 = document.createElement("li");
listitem1.textContent ="item 1";

let listitem2 = document.createElement("li");
listitem2.textContent ="item 2";

let listitem3 = document.createElement("li");
listitem3.textContent ="item 3";

let listitem4 = document.createElement("li");
listitem4.textContent ="item 4";

list.appendChild(listitem1);
list.appendChild(listitem2);
list.appendChild(listitem3);
list.appendChild(listitem4);




//to remove elements from the dom
heading.remove();

