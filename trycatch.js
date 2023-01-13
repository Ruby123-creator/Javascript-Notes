try {

    // code...
  
  } catch (err) {
  
    // error handling
  
  }
//   First, the code in try {...} is executed.
//   If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.
//   If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.  

try {

    alert('Start of try runs');  // (1) <--
  
    lalala; // error, variable is not defined!
  
    alert('End of try (never reached)');  // (2)
  
  } catch (err) {
  
    alert(`Error has occurred!`); // (3) <--
  
  }

  try {
    lalala; // error, variable is not defined!
  } catch (err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
  }
  finally{
    console.log(" OOPS TRY AGAIN!!!")
  }


  // try{
//  let a = download(image_link)
//  a.rename("image.jpg")
// }
// catch(err){
//     console.log("Image Download got failed")
// }
// finally{
//     console.log("try New Image")
// }