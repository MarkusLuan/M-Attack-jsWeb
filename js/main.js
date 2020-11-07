function moverPersonagem(){
    canvas_obj.fillStyle = "#00F";

    canvas_obj.beginPath();
    canvas_obj.moveTo(player.x, player.y);
    canvas_obj.rect(player.x, player.y, player.w, player.h);
    canvas_obj.stroke();
    canvas_obj.fill();
    canvas_obj.closePath();
}

function moverTiros(){
    //Desenha cada tiro no canvas
    for (var tiro of tiros){
        tiro.y += tiro.direcao;

        canvas_obj.fillStyle = "#F00";

        canvas_obj.beginPath();
        canvas_obj.moveTo(tiro.x, tiro.y);
        canvas_obj.rect(tiro.x, tiro.y, 3, Math.abs(tiro.direcao));    
        canvas_obj.fill();
        canvas_obj.closePath();

        //Remover o tiro da memória caso já tenha saido da tela
        if (tiro.y <= 0 || tiro.y >= h){
            var index = tiros.indexOf(tiro);
            tiros.splice(index, 1);
        }
    }
}