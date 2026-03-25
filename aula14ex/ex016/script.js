const numero = window.document.querySelector("#numero");

let multiplicador= 1;
function tabuada(){
    let valor = Number(numero.value);
    const lista = document.querySelector("#lista");
    lista.innerHTML = "";
    const txt3 = document.querySelector("#texto3");
    txt3.textContent = `tabuada do número: + ${valor}`;
    if(valor === 0){
        alert("Toda multiplicação por 0 é 0");
    } else if (!Number.isInteger(valor)){
        valor = Math.round(valor);
        
    }
    for(multiplicador = 1; multiplicador <= 10; multiplicador++){
        const res = valor * multiplicador;
        const item = document.createElement("li");
        lista.appendChild(item); /* o id = lista foi criada no html*/
        item.textContent = valor + "x" + multiplicador + "=" + res;
    }
}
const botao = window.document.querySelector("#botao");
botao.addEventListener('click', tabuada);
