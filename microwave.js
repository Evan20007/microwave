function drawMicrowave() {
    fill(150);
    rect(70, 40, 620, 600, 10); // Microwave frame
  
    
    fill(200, 200, 255, 100);  
    rect(80, 60, 340, 320); 
  
    if (!doorOpen) {
      fill(100);
      rect(430, 130, 25, 180, 5);  // Handle when the door is closed
    }
  
    
    if (doorOpen && microwavePlateVisible) {
      push();  
      translate(250, 250);  
      rotate(plateRotation);  
      fill(255);  
      stroke(0);  
      strokeWeight(4);
      ellipse(0, 0, 150, 150);  
  
      
      if (foodOnPlate !== null) {
        imageMode(CENTER);
        image(foodImages[selectedFoodIndex], 0, 0, 100, 100);  
      }
  
      pop();  
    }
  }