function moverPersonagem(){
    canvas_obj.fillStyle = "#00F";

    canvas_obj.beginPath();
    canvas_obj.moveTo(x, y);
    canvas_obj.rect(x, y, 20, 20);
    canvas_obj.stroke();
    canvas_obj.fill();
}