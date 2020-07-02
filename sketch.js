var ball;
var ball.style;

function setup() {
  createCanvas(1200,800);
ball = createSprite(20, 20, 5, 5);
}

function draw() {
  background(0,0,0);  
  ball.onmousedown = function(event) {
    // (1) prepare to moving: make absolute and on top by z-index
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
  
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(ball)};
  
     centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
      ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }
  
    // move our absolutely positioned ball under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null};
    };