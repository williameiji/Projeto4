let numCartas;

let gifs = ["/Projeto_4_parrotsCardGame/imagens/bobrossparrot.gif", "/Projeto_4_parrotsCardGame/imagens/explodyparrot.gif", "/Projeto_4_parrotsCardGame/imagens/fiestaparrot.gif", "/Projeto_4_parrotsCardGame/imagens/metalparrot.gif", "/Projeto_4_parrotsCardGame/imagens/revertitparrot.gif", "/Projeto_4_parrotsCardGame/imagens/tripletsparrot.gif", "/Projeto_4_parrotsCardGame/imagens/unicornparrot.gif"]


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
    }
}


function embaralhar(){
    return Math.random() - 0.5;
}

function adicionarCartas(){
    let cont = 0;
    let divCartas = document.querySelector(".teste");
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
    setTimeout(compararCartas, 2000);
    
}


function compararCartas(){
    let x = document.querySelectorAll(".flip .cartaFrente img");
    let z = document.querySelectorAll(".cartaFlip.flip");
    let y = document.querySelector(".cartaFlip .flip");

    
    if (x.length > 1){
        let a = x[0].src;
        let b = x[1].src;
       

        let i = 0;
        if (a != b){

            
            while(i < z.length) {
                
                z[i].classList.remove("flip")
                //x = [""];
                //z = [""];
                i++;
            }
            
        }else {
            while(i < z.length) {
            z[i].classList.add("flipOk")
            z[i].classList.remove("flip")
            i++;
        }
        }

    }   
    x = [""];
                z = [""];

    console.log(x)
    console.log(z)
}