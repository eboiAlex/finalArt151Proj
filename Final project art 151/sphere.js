function setup() {
    var canvas = createCanvas(700, 500, WEBGL);
    canvas.parent('sketch-holder');
}

function draw() {
    noFill();
    strokeWeight(3);
    stroke(3, 152, 252, 20);
    background(0);
    
    push(); 
    rotateX(frameCount / 100);
    rotateY(frameCount / 100);
    rotateZ(frameCount / 100);
    sphere(150, 24, 16);
    pop();
  }