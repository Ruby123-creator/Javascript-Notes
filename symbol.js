let z=7;
z=1;
console.log(z);

function primitiveMutator(val) {
    val = val + 1;
  }
  let x = 1;
  primitiveMutator(x);


  console.log(x); // 1
  function objectMutator(val) {
    val.prop = val.prop + 1;
  }
  let obj = { prop: 1 };
  objectMutator(obj);
  console.log(obj.prop); // 2


  /**  
   * Primitive values are also immutable. They can’t be changed. Of course, a variable with a primitive assigned can be reassigned. For example, when you write the code let x = 1; x++;, you've reassigned the variable x. But, you haven't mutated the primitive numeric value of 1.

If you ever pass a value into a function, reassigning that value will not modify the value in the calling location. However, if you modify a non-primitive value, the modified value will also be modified where it has been called from.

 */
  



/**SYMBOL:  A symbol is a primitive which cannot be recreated. In this case a symbols is similar to an object as creating multiple instances will result in values which are not exactly equal. But, a symbol is also a primitive in that it cannot be mutated. 

 */

const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false


const obj5 = {
    name: "Rahul",
    [s1]: "I am a symbol",
    age: 20,
}

for(let x in obj5){
    console.log(x , obj5[x]); // here symbol data type(key & value) is not accessed
}

console.log(obj5); // here key value is not accessed but value can be accessed
// a person can be accessd ,changed and removed if he knows the key


obj5[s1] = `I am a symbol changed`

console.log(obj5)


let obj1 = obj5

obj1 = {
    name: "Rahul",
    [s1]: "I am a symbol",
    age: 20, 
}



let ru = new Object();
let by = new Object();
console.log(ru===by);


