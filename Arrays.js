
//spread operator
let arr =[10,20,30,40,50] 
let arr1 = [1,2,...arr ,100]   //spread operator
// arr1 = 1,2,10,20,30,40,50,100
console.log(arr1)



for(let i=0;i<arr.length;i++){   // loop runs five times
    arr1[i] = arr[i]
}
//arr1 = 10,20,30,40,50,40,50,100
console.log(arr1)

arr1 = arr     // arr1 = 10,20,30,40,50
console.log(arr1)
console.log(arr)
arr[0] =100     // arr = 100 ,20,30,40,50
console.log(arr)
arr1[1] =100   // arr1 = 10,100,30,40,50
console.log(arr1)
console.log(arr)
console.log(arr1)

 arr1 = []
console.log(arr1)





// Arrays Destructuring
let num = [10,20,30]


// let a = num[0];
// let b = num[1];
// let c = num[2];

//let [a,b,c] = arr;
let [a,,c] = num;
console.log(a,c);



// Object destructuring

let obj = {
    name : "Ramesh",
    age : 20,
    address : "Delhi"
}

//let name = obj.name
let dob = obj.age;

let {name ,address:b ,age:p} = obj;
console.log(name ,b,p)



let obj1 = [
{name: "Abhishek", age: 26}, 
{name: "Ramesh", age: 10},
{name: "Rahul", age: 30}
]

let [{name:a1, age:a2},m,n] = obj1;

console.log(a1,a2)

// let {name1, age} = r
// console.log(name1, age)

// console.log(r.name, r.age)
console.log(a,m,n)



//Arrays iterator

console.log(typeof arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//for -of loop
for(let x of arr){
    console.log(x);
}
 

for(let x of obj1){
    if(x.age>18){
        console.log(x.name);
    }
}

