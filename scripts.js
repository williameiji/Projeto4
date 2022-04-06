let numCartas;

quantasCartas();

function quantasCartas(){
    numCartas = prompt("Insira a quantidade de cartas entre 4 e 14 (números pares)");
    let numPar = Number(numCartas)%2;

    if(Number(numCartas) >= 4 && Number(numCartas) <= 14 && numPar === 0){
        console.log("ta certo");
        adicionarCartas();
    } else {
        alert("Por favor insira um número válido!");
        quantasCartas();
    }
}


function adicionarCartas(){
    let cont = 0;
    let divCartas = document.querySelector(".cartas");
    console.log(divCartas)
    while (cont < numCartas){
        divCartas.innerHTML = divCartas.innerHTML + `<div class="cartaVirada"><img src="/Projeto_4_parrotsCardGame/imagens/front.png"></div>`
        console.log(divCartas)
        cont++;
    }

}