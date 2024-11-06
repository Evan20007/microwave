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