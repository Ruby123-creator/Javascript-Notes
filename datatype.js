// javascript: javascript is a dyanmic and scrippting language which is used to create interactive web content like applications and browsers.
// 1. dynamically type : no need to define(specity) the datatype.
// 2. high-level language: user-friendly language(english -text).
// 3.programming language: able to perform computational tasks.
// 4.crippting language:  The scripting language is basically a language where instructions are written for a run time environment. 
// They do not require the compilation step and are rather interpreted.



//declaring variable(container to hold values)
//synta : var variable_name;


//declaration : to allocate space/memory variables
//initialization : to assigning a value to the variable

// var :reinitialize and redeclare
var fname;
fname = "suman";
var x = 32;


var fname = 10;
console.log(fname);




//local and global variables
var b = 20;  //global variables : access from anywhere in the code
{
    var a = 10;   //local variables : accessible only inside a function
}


// datatypes :String.  Number.  Bigint. Boolean. Undefined. Null. Symbol. Object.
//Number data type
 //infinity
console.log(typeof 1 / 0);
//NAN(not a number)
console.log(typeof "number"*3);
//number
console.log(typeof 2);
//number
console.log(typeof 2.3);

//BigInt Data Type : greater that 2^53-1 and lesser than -(2^53-1)

//String datatype
var last_name = "Pal";
var lname ='Pal';
var lName = `Pal`;
var first_name = "Ruby";

//String interpolation
console.log(first_name +" " +last_name);
console.log(`${first_name} ${last_name}`);


//Boolean Data Type
var age = 18 > 12;
console.log(age);
var age1 = 17 >20;
console.log(age1);


//Null values
var empty_container = null;
console.log(typeof empty_container);//object??

empty_container =12;
console.log(empty_container);


//undefined value
var ans;
console.log(typeof ans);



// how to convert string into number

let n = "123.4"
let k = Number(n) // 123, typeof number
let l = +n // 123, typeof number
console.log(k, typeof k)

// parseInt , ParseFloat


let o = "123.6rat456"
let j = parseFloat(o) // 123
let q = parseInt(o)
console.log(j ,typeof j);
console.log(q, typeof q)



// how to convert number into string
const value = 12345;
// Concat Empty String
value + '';
// Template Strings
console.log(`${value}`);
// JSON.stringify
JSON.stringify(value);
// toString()
value.toString();
// String()
String(value);

console.log(value , typeof value);
// RESULT
// '12345'


//Alert 
// let notify = alert("what are you doing??");



//prompt
//prompt(title ,[defualt])
// var age = prompt("enter the age");
// var result = age>18;
// console.log("u r eligible");


// //confirm
// var isTestGiven = confirm("Did u complete your test");
// console.log(isTestGiven);


// var name = prompt("Enter the age");
// alert("name is: " + name); 



let obj = {a:1, b:2}

let c = typeof obj 
console.log(c, typeof c)   //c= object   type of c - string





// BigInt:  
// 2**53 - 1
let bigint = 2.7976931348623157e+308
console.log(bigint)    //infinity

// BigInt: 

let bigint1 = 1234565432
console.log(bigint1, typeof bigint1)

// +ve, -ve, 0 but canot be decimal 

// Arithmetic and Relational Operators

// all the operators are same as number except / operator 

let x1 = 10n
let y1 = 20n
let v = x1 + y1 
console.log(v, typeof v)

let x2 = 28n
let y2 = 5n
let div = x2/y2  //5.6 => 5
console.log(div, typeof div)

// let x1 = 10n
// let y1 = 20
// console.log(x1 + y1) //error


// Number to BigInt and BigInt to Number

// let n = 10 
// let x = BigInt(n)
// console.log(x, typeof x)


// let x = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n
// let y = Number(x)
// console.log(y, typeof y)


// let str = "12345678987654"
// let x = BigInt(str)
// console.log(x, typeof x)


// let x = Number("12345") // 12345, typeof number
// let y = +("12345")  // unary plus // error


// id: 123456789876543


// big Int  

// let a = 0 
// let b = 0n 
// console.log(a==b) //true
// console.log(a===b) //false

// console.log(10n <20n) // true

// a == b //  It means comapre value of a and b not their data type 

// a === b // It means compare value and data type of a and b