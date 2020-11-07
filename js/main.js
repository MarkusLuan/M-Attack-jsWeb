function moverPersonagem(){
    canvas_obj.fillStyle = "#00F";

    canvas_obj.beginPath();
    canvas_obj.moveTo(player.x, player.y);
    canvas_obj.rect(player.x, player.y, player.w, player.h);
    canvas_obj.stroke();
    canvas_obj.fill();
}