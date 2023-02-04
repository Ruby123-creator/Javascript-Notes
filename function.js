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





