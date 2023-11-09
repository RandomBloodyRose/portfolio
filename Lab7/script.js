let spider, floor, npc1, npc2, apple;
let applePickedUp = false;

function setup() {
    new Canvas(500, 600);
    world.gravity.y = 0;

    spider = new Sprite(100, 400);
    spider.img = 'assets/spider.png';
    spider.scale = .09;
    spider.rotationLock = true;
    
    npc1 = new Sprite();
    npc1.diameter = 50;
    npc1.x = 50
    npc1.y = 50
    npc1.collider = "static"
    npc2 = new Sprite();
    npc2.x = 450
    npc2.y = 550
    npc2.diameter = 50;
    npc2.collider = "static"
    apple = new Sprite();
    apple.x = 450
    apple.diameter = 20;
    apple.collider = "static"

    floor = new Sprite();
    floor.y = height - 10;
    floor.w = width;
    floor.h = 5;
    floor.collider = 'kinematic';
}
dialogueText = ""
function draw() {
    clear();
    if (spider.collides(npc1)) {
        dialogueText = "Hi there! My name is Jill!"
    }
    if (spider.collides(npc2)) {
        dialogueText = "My name is Bob... Billy Bob."
    }
    if (spider.collides(apple)) {
        dialogueText = "I's an apple...Take it? (Press G)"
    }
    if (applePickedUp) {
        spider.position.x = mouseX;
        spider.position.y = mouseY;
    }
    text(dialogueText, 0, 550)
    if (kb.pressing('left')) {
        spider.vel.x = -1.5;
    } else if (kb.pressing('right')) {
        spider.vel.x = 1.5;
    } else if (kb.pressing('up')) {
        spider.vel.y = -1.5;
    } else if (kb.pressing('down')) {
        spider.vel.y = 1.5;
    } else {
        spider.vel.y = 0;
        spider.vel.x = 0;
    }
}
function kb () {
    if (spider.collides(apple) && !applePickedUp) {
        applePickedUp = true;
        apple.remove();
    }
}
// Draw and update is called for every sprite that was created