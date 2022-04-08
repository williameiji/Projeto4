let numCartas;
let gifs = ["/Projeto_4_parrotsCardGame/imagens/bobrossparrot.gif", "/Projeto_4_parrotsCardGame/imagens/explodyparrot.gif", "/Projeto_4_parrotsCardGame/imagens/fiestaparrot.gif", "/Projeto_4_parrotsCardGame/imagens/metalparrot.gif", "/Projeto_4_parrotsCardGame/imagens/revertitparrot.gif", "/Projeto_4_parrotsCardGame/imagens/tripletsparrot.gif", "/Projeto_4_parrotsCardGame/imagens/unicornparrot.gif"]
let selecGifs = [];
let dobroGifs = [];
let contadorJogadas = 0;
let contadorJogo = 0;
let idInterval;


quantasCartas();

function quantasCartas(){
    numCartas = prompt("Insira a quantidade de cartas entre 4 e 14 (Deve ser números pares)");
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
    }
}

function embaralhar(){
    return Math.random() - 0.5;
}

function adicionarCartas(){
    let cont = 0;
    let divCartas = document.querySelector(".conteudoCartas");
    dobroGifs = dobroGifs.sort(embaralhar);
    while (cont < numCartas){
        divCartas.innerHTML = divCartas.innerHTML + 
        `<div class="cartas">
            <div class="cartaFlip" onclick="trocarCarta(this)">
                <div class="cartaFrente">
                    <img src="${dobroGifs[cont]}" >
                </div>
                <div class="cartaCostas" >
                    <img src="/Projeto_4_parrotsCardGame/imagens/front.png">
                </div>
            </div>
        </div>`
    cont++;
    }
}

function trocarCarta(teste){
    teste.classList.add("flip");
    contadorJogadas ++;
    chamarContador ();
    setTimeout(compararCartas, 2000);
}


function compararCartas(){
    let pegarImg = document.querySelectorAll(".flip .cartaFrente img");
    let trocarFlip = document.querySelectorAll(".cartaFlip.flip");
        
    if (pegarImg.length > 1){
        let img1 = pegarImg[0].src;
        let img2 = pegarImg[1].src;
        let i = 0;

        if (img1 != img2){
            while(i < trocarFlip.length) {
                trocarFlip[i].classList.remove("flip");
                i++;
            }
            
        }else {
            while(i < trocarFlip.length) {
               trocarFlip[i].classList.add("flipOk");
            trocarFlip[i].classList.remove("flip");
            i++;
            jogoFinalizado();
            }
        }
    }   
    pegarImg = [""];
    trocarFlip = [""];
}

function jogoFinalizado () {
    let tudoCerto = document.querySelectorAll(".cartaFlip.flipOk");
    console.log(tudoCerto)
    if (tudoCerto.length == dobroGifs.length){
        alert(`Você ganhou em ${contadorJogadas} jogadas e terminou com ${contadorJogo} segundos!`);
        reiniciarJogo();
    }
}

function reiniciarJogo () {
    let reiniciar = prompt("Deseja jogar novamente?(Digite 'sim' ou 'não')");
    console.log(reiniciar)
    if (reiniciar == "sim"){
        location.reload();
    }else if (reiniciar != "não"){
        reiniciarJogo ();
    }else{
        clearInterval(idInterval);
    }
}

function chamarContador (){
    if(contadorJogadas === 1){
        idInterval = setInterval(Contador, 1000);
    }
}

function Contador() {
    contadorJogo++;
    document.querySelector(".contador").innerHTML = contadorJogo;
}