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
  