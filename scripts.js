let numCartas;

//quantasCartas();

function quantasCartas(){
    numCartas = prompt("Insira a quantidade de cartas entre 4 e 14 (números pares)");
    let numPar = Number(numCartas)%2;

    if(Number(numCartas) >= 4 && Number(numCartas) <= 14 && numPar === 0){
        console.log("ta certo");

    } else {
        alert("Por favor insira um número válido!");
        quantasCartas();
    }
}