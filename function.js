//what is function : it is a block of code to perform a particaulr task as many times whenever it is call


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
function showMessage(name ,text ="hey"){
    console.log(name + " says " + text);
}

showMessage(from);


//Return values from a function
function sum(a,b){
    return (a+b);
}

var result = sum(2,3);
console.log(result);



//function expression
var showMessage = function(){
    console.log("hiii");
}

console.log(showMessage);
showMessage();



//func dec
function sayHi(){
    console.log("saying hii");
}
console.log(sayHi);


//fun expression
var func = sayHi;
func();
sayHi();



// call function
// Normal Function:
function hello(x, fun1){
    console.log("Hello World",x)
    fun1()
    
}

// hello()
let a = 10
hello(a, info)



function info(){
    console.log("My name is  Abhishek")
}


 



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


// No name function
// (function (a,b){
//     console.log(a,b)
// }(10,20))




function sum(a, ...x){
    console.log(a, x)
}

sum(10)
sum(10,20,30)
sum(1,2,3)
sum(1,2,3,4,5,6,7)








// function sum(a=0,b=1){    // default parameters
//     console.log(a,b)     
// }


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

























// // function expression:
// let sum1 = function(a,b){
//     console.log(a+b)
// }

// sum1(10,20)
// // arrow functions: 
// let sum2 = (a,b) => {
//     console.log(a+b)
// }
// sum2(10,20)







