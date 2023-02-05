/* Symbol :  */ 




//  let s1 = Symbol()   //  value cannot be accessed  // unique value
// console.log(s1)

// let s2 = Symbol() // nomral value
// console.log(s2)

// console.log(s1 == s2) // false

let s1 = Symbol()

// let s2 = s1

const obj = {
    name: "Rahul",
    [s1]: "I am a symbol",
    age: 20,
}

// console.log(obj[s1])
// obj[s1] = `I am a symbol changed`

console.log(obj)


let obj1 = obj 

// obj1 = {
//     name: "Rahul",
//     [s1]: "I am a symbol",
//     age: 20, 
// }


// for in =>  //  it will not display symbol key and value

// function  display(obj) {
//     return obj
// }
// obj = {}

// // user1
// let t = display(obj)
// t.name = "Rohan"
// t.private1 = "dont change"  

// // user2
// let t1 = display(obj)
// // console.log(t1)
// t.private1 = "I will change"

// // user3

// let t2 = display(obj)












