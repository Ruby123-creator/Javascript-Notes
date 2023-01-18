let word = document.getElementById("evaluatedText");
let count = document.getElementById("letterCount");


word.addEventListener("input" , countlength);
 function countlength(){
      
let evaluated_word = word.value;
let length = evaluated_word.length;
count.innerText = length;
 }