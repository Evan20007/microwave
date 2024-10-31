let microwave;

function setup() {
    createCanvas(800, 400);
    microwave = new Microwave();
}

function draw() {
    background(220);
    microwave.display();
    microwave.update();
}

class Microwave {
    constructor() {
        this.timer = 0;
        this.isRunning = false;
        this.isDoorOpen = false;
        this.foodInMicrowave = null;
        this.inputTimer = createInput('');
        this.inputTimer.position(150, 350);
        this.inputTimer.size(50);
        this.inputTimer.attribute('placeholder', 'Set Time (s)');
        this.turntableAngle = 0;
        this.timerFinished = false;
        this.foodTypes = ['Pizza', 'Popcorn', 'Soup', 'Noodles', 'Rice'];
        this.selectedFoodIndex = 0;
        this.lastUpdateTime = 0; 
        this.smokeTimer = 0; 
        this.smokeDelay = 5000; 
        this.overheated = false; 
        this.foodPulsing = false; 
    }

    display() {
        this.drawMicrowave();
        if (this.foodInMicrowave) {
            this.drawPlate(); // Draw plate first
            this.drawFood();
        }
        this.drawButtons();
        this.drawFunctionButtons();
        this.showTimer();
        this.drawInstructions();
        this.drawShelf();
        if (this.overheated) {
            this.drawSmoke();
        }
    }

    update() {
        if (this.isRunning) {
            let currentTime = millis();
            if (currentTime - this.lastUpdateTime >= 1000) {
                this.timer--;
                this.lastUpdateTime = currentTime; 
                this.turntableAngle += 0.1;
                this.foodPulsing = true; 

                if (this.timer <= 0) {
                    this.stopMicrowave();
                    this.foodInMicrowave = null;
                    this.timerFinished = true;
                    this.smokeTimer = currentTime; 
                }
            }
        }

        if (this.timerFinished && millis() - this.smokeTimer >= this.smokeDelay) {
            this.overheated = true; 
        }
    }

    drawMicrowave() {
        fill(150);
        rect(50, 50, 400, 250);
        if (this.isDoorOpen) {
            fill(100);
            rect(50, 50, 10, 250);
            fill(150);
            rect(440, 50, 10, 250);
        } else {
            fill(100);
            rect(50, 50, 400, 250);
        }
        fill(0, 0, 100, 100);
        rect(60, 60, 380, 180);
        if (!this.isDoorOpen) {
            fill(200);
            rect(400, 120, 10, 50);
        }
    }

    drawPlate() {
        push();
        translate(250, 175);
        fill(200, 200, 255); // Plate color
        ellipse(0, 0, 70, 70); // Draw plate
        pop();
    }

    drawFood() {
        push();
        translate(250, 175);
        rotate(this.turntableAngle);
        fill(255);
        let pulseSize = this.foodPulsing ? map(sin(frameCount * 0.1), -1, 1, 25, 30) : 30;
        ellipse(0, 0, pulseSize, pulseSize); // Pulsing effect
        fill(255, 0, 0);
        ellipse(0, 0, 30, 30); // Food
        textAlign(CENTER);
        fill(0);
        text(this.foodInMicrowave, 0, 5);
        pop();
        this.foodPulsing = false; // Reset after drawing
    }

    drawSmoke() {
        fill(150, 150, 150, 150);
        for (let i = 0; i < 5; i++) {
            ellipse(250 + random(-20, 20), 175 - i * 10, random(20, 40), random(10, 20)); // Smoke effect
        }
    }

    drawInstructions() {
        fill(0);
        textSize(16);
        textAlign(LEFT);
        text("Cooking Instructions:", 600, 50);
        text(this.getCookingInstructions(), 610, 30);
    }

    getCookingInstructions() {
        switch (this.foodInMicrowave) {
            case 'Pizza':
                return "Heat for 5-10 min.";
            case 'Popcorn':
                return "Heat until popping slows.";
            case 'Soup':
                return "Stir and heat for 3-5 min.";
            case 'Noodles':
                return "Boil water, then heat for 3 min.";
            case 'Rice':
                return "Add water and heat for 10 min.";
            default:
                return "Select food for instructions.";
        }
    }

    showTimer() {
        fill(255);
        textSize(20);
        if (this.timer > 0) {
            text(this.formatTime(this.timer), 200, 100);
        }
        if (this.timerFinished) {
            fill(255, 0, 0);
            textSize(30);
            text('Cooking Finished!', 50, 200);
            textSize(20); 
        }
    }

    formatTime(seconds) {
        let minutes = floor(seconds / 60);
        let secs = seconds % 60;
        return nf(minutes, 2) + ':' + nf(secs, 2);
    }

    drawButtons() {
        fill(0);
        rect(420, 70, 60, 30); 
        rect(420, 110, 60, 30); 
        rect(420, 150, 60, 30); 
        rect(420, 190, 60, 30); 
        fill(255);
        text('Start', 440, 90);
        text('Stop', 440, 130);
        text('Reset', 435, 170);
        text('Replace', 425, 210);
    }

    drawFunctionButtons() {
        fill(0);
        let buttonY = 250;
        rect(50, buttonY, 100, 30); 
        rect(160, buttonY, 100, 30); 
        rect(270, buttonY, 100, 30); 
        rect(380, buttonY, 100, 30); 
        fill(255);
        text('Defrost', 100, buttonY + 20);
        text('Reheat', 210, buttonY + 20);
        text('Cook', 320, buttonY + 20);
        text('Popcorn', 430, buttonY + 20);
    }

    drawShelf() {
        fill(150, 100, 50);
        rect(600, 70, 150, 200);
        fill(255);
        textAlign(LEFT);
        textSize(16);
        text('Select Food:', 610, 90);
        for (let i = 0; i < this.foodTypes.length; i++) {
            fill(i === this.selectedFoodIndex ? 'lightblue' : 255);
            rect(610, 100 + i * 35, 130, 30);
            fill(0);
            text(this.foodTypes[i], 615, 120 + i * 35);
        }
    }
}
