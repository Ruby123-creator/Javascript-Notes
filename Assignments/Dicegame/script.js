
let playerName = document.querySelectorAll("input")  //it selects all the input tag element
let btns = document.getElementsByClassName("diceRollButton")  //it selects all the buttons which have class name diceRollButton
let scores = document.getElementsByTagName("span") // it selects all the span tag
// these are arrays which store whole tag element
// [b1,b2,b3,b4,b5,b6]

// events,  addEventListener

//addEvent

for(let i = 0; i<=btns.length-1; i++ ){    // it iterates over the btn array    
   btns[i].addEventListener("click", ()=>{rollDice(btns[i].id)})
}


function rollDice(btn_id){

   btns[btn_id].disabled = true
   
   let  arr= ["1", "2", "3", "4", "5", "6"]
   // 0 - 5
   let randomIndex = Math.floor(Math.random() * 6) // 0 - 5 only integers
   let randomDice = arr[randomIndex]
   // console.log(randomDice)
   scores[btn_id].innerText = randomDice
 
}
let announce = document.getElementsByClassName("output1")

let winner1 = document.getElementById("winner")
let arr = document.getElementsByTagName("span")
winner1.addEventListener("click" ,()=>{declarewinner(arr)});

function declarewinner(arr){
   let max =0;
   let win ="";
   for(let i=0;i<arr.length;i++){
      let x = arr[i].innerText;
      console.log(x);
      if(x>max){
         max = x;
         win = playerName[i].value;
      }
       
   }
      announce[0].innerText = win;
}

// random => 0<=x<1



















