//what is function : it is a block of code to perform a particaulr task as many times whenever it is call

//named function
//function declaration
function x(){
    console.log("hello world!!");
}

//call a function : function invocation
x();

//function with parameters and arguments
//parameters are the values which provide to a function on declarartion
//arguments are the values that we provide to function on invocation


var from = "Ruby";
function Message(name ,text ="hey"){
    console.log(name + " says " + text);
}

Message(from);


//Return values from a function
function sum(a,b){
    return (a+b);
}

var result = sum(2,3);
console.log(result);


//Anonymous function: function which don't have their name their values are declared as variables
//function expression
var showMessage = function(){
    console.log("hiii");
}

console.log(showMessage);
showMessage();


 



// arrow function: 

// hello1(10)  this will not work in case of arrow function
 let hello1 = (a) =>{
    console.log("Hello World",a)
}
hello1(10)

let sum1 =(a,b)=> {
    if(a>b){
     
    }
    return a*b
    }
console.log(sum1(10,20))






//use of spread operator in function
function sum(a, ...x){
    console.log(a, x)
}

sum(10)
sum(10,20,30)
sum(1,2,3)
sum(1,2,3,4,5,6,7)











function sum(a,b){
    // if(b==undefined){
    //     b = 0
    // }
    let c = b || "default"
    console.log(a,c)
}


sum(10,20)  // 10,20


// let ans = 10<20 || 20<30


// all numbers are true except 0

// if(null){
//     console.log("A")
// }
// else{
//     console.log("B")
// }








// IIFE - Immediately Invoked Function Expression
/*Invoked function expression runs as soon as the browser encounters it.
 The benefit of this function is that it runs immediately where it’s located 
 in the code and produces a direct output. That means 
it is unaffected by code which appears further down in the script which can be useful.*/


let Message5=(function (a,b){
    console.log(a+b)
})(10,20)


let f=(function(){
    console.log("Hello")
})()


let z = (function (a,b){
    return(a+b)
})(10,20)

console.log(z)


// examples of functions
/*CLOSURES :if we create a function inside another function, we are creating a closure. Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope) — These functions remember the environment in which they are created. What makes a closure powerful is that it is capable of reading and manipulating the data of its outer functions.

 Closures are nested function which have access to the outer scope. After the outer function is returned, by keeping a reference to the inner function (the closures) we prevent the outer scope to be destroyed. A closure is an inner function which has access to the outer function scope. If the outer function is called multiple times, every call creates a new closure. Closure’s existence is dependent on their parent function’s existence.  */


function sum(a){
    // a = 10
    console.log("Sum")
    function sumAgain(b){
        // b = 20
        console.log(a+b)
    }
    return sumAgain
}

let p = sum(10);  
p(20)   
// here x is a anonymous function which takes 20 as parameter
//  here x = function sumAgain(20)
// x = sumAgain




function makeCounter() {
    let count = 0;
    return function() {
      return count++;        // first return then increment
    }                    //++count   -- first increment then return
  }
  let counter = makeCounter();

//   counter = function() {
//     return count++; // count++, ++count
//   }


  console.log(counter()); 
  console.log(counter()); 
  console.log(counter()); 
  

  







function makeAdder(x) {
    return function(y) {
      return x + y;
    }
  }
  let add5 = makeAdder(5);
  let add10 = makeAdder(10);
  console.log(add5(3));   // starts from here  call add5 == function(y) value = 8
  console.log(add10(3));  // 13


let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(function() { return i*i });   // arr = {0,1,4,9,16}
}
console.log(arr[1]());  //1
console.log(arr[3]());  // 9




// a[3] = function() { return 9 }
// a[3]() // 9




