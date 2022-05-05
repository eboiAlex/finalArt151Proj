function setup() {
    //set up
    var canvas = createCanvas(700, 500, WEBGL);
    //holder for html
    canvas.parent('sketch-holder');
}

function draw() {
    //sphere colors and thickness
    noFill();
    strokeWeight(3);
    stroke(3, 152, 252, 20);
    background(0);
    
    //the moving dimentions of the sphere
    push(); 
    rotateX(frameCount / 100);
    rotateY(frameCount / 100);
    rotateZ(frameCount / 100);
    sphere(150, 24, 16);
    pop();
  }