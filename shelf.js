// Draw the shelf with food options (food selection)
function drawShelf() {
    fill(150, 100, 50);
    rect(700, 70, 100, 200);  
  
    fill(255);
    textAlign(LEFT);
    textSize(16);
    text('Select Food:', 710, 90);  // Title for food option
  
    // Draw the food options inside the shelf
    for (let i = 0; i < foodTypes.length; i++) {
      fill(i === selectedFoodIndex ? 'lightblue' : 255);
      rect(710, 100 + i * 35, 90, 30);  
      fill(0);
      text(foodTypes[i], 715, 120 + i * 35);  // Display the food name
    }
  }
  