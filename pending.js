

// console.log(a)

// let a = 10




// for(let i = 1; i<=1; i++){
//     // let a - tdz ( time)
//     console.log(a) 
//     let a = 20
//     console.log(a)
// }


// let age = 50;

// function printAge() {
//   console.log(age);
//   let age = 30;
// }

// printAge()


function print() {
    function log() {
      console.log(age);  // 20, error, udefined
    }
  
    const age = 20;
    log();
    
}
  
print(); 

// means in every condition we have to define before accessing it





let obj = {a:1, b:2}

let c = typeof obj 
console.log(c, typeof c)




// // function sum(a){
// //     // a = 10
// //     console.log("Sum")
// //     function sumAgain(b){
// //         // b = 20
// //         console.log(a+b)
// //     }
// //     return sumAgain
// // }


// // let x = sum(10)

// // // x = sumAgain

// // x(20) // 


// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
//     }
//   }
//   let counter = makeCounter();

// //   counter = function() {
// //     return count++; // count++, ++count
// //   }


//   console.log(counter()); 
//   console.log(counter()); 
//   console.log(counter()); 
  

//   a = 10
//   let x = a++ 

//   x = a  // 10
//   a = a + 1 // 11


//   b = 10 
//   y = ++b 
//   b = b+1  //11
//   y = b  // 11
  







// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     }
//   }
//   let add5 = makeAdder(5);
//   let add10 = makeAdder(10);
//   console.log(add5(3)); 
//   console.log(add10(3)); 


// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(function() { return i*i });
// }
// console.log(arr[1]());
// console.log(arr[3]());



// a = [
// function() { return 0 },  
// function() { return 1 },  
// function() { return 4 },  
// function() { return 9 }, 
//  function() { return 16 }
// ]

// a[3] = function() { return 9 }
// a[3]() // 9

// let x = 10

// let hello = function (){
//     console.log("Hello")
// }




function log1() {
    console.log(age);  // 20, error
}

function print() {
    function log2() {
      console.log(age);  // 20, error
    }
  
    const age = 20;
    // log1()
    log2();
    
}
  
print(); 








let obj6 = {
    one: () => {console.log(1)},
    two: () => {return (2)},
    2: "hello"
}
// let t = "one"
// obj.t // SyntaxError: Unexpected number












// let n = "123.4"

// let x = Number(n) // 123, typeof number

// let y = +n // 123, typeof number

// console.log(y, typeof y)


// parseInt , ParseFloat


// let x = "123.6rat456"
// let y = parseFloat(x) // 123
// console.log(y, typeof y)


// base conversion













