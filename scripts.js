let numCartas;

let gifs = ["/Projeto_4_parrotsCardGame/imagens/bobrossparrot.gif", "/Projeto_4_parrotsCardGame/imagens/explodyparrot.gif", "fiestaparrot.gif", "/Projeto_4_parrotsCardGame/imagens/metalparrot.gif", "/Projeto_4_parrotsCardGame/imagens/revertitparrot.gif", "/Projeto_4_parrotsCardGame/imagens/tripletsparrot.gif", "/Projeto_4_parrotsCardGame/imagens/unicornparrot.gif"]


let selecGifs = [];
let dobroGifs = [];


quantasCartas();

function quantasCartas(){
    numCartas = prompt("Insira a quantidade de cartas entre 4 e 14 (números pares)");
    let numPar = Number(numCartas)%2;

    if(Number(numCartas) >= 4 && Number(numCartas) <= 14 && numPar === 0){
        selecionarCartas();
        adicionarCartas();
        
    } else {
        alert("Por favor insira um número válido!");
        quantasCartas();
    }
}

function selecionarCartas () {
    let num = numCartas / 2;

    for (let i = 0; i < num; i++){
        selecGifs.push(gifs[i]);
        dobroGifs = selecGifs.concat(selecGifs);
        console.log(dobroGifs)
    }
}

function adicionarCartas(){
    let cont = 0;
    let divCartas = document.querySelector(".teste");
    while (cont < numCartas){
        divCartas.innerHTML = divCartas.innerHTML + `<div class="cartas">
        <div class="cartaFlip" onclick="trocarCarta(this)">
            <div class="cartaFrente">
                <img src="${dobroGifs[cont]}" >
            </div>
            <div class="cartaCostas" >
                <img src="/Projeto_4_parrotsCardGame/imagens/front.png">
            </div>
        </div>
    </div>`
    console.log(divCartas.innerHTML)
        cont++;
    }
}

function trocarCarta(teste){
    teste = teste.classList.add("flip");
    

}
