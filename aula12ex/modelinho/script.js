
function carregar(){
    const txt2 = window.document.querySelector('#texto2')
    const txt3 = window.document.querySelector('#texto3')
    const idadeinput = window.document.querySelector('#idadeinput')
    const idade = Number(idadeinput.value)
    let tipo =''
    txt2.textContent= 'Eai'
    
    
    
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
    txt2.innerHTML=`Você é ${tipo} e tem ${idade} anos `
}
    