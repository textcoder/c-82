Color = "black";
radius = 100;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mouse_event = " ";



canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouse_event = "mousedown";
radius = document.getElementById("Radius").value;
Color = document.getElementById("Color").value;

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouse_event = "mouseup";

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouse_event = "mouseleave";

}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

    current_mouse_x = e.clientX-canvas.offsetLeft;
    current_mouse_y = e.clientY-canvas.offsetTop;
    
    if(mouse_event == "mousedown"){

ctx.beginPath();
ctx.strokeStyle = Color;


        console.log("last position of x & y coordinates = ");
        console.log("x= " + last_x + "y= " + last_y);
ctx.moveTo(last_x, last_y);
        console.log("current position of x & y coordinates = ");
        console.log("x= " + current_mouse_x + "y= " + current_mouse_y);
    
        ctx.arc(current_mouse_x, current_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();

    }

    last_x = current_mouse_x;
    last_y = current_mouse_y;
}

function clear_area(){
    ctx.clearRect(0,0,800,600);

}


