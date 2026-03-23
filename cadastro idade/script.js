function corpo(){    
    
    const header = window.document.querySelector("#cabeça");
    const txt = window.document.querySelector("#texto");
    const txt1 = window.document.querySelector("#texto1");
    const inp = window.document.querySelector("#textoano");
    
    txt.textContent ='Selecione seu nascimento:';
    txt1.textContent = 'Alienígena';
    header.textContent = 'Verificador de idade';
}
 function verificar(){   
     let data = new Date();
     let ano = data.getFullYear();
     let fano = window.document.querySelector("#textoano");
     let res = window.document.querySelector("#resultado");
     if(fano.value.length == 0 || Number(fano.value)> ano){
        alert("Verifdique os dados!")

     }else{
         let fsex = window.document.getElementsByName("radsex")
         let idade = ano - Number(fano.value);
         let genero = '';
         if (fsex[0].checked){
            genero= "Homem";
        }else if (fsex[1].checked){
            genero = "Mulher";
        } else{
            genero = "Alienígena";
        }
        res.innerHTML = `Você é um(a)${genero} e tem ${idade} anos`
    }
}