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






//Alert 
alert("what are you doing??");



//prompt
//prompt(title ,[defualt])
var age = prompt("enter the age");
var result = age>18;
console.log("u r eligible");


//confirm
var isTestGiven = confirm("Did u complete your test");
console.log(isTestGiven);


var name = prompt("Enter the age");
alert("name is: " + name); 