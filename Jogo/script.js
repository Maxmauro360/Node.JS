let randomnumber = Math.floor(Math.random()*100 + 1)

const numero =  window.document.querySelector("#numero");
const botao =  window.document.querySelector("#botao");
const suposiçao =  window.document.querySelector("#suposiçao");
const ultimoR =  window.document.querySelector("#ultimoR");
const dica =  window.document.querySelector("#dica");

let contador_suposiçao = 1;
function check(){
    const palpite_usuario = Number(numero.value);

    if (contador_suposiçao === 1){
        suposiçao.textContent="Palpites anteriores:";
    }

    suposiçao.textContent += `${palpite_usuario}`;
     if(palpite_usuario ===randomnumber){
        ultimoR.textContent = "Você acertou!";
        ultimoR.style.backgroundColor = "green";
        dica.textContent= " ";
        setGameOver();
     }else if(palpite_usuario === 10) {
        ultimoR.textContent= "GAME OVER!";
        dica.textContent=" ";
        setGameOver()
     } else {
        ultimoR.textContent = "Errado!";
        ultimoR.style.backgroundColor = "red";

        if (palpite_usuario < randomnumber){
            dica.textContent= "Seu palpite foi muito baixo...";

        }else{
            dica.textContent ="Seu palpite foi muito alto...";
        }
        contador_suposiçao = contador_suposiçao + 1;
        numero.value = " " /* limpa o campo */
        numero.focus()     /*coloca o cursor de volta */

     }

}

botao.addEventListener('click', check )

function setGameOver(){
    numero.disabled = true;
    botao.disabled = true;
    ultimoR.textContent = "Clique f5par jogar de novo!";
}