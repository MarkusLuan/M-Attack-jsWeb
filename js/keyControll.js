function onKeyPress(event){
    var key = event.code;
    key = key.toUpperCase();
    key = key.replace("KEY", "");

    if (key == "SPACE"){
        console.log("Atirar");
    }

    keysMovimentacao(key);
    
    console.log(key);
    console.log(player.x + ", " + player.y);
}

function keysMovimentacao(key) {
    if (key == "ARROWUP"){
        player.y -= player.velocidade;
    }

    if (key == "ARROWDOWN"){
        player.y += player.velocidade;
    }
    
    if (key == "ARROWLEFT"){
        player.x -= player.velocidade;
    }

    if (key == "ARROWRIGHT"){
        player.x += player.velocidade;
    }
}