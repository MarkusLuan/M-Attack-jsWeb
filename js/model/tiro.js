const Tiro = (_por) => {
    const por = _por;
    
    var x = (por.x + por.w/2) - 2;
    var y = por.y;
    var direcao = 20; //O tiro se move de 20 em 20 pixeis e tem tamanho de 20 pixeis

    // Se o tiro for do jogador será de baixo para cima
    // Se não será de cima para baixo
    if (por == player){
        direcao *= -1;
    }

    return {
        "por": por,
        "x": x,
        "y": y,
        "direcao": direcao
    }
};