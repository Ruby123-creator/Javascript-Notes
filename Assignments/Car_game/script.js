let score = document.querySelector('.score');
let gameScreen = document.querySelector('.gameScreen');
let startScreen = document.querySelector('.startScreen');


startScreen.addEventListener('click', startGame);

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);


let controls = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = {
    speed: 5, // 5px per sec
    score: 0,
    start: false
}


function start(){
  let car = document.querySelector('.car');
     console.log("Car")
     let carRect = car.getBoundingClientRect();
     console.log(carRect)
   
    
     if(controls.ArrowUp && player.y>road.top){
      player.y = player.y-player.speed;
     }
     if(controls.ArrowDown && player.y<road.bottom){
      player.y = player.y+player.speed;
     }
     if(controls.ArrowLeft && player.x>road.left){
      player.x = player.x-player.speed;
     }
     if(controls.ArrowRight && player.x<road.right){
      player.x = player.x+player.speed;
     }
     if(player.start){
      car.style.top = player.y +"px";
      car.style.left = player.x +"px";
      requestAnimationFrame(start);
     }
}

function keyPressed(e) {
    console.log("Pressed",e.key);
    if(controls[e.key]== false){
      controls[e.key] = true;
    //   console.log(controls);
    }
}

function keyReleased(e) {
    console.log("Released",e.key);
    if(controls[e.key] == true){
        controls[e.key] = false;
        // console.log(controls);
      }
}

// startScreen.classList.add('hide');
function startGame() {
     console.log("Clicked")
     player.start = true;
    // add or remove a calss from certain element
    //  console.log(startScreen.classList)
     startScreen.classList.add('hide');
     gameScreen.classList.remove('hide');

     // create a car

     let car = document.createElement('div');
     car.setAttribute('class', 'car');
     car.innerText = "Car";
    //  car.style.left = "10px";
    //  car.style.top = "10px";
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
     
     car.style.backgroundColor = "red";
     gameScreen.appendChild(car);

     requestAnimationFrame(start)



     
     
 

}