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