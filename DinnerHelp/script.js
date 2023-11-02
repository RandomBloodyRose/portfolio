//Options for each questions
let typeOptions = [
    "Skillet",
    "Air-Fry",
    "Bake",
    "Roast",
    "Pan",
    "Boil",
    "Microwave",
];

let dinnerOptions = [
    "Spaghetti and Meatballs",
    "Chicken Wings",
    "Salmon",
    "Pizza",
    "Steak",
    "Burgers",
    "Chicken Breast",
    "Pork Chops",
    "Fried Rice with Steak",
    "Fried Rice with Egg",
    "Sandwitch",
    "Fettucine",
    "LeftOvers",
];

let sideDishOptions = [
    "Garlic Bread",
    "Corn",
    "French Fries",
    "Mashed Potatoes",
    "Steamed Vegetables",
    "Rice",
    "Nothing",
    "Curly Fries",
    "Eggs",
    "Bacon",
];

//Mode btw Title Screen and Operation
var mode;

function setup() {
    mode = 0;
    createCanvas(500, 300);
    noLoop();
}

function draw() {
    clear();
    if (mode == 0) {
        // Title Screen
        background("lightgreen")
        textSize(30);
        text("What's For Dinner?", 110, 120);
        textSize(20);
        text("Press Enter then Click", 140, 150);
        ellipse(250, 240, 100, 40);
        ellipse(250, 240, 50, 20);
        textSize(80);
        text("?", 230, 240);
    }
    if (mode == 1) {
        // ChanceOperation
        background("lightblue");
        textSize(30);
        textAlign(CENTER, CENTER);
        fill(0);

        // Title
        text("Today we have...", width / 2, 70);

        // Pick random dinner, type, and side dish suggestions
        let typeSuggestion = random(typeOptions);
        let dinnerSuggestion = random(dinnerOptions);
        let sideDishSuggestion = random(sideDishOptions);

        text("How?: " + typeSuggestion, width / 2, height / 2 + 30);
        text(dinnerSuggestion, width / 2, height / 3 + 50);
        text("Side Dish: " + sideDishSuggestion, width / 2, height / 2 + 60);

    }
}

// Title Screen Machanic
function keyPressed() {
    if (keyCode === ENTER) {
        mode = 1;
    }
}

// Operations Machanic
function mouseClicked() {
    redraw();
}