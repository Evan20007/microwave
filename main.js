let displayText = "3:15";  
let inputText = "";        
let timer = 0;             
let microwaveOn = false;   
let paused = false;        
let doorOpen = false;      
let microwavePlateVisible = false; 
let plateRotation = 0;     
let foodOnPlate = null;    

let foodTypes = ["Pizza", "Burger", "Soup", "Noddle"];  
let selectedFoodIndex = -1;  


let foodImages = [];  
//let spinSound;    // Sound when the microwave plate spins
//let endSound;     // Sound when the timer ends
//let clickSound;   // Sound for button clicks


function preload() {
  foodImages[0] = loadImage('pizza.jpg');  
  foodImages[1] = loadImage('burger.jpg');
  foodImages[2] = loadImage('soup.avif');
  
  foodImages[4] = loadImage('noddle.jpeg');
	// Load the sound files
  //spinSound = loadSound('spin.mp3');  
  endSound = loadSound('microwave-finished-82491.mp3');    
  clickSound = loadSound('microwave-button-82493.mp3');  
}


function setup() {
  createCanvas(800, 450);  
}

// Main drawing function
function draw() {
  background(220);          
  drawMicrowave();          
  drawButtons();            
  drawDisplay();            
  drawShelf();             

  
  if (microwaveOn && timer > 0) {
    
    timer -= 1;
    displayText = formatTime(timer);  

   
    plateRotation += 0.1; 
if (frameCount % 10 === 0 && !spinSound.isPlaying()) {
      spinSound.play();
    }
   
    if (timer <= 0 && microwaveOn) {
      microwaveOn = false;  
      displayText = "End";  // Display "End" when the timer reaches 0
    }
		if (!endSound.isPlaying()) {
        endSound.play();
      }
  }
}

function drawDisplay() {
  fill(0);
  rect(470, 60, 120, 50);  
  fill(0, 255, 0);  // Green color for the display text
  textSize(26);
  textAlign(CENTER, CENTER);
  text(displayText, 530, 85);  
}


function formatTime(time) {
  let minutes = int(time / 60);
  let seconds = int(time % 60);
  return nf(minutes, 1) + ":" + nf(seconds, 2);
}


function parseTime(input) {
  let parts = input.split(":");
  let minutes = int(parts[0] || 0);
  let seconds = int(parts[1] || 0);
  return minutes * 60 + seconds;
}
