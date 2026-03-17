function carregar() { 
    const msg = window.document.querySelector('#msg')
    const img = window.document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.textContent = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
    img.src = 'manha.jpg'
    document.body.style.background = 'yellow'
} else if ( hora >= 12 && hora < 18 ){
    img.src = 'tarde.jpg'
    document.body.style.background = 'darkblue'
    
} else {
    img.src = 'noite.jpg'
    document.body.style.background = 'black'

    }
}