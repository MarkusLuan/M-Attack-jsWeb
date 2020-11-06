function onKeyPress(event){
    var key = event.code;
    key = key.toUpperCase();
    key = key.replace("KEY", "");

    if (key == "SPACE"){
        console.log("Atirar");
    }

    keysMovimentacao(key);
    
    console.log(key);
    console.log(x + ", " + y);
}

function keysMovimentacao(key) {
    var velocidade = 1.5;

    if (key == "ARROWUP"){
        y -= velocidade;
    }

    if (key == "ARROWDOWN"){
        y += velocidade;
    }
    
    if (key == "ARROWLEFT"){
        x -= velocidade;
    }

    if (key == "ARROWRIGHT"){
        x += velocidade;
    }
}