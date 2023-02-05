// hoisting: the process whereby the interpreter appears to move the declaration of functions,
// variables or classes to the top of their scope, prior to execution of the code

console.log(x); //undefine

var x;
console.log(x); //undefined

var x = 7;
console.log(x); //7

//func declaration
//this works even if we call the function even before declaring it
y();
function y() {
  console.log("hi");
}

//function expressions
//cannot call fun exp. before declaring them
var z = function () {
  console.log("hey");
};
z();

// var: can reinitilized and redeclared
// var is in global memory space(scope)
console.log(a);
var a = 10;
console.log(a);
a = 20;
console.log(a);
var a = 30;
console.log(a);

// let: can re-initialize but not re-declare
// let is in another memory space(scope)
// in script memory space you cannot access a variable until it's initialized a value

// Temporal Dead Zone(TDZ): the period between a let and const variable
// being hoisted till it's initialized
// console.log(b); // hoisting
let b = 20; // initialization
console.log(b);
b = 30;
console.log(b);
// let b = 40;
// console.log(b);

//const: cannot re-initialize and re-declare too
// console.log(PI);
const PI = 3.14;
console.log(PI);
// PI = 3.15;
// console.log(PI);
// const PI = 3.16;
// console.log(PI);

// window: global object which is created when your execution starts

let p = 10; // => global varible

if (10 > 5) {
  let y = 5; // local varaibale
  console.log(p); // 10
  console.log(y); // 5  (block scope)
}

for (let i = 0; i <= 0; i++) {
  // console.log("inisde top", p)
  let p = 50; //p is block scope in that case(overriden)
  console.log("inside", p);
}

console.log("outside", p); //global wala hi print hoga
// console.log(y)

//function scope
var c;

hello();
function hello() {
  let a = 10; // block scope
  var b = 20; //function scope , var is global except in case of functions
  c = 30; // global scope
}

//var is  accessible outside the block
let m = 10;
for (let i = 0; i < 5; i++) {
  var n = m + 5;
}
console.log(n);

let temp = "outer value";
if (true) {
  // new scope, TDZ starts
//   console.log(temp); // Reference Error
  let temp = "inner value";
  // temp is initialized with 'inner value'
  console.log(temp); // inner value
}
console.log(temp); // outer value

/*let and const are hoisted, but there is a period between entering scope and being declared where they cannot be accessed. This period is the temporal dead zone (TDZ).outer value can’t be accessed inside the if statement, var can be accessed before they are defined, but we can’t access their value. let and const can’t be accessed before we define them.

 */

function print() {
    function log() {
      console.log(age);
      //const age = 20; //gives reference error 
    }
  
    const age = 20;
    log();
    
}
  
print(); 
// means in every condition we have to define before accessing it