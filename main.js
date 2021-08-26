canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var width_of_line = 1;
var radius = 40;
var color = red;
canvas.addEventListner("mouseDown", myMouseDown);
function myMouseDown (e){
 mouseEvent = "mouseDown";
}
canvas.addEventListner("mouseMove", myMouseMove);
function myMouseMove(e){
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

if (MouseEvent == "mouseDown"){
    ctx.beginpath();
   ctx.strokeStyle = color;
   ctx.lineWidth = width_of_line;
   ctx.arc(current_position_of_mouse_X,current_position_of_mouse_Y, radius,0,2*Math.PI);
   ctx.stroke()
}
}
canvas.addEventListner("mouseUP",myMouseUp);
function myMouseUp(e){
    mouseEvent = "mouseUp";
} 
canvas.addEventListner("mouseLeave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent = "mouseLeave";
} 