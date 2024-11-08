function drawButtons() {
    fill(200);
    textAlign(CENTER, CENTER);
    textSize(12);
  
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
  
    // Draw first row separately for alignment (two buttons)
    for (let i = 0; i < buttonLabels[0].length; i++) {
      let x = xStart + i * horizontalSpacing;
      let y = yStart;
      rect(x, y, buttonWidth, buttonHeight, 5);  // Draw button
      fill(0);
      text(buttonLabels[0][i], x + buttonWidth / 2, y + buttonHeight / 2);  // Label button
      fill(200);
    }
  
    // Draw number pad (next four rows of buttons)
    for (let row = 1; row <= 4; row++) {
      for (let col = 0; col < buttonLabels[row].length; col++) {
        let x = xStart + col * horizontalSpacing;
        let y = yStart + row * verticalSpacing;
        rect(x, y, buttonWidth, buttonHeight, 5);  // Draw button
        fill(0);
        text(buttonLabels[row][col], x + buttonWidth / 2, y + buttonHeight / 2);  // Label button
        fill(200);
      }
    }
  
    // Draw Stop and Start buttons in a separate row with more spacing
    let stopStartY = yStart + 5 * verticalSpacing;
    for (let i = 0; i < buttonLabels[5].length; i++) {
      let x = xStart + i * horizontalSpacing;
      rect(x, stopStartY, buttonWidth, buttonHeight, 5);  // Draw button
      fill(0);
      text(buttonLabels[5][i], x + buttonWidth / 2, stopStartY + buttonHeight / 2);  // Label button
      fill(200);
    }
  
    // Draw Cook, Defrost, Reheat buttons in a row below Stop/Start
    let cookRowY = stopStartY + verticalSpacing;
    for (let i = 0; i < buttonLabels[6].length; i++) {
      let x = xStart + i * horizontalSpacing;
      rect(x, cookRowY, buttonWidth, buttonHeight, 5);  // Draw button
      fill(0);
      text(buttonLabels[6][i], x + buttonWidth / 2, cookRowY + buttonHeight / 2);  // Label button
      fill(200);
    }
  
    // Draw Melt and Soften buttons below the Cook row
    let meltRowY = cookRowY + verticalSpacing;
    for (let i = 0; i < buttonLabels[7].length; i++) {
      let x = xStart + (i + 1) * horizontalSpacing - buttonWidth / 2;  // Adjust for centering
      rect(x, meltRowY, buttonWidth, buttonHeight, 5);  // Draw button
      fill(0);
      text(buttonLabels[7][i], x + buttonWidth / 2, meltRowY + buttonHeight / 2);  // Label button
      fill(200);
    }
  }
  