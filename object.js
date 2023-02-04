// objects , arrays (objects), set, map 

let obj1 = {
    "a" : 1 , 
    "b" : 2 ,
    "c" : 3 ,
    "a": 4

}

// a: 4   b:2  c : 3    ans = b c a

console.log(obj1)



// let earth = {
//     "name" : "earth" ,
//     "age" : 4.5 ,
//     "isPlanet" : true ,
//     "shape" : "round" ,
// }
// console.log(earth)

// let obj = {
//       b : true ,
//       a : 1 , 
//       20 : "hello",
//       c : "apple" ,
//       "hello world" : 4,
//       true : 100,
//       10: 200,


// }


// pure numbers  - string

// string


let obj = {
    c: "apple",
    2: "hello",
    0: 100,
    a: 1,
    b: true,
    1: 200,
    number: 30,
    f: 10,
    "1tb": 1000,

}

console.log(obj["1"])
console.log(obj[1])


// dot naotaion: 
// console.log(obj.a)
// console.log(obj.b)
// console.log(obj."hello world")




// let obj = {
//     a : 1 ,
//     b : 2 ,
//     c : 3 ,
//     10: 100,
//     "hello world" : 4,
// }

// console.log(obj)
// // let t = "a"

// // console.log(obj.a)

// // array syntax 

// // console.log(obj["a"])


// // for in loop : 

// for(let t in obj){
//     console.log(t, typeof(t),  obj[t])
// }



// let obj1 = {
//      a : 10
// }

// let t = "a"
// // console.log(obj1["t"])





// let arr = [10,20,30,40,50,60,70,80,90,100]
// let t = 4

// arr[t] // 50



let obj2 = {
    a: 1,
    b: 2,
    c: 3,
}
let t1 = "a"



console.log(a)  // error
console.log(obj2[a]) // error because a is not defined
console.log(obj2["a"]) // 1
console.log(obj2[t1]) // 1 , t1 = "a"
console.log(obj2["t1"]) // undefined
console.log(obj2.a) // 1





// arr[t]

// obj.t


let obj3 = {
    a: 1,
    b: 2,
    c: 3,
}


// add some values: 

// obj.z = 10

// obj["hello world"] = 100


// console.log(obj)

// lets take two batt and ball 

let bat = {
    "height": 3,
    "weight": 200,
}

let ball = {
    "color": "white",
    "shape": "circle",
}


let cricket = {}

for(let t1 in bat){
    cricket[t1] = bat[t1]
    // console.log(t1, bat[t1])
}

for(let t2 in ball){
    cricket[t2] = ball[t2]
}

console.log(cricket)






// let obj1 = {
//     a: 1,
//     b: 2,
//     c: {x: 10, y: 20}
// }

// let obj2 = {} 
// Object.assign(obj2, obj1)
// console.log(obj2)


// let obj2  = {...obj1}



// obj1.a = 100 
// obj2.b = 200 

// console.log(obj1)
// console.log(obj2)


// let obj2 = {...obj1}


// obj1.a = 100 
// obj2.b = 200

// obj1.c.x = 1000
// obj2.c.y = 2000

// console.log(obj1)
// console.log(obj2)


// let obj1 = {
//         a: 1,
//         b: 2,
//         c: {x: 10, y: 20}
//     }

//   let obj2 =  structuredClone(obj1) // deep copy
//   obj1.c.x = 1000
//  obj2.c.y = 2000

// console.log(obj1)
// console.log(obj2)
  


let obj7 = {
    a: 1,
    b: 2,
    c: {x: 10, y: 20}
}

function abhishekClone(obj){
let obj2 = {}


for(let key in obj){
obj2[key] = obj[key] // is obj2[key] a object or not
}

console.log(obj2)

}

abhishekClone(obj7)