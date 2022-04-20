var jogador = null;
var vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X')
function escolherQuadrado(id) {
    if(vencedor!==null){
        return false;
    }
    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML!= '-') {
        return false;
        
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador==='X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }
    mudarJogador(jogador);
    checaVencedor()
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
    
}

function checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);
    
    if (checaSequencia(quadrado1,quadrado2,quadrado3)) {
        mudarCor(quadrado1,quadrado2,quadrado3);
        mudarVencedor(quadrado1);
        return false;
    }
    if (checaSequencia(quadrado4,quadrado5,quadrado6)) {
        mudarCor(quadrado4,quadrado5,quadrado6);
        mudarVencedor(quadrado4);
        return false;
    }
    if (checaSequencia(quadrado7,quadrado8,quadrado9)) {
        mudarCor(quadrado7,quadrado8,quadrado9);
        mudarVencedor(quadrado7);
        return false;
    }
    if (checaSequencia(quadrado1,quadrado4,quadrado7)) {
        mudarCor(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado1);
        return false;
    }
    if (checaSequencia(quadrado2,quadrado5,quadrado8)) {
        mudarCor(quadrado2,quadrado5,quadrado8);
        mudarVencedor(quadrado2);
        return false;
    }
    if (checaSequencia(quadrado3,quadrado6,quadrado9)) {
        mudarCor(quadrado3,quadrado6,quadrado9);
        mudarVencedor(quadrado3);
        return false;
    }
    if (checaSequencia(quadrado1,quadrado5,quadrado9)) {
        mudarCor(quadrado1,quadrado5,quadrado9);
        mudarVencedor(quadrado1);
        return false;
    }
    if (checaSequencia(quadrado3,quadrado5,quadrado7)) {
        mudarCor(quadrado3,quadrado5,quadrado7);
        mudarVencedor(quadrado3);
        return false;
    }
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    document.getElementById('vencedor-selecionado').innerHTML = vencedor;
}

function mudarCor(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0' ;
    quadrado3.style.background = '#0f0';

}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
   var eigual = false;
    if (quadrado1.innerHTML!=='-' && quadrado1.innerHTML===quadrado2.innerHTML && quadrado2.innerHTML===quadrado3.innerHTML) {
        eigual = true;
    }
    return eigual;
}

function reiniciar( ) {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for (var i=1;i<=9;i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
     mudarJogador('X');
}