/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperswithMap() {
    //Write your code here
    arr.map(printingThroughMap);
    function printingThroughMap(items){
      if(items.profession==="developer"){
        console.log(items);
      }
    }
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here
    arr.forEach(printingThroughForeach);
    function printingThroughForeach(items){
      if(items.profession==="developer"){
        console.log(items);
      }
    }
  }
  
  function addData() {
    //Write your code here
    let new_item = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(new_item);
    console.log(new_item);
  }
  
  function removeAdmin() {
    //Write your code here
    let filtered_arr = arr.filter(function (val) {
      //callback function
      if (val.profession !== "admin") {
        //filtering criteria
        return val;
      }
    });
    console.log(filtered_arr);
  }
  
  function concatenateArray() {
    //Write your code here
    let arr2 = [
      { id: 5, name: "Ruby Pal", age: "22", profession: "SDE" },
      { id: 6, name: "Anish Kumar", age: "25", profession: "developer" },
      { id: 7, name: "Ankit Dhiman", age: "21", profession: "Manager" },
    ];
   
    let concatArray = arr.concat(arr2);
    console.log(concatArray);
  }