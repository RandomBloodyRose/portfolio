function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(61, 245, 245);
    noStroke();

    // Sun
    if (mouseIsPressed == false) {
        fill(255, 255, 0);
        ellipse(80, 100, 100, 100);
    }

    //Cloud
    drawCloud(frameCount, mouseY);

    // Moon
    if (mouseIsPressed == true) {
        background(0, 0, 139);
        fill(255, 255, 255);
        ellipse(680, 100, 100, 100);
    }

    // Draw multiple trees
    for (let x = 50; x < width; x += 150) {
        drawTree(x, 450);
    }

    // Ground
    fill(93, 143, 115);
    rect(0, 530, 800, 100);


}

function drawCloud(frameCount, mouseY) {
    push();
    translate(frameCount % width, mouseY);

    fill(255);
    for (let i = 0; i < 3; i++) {
        ellipse(0, 0, 50, 30);
        ellipse(30, -10, 50, 30);
        ellipse(15, 10, 50, 30);
        translate(40, 0);
    }

    pop();
}

function drawTree(x, y) {
    // Tree trunk
    fill(51, 20, 28);
    rect(x - 2, y, 20, 80);

    // Tree leaves
    fill(76, 117, 94);
    triangle(x - 25, y + 25, x + 8, y - 30, x + 40, y + 25);

    // Middle
    fill(93, 143, 115);
    triangle(x - 25, y + 5, x + 8, y - 50, x + 40, y + 5);

    // Top
    fill(143, 219, 176);
    triangle(x - 25, y - 25, x + 8, y - 90, x + 40, y - 25);
}
