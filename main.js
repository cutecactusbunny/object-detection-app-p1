function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

img = "";

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#3ACADF");
    text("dog", 45, 75);
    noFill();
    stroke("#3ACADF")
    rect(30, 60, 450, 350 );
}