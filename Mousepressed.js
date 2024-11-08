
function mousePressed() {
    let buttonWidth = 70;
    let buttonHeight = 20;
    let horizontalSpacing = 70;
    let verticalSpacing = 40;
    let xStart = 470;
    let yStart = 118;
  
    let buttonLabels = [
      ["Popcorn", "Minute Plus"], ["1", "2", "3"], ["4", "5", "6"],
      ["7", "8", "9"], ["PowerLevel", "0", "TimerClock"], ["Stop", "Start"],
      ["Cook", "Defrost", "Reheat"], ["Melt", "Soften"]
    ];
  
    for (let row = 0; row < buttonLabels.length; row++) {
      for (let col = 0; col < buttonLabels[row].length; col++) {
        let x = xStart + col * horizontalSpacing;
        let y = yStart + row * verticalSpacing;
        if (mouseX > x && mouseX < x + buttonWidth && mouseY > y && mouseY < y + buttonHeight) {
          let button = buttonLabels[row][col];
                   clickSound.play();  // Play the button click sound
          if (button >= '0' && button <= '9') {
            inputText += button;  
            displayText = formatTime(inputText);  
          }
          else if (button === "Stop") {
            microwaveOn = false;
            inputText = "";  
            displayText = "3:15";  // Reset to default display
          } else if (button === "Start") {
            microwaveOn = true;
            timer = parseTime(inputText);  
            inputText = "";  // Clear input
            displayText = formatTime(timer);  
          }
        }
      }
    }
  
    
    if (mouseX > 80 && mouseX < 420 && mouseY > 60 && mouseY < 380) {
      doorOpen = !doorOpen;
      if (doorOpen) {
        microwavePlateVisible = true;
      } else {
        microwavePlateVisible = false;
      }
    }
  
    // Check if a food option was clicked on the shelf
    if (mouseX > 700 && mouseX < 800) {
      for (let i = 0; i < foodTypes.length; i++) {
        let y = 100 + i * 35;
        if (mouseY > y && mouseY < y + 30) {
          selectedFoodIndex = i;  // Set the selected food index
          foodOnPlate = foodTypes[selectedFoodIndex];  // Place the food on the plate
        }
      }
    }
  }
  