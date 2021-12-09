x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "apple.png";
speak_data = "";
to_number = "";

function preload() {
    loadImage.apple();
    to_number = Number(content);
    if (Number.isInteger(to_number)) {
        apple = "set";
    } else {
        apple = "The speech has not recognised a number"
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (apple == "set") {
        for(var i = 1; i <= to_number; i++) {
            x = Math.floor(Math.random() * 700);
            x = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
            document.getElementById("status").innerHTML = to_number + "Apples Drawn";

        }
    }
}