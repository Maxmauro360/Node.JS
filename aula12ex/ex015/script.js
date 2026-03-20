function corpo(){
   const h = window.document.querySelector('#header')
   const txt1 = window.document.querySelector("#texto1")
   const txt2 = window.document.querySelector("#texto2")
   const colocar = window.document.querySelector("#anexar")
   const idadeinput = window.document.querySelector("#inputin")
   idade = Number(idadeinput.value)
   colocar.textContent = 'aqui'

   txt1.textContent ='Está rodando'
   txt2.textContent ='Tambem esta rodando'
   h.textContent= 'foi'
   
   if(idade >=5){
    textContent = 'velha'

   } else{
    console.log('gorda')
   }
   
}
document.addEventListener('DOMContentLoaded', function(){
    corpo()
})