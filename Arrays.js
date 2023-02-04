// Spread Operator : It is used to concatinate two or more arrays

const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];
const newl = ["Singh", "Shakya"];
const newArray = [...hege , ...stale , ...newl ];
console.log(newArray);
//output: ["Cecilie","Lone","Emil","Tobias","Linus","Singh", "Shakya"]

// .concat() method - to concate only two arrays
const children = hege.concat(stale);
console.log(children); 
//output: ["Cecilie", "Lone","Emil", "Tobias", "Linus"]




//to create duplicate arrays with one reference value
let arr =[10,20,30,40,50]   

arr1 = arr     // arr1 = 10,20,30,40,50       //here we don't create two different arrays
console.log(arr1)
console.log(arr)
arr[0] =100     // arr = 100 ,20,30,40,50
console.log(arr)
arr1[1] =100   // arr1 = 10,100,30,40,50
console.log(arr1)
console.log(arr)       // changes shows in both array because there is only one array in heap memory but with 2 reference value



//for-of loop: 

for(let x of arr){
    console.log(x)
}



 //Arrays iterator - for-each loop

console.log(typeof arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

/*
Array destructuring  :-
The regular way is to access an element in the array. first, 
we iterate the given array and access each of the elements one by one. 
but when use this array destructuring we do not need to use any of the indexes or loop.
*/
const date = ['11', '02', '1982']
const [month, , year] = date
console.log(month) // 11
console.log(year) // 1982


let simpleArray = ["Volvo", "BMW", "Ford", "Mazda" , "Toyota"];
let [ car1, car2 , ...rest ] = simpleArray;

console.log(car1); // Output: 'Volvo'
console.log(car2); // Output: 'BMW'
console.log(rest); // Output: ['Ford','Mazda']


const arr2 = ['Pyke', 'Black Sun', 'Kanjiklub', 'Crimson'];

const {0: first, 3: fourth, 9: tenth = 'moon'} = arr2;
console.log(tenth) //output: 'moon'
// here index number 10th is undifine so, default value will assign for this tenth variable.



//swapping of 2 values by using arrays destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a) //output: 2
console.log(b) //output: 1



//define simple number array
const simpleArry = [4, 6, 7, 8, 10];

//create simple array
function test ([a ,, b]){
  let first = a + b;
  let second = a*b;

  return [first , second];
}

//destructuring use case
const response = test(simpleArry);
const [fir , sec] = response;

console.log(response); // output: [ 11, 28 ]



function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // swap element using destructuring
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

// Using Taditional array to swap
let intarray = new Array(1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92);
const newarray = bubbleSort(intarray);
//print sorted arraT
console.log(newarray);




// OBJECT DESTRUCTURING
const person = {  
    name: 'Ram Jekson',
    age: 27,
    vehicles: {
        car: 'limousine',
        bike: 'ktm-duke',
        plane: 'lufthansa'
       }
    };
  
  const { name, age, county = 'Englend' , vehicles:{ car: ownerCar } } = person; 
  
  console.log(name); // Output: 'Ram'
  console.log(age); // Output: 27
  console.log(county); // Output: 'Englend'
  console.log(ownerCar); // Output: 'limousine'



  const student = {
    firstname: 'Jhon',
    lastname: 'Snow',
    country: 'England',
    ielts_scores: {
      speaking: 8,
      listening: 7.5,
      writing: 8.5,
      reading: 7.0
    }
};

//access nested object
function calculateOverall ({firstname, ielts_scores:{speaking,listening,writing ,reading}}){

  //cal overall mark
  let overall = (speaking + listening + writing + reading)/4;

  //return statement
  return `The student name is ${firstname}, and his/her overall mark is ${overall} for ILTS.`;
}

const result = calculateOverall(student);
//print student statement 
console.log(result);

// // Higher order functions
// // Map, filter and reduce
// // Sort, forEach, find etc

// // Strings basics and templating
// // Important string methods
// // RegEx introduction
// // String comparisons



// // indexOf(), lastIndexOf 
// // slice()
// // splice()
// // split join reverse







