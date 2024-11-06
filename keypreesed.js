function isMouseWithinCircle(x, y, radius) {
    let distance = dist(mouseX, mouseY, x, y);
    return distance < radius;
}
function mousePressed() {
    if (mouseX > 420 && mouseX < 480) {
        if (mouseY > 70 && mouseY < 100) {
            microwave.startMicrowave();
        } else if (mouseY > 110 && mouseY < 140) {
            microwave.stopMicrowave();
        } else if (mouseY > 150 && mouseY < 180) {
            microwave.resetMicrowave();
        } else if (mouseY > 190 && mouseY < 220) {
            microwave.placeFood();
        }
    }

    if (mouseX > 600 && mouseX < 750 && mouseY > 100 && mouseY < 300) {
        for (let i = 0; i < microwave.foodTypes.length; i++) {
            if (mouseY > 100 + i * 35 && mouseY < 100 + i * 35 + 30) {
                microwave.selectFood(i);
            }
        }
    }

    // Check if food is clicked to take it out
    if (microwave.isDoorOpen && microwave.timerFinished && microwave.showPrompt) {
        if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 200) {
            microwave.takeOutFood();
        }
    }
}

function keyPressed() {
    if (keyCode === BACKSPACE) {
        microwave.resetMicrowave();
    } else if (keyCode === ENTER) {
        microwave.setTimer();
    } else if (key === 'o') {
        microwave.openDoor();
    } else if (key === 'c') {
        microwave.closeDoor();
    }
}
