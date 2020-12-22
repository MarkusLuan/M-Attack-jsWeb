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

        if (tiroColidir(tiro)){
            index = tiros.indexOf(tiro);
            tiros.splice(index, 1);
        }
    }
}

function moverInimigos(){
    //Desenha cada tiro no canvas
    for (var inimigo of inimigos){
        inimigo.y += inimigo.velocidade;

        var atirar = parseInt(Math.random() * 50);

        if (atirar == 1) {
            var tiro = Tiro(inimigo);
            tiros.push(tiro);
        }

        canvas_obj.fillStyle = "#0FF";

        canvas_obj.beginPath();
        canvas_obj.moveTo(inimigo.x, inimigo.y);
        canvas_obj.rect(inimigo.x, inimigo.y, inimigo.w, inimigo.h);
        canvas_obj.stroke();
        canvas_obj.fill();
        canvas_obj.closePath();

        //Remover o tiro da memória caso já tenha saido da tela
        if (inimigo.y >= h){
            var index = inimigos.indexOf(inimigo);
            inimigos.splice(index, 1);
        }
    }
}

function desenharPontuacao(){
    canvas_obj.font = "30px Arial";
    canvas_obj.fillStyle = "#000";
    canvas_obj.fillText(`Pontos: ${pontos}`, 10, 50);
}

function tiroColidir(tiro){
    var colidiu = false;

    var inimigo = inimigos.find(inimigo => {
        var minX = inimigo.x;
        var maxX = inimigo.x + inimigo.w;
        var minY = inimigo.y;
        var maxY = inimigo.y + inimigo.h;

        return tiro.por != inimigo &&
                (tiro.x >= minX && tiro.x <= maxX) &&
                (tiro.y >= minY && tiro.y <= maxY);
    });

    if (inimigo != null){
        var index = inimigos.indexOf(inimigo);
        inimigos.splice(index, 1);

        if (tiro.por == player) pontos += 2;
        colidiu = true;
    }

    if (tiro.por != player){
        var minX = player.x;
        var maxX = player.x + player.w;
        var minY = player.y;
        var maxY = player.y + player.h;

        if ((tiro.x >= minX && tiro.x <= maxX) &&
            (tiro.y >= minY && tiro.y <= maxY)){
            pontos -= 5;
            colidiu = true;
        }
    }

    return colidiu;
}