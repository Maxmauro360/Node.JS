
function carregar(){

    const msg = window.document.querySelector('#texto1')
    const msg2 = window.document.querySelector('#texto2')
    const msg3 = window.document.querySelector('#texto3')
    const idadeinput = window.document.querySelector('#idadeinput')
    
    const idade = Number(idadeinput.value)
    msg.textContent ='Selecione sua idade:'
    msg2.innerHTML= `Você é ${tipo} e tem ${idade} anos `
    msg3.textContent = 'Preencha os dados acima para ver o resultado!'
    
    if(idade<=4 ){
        tipo= 'nenem'
         
    } else if (idade <=12 ){
        tipo = 'criança'
               
    } else if (idade<=17){
        tipo = 'adolescente'
      
    }else if (idade<=59){
        tipo ='adulto'
        
    }else{
         tipo ='idoso'
        
    }
}
    