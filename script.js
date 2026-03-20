function carregar(){
    const head = window.document.querySelector("#header")
    const txt = window.document.querySelector("#texto")
    const txt2 = window.document.querySelector("#texto2")
    const txt3 = window.document.querySelector("#texto3")
    const txt4 = window.document.querySelector("#texto4")
    const sec = window.document.querySelector("#seção")
    
    head.textContent='penetrar'

    txt.textContent = 'cabeçalho';
    txt2.textContent = 'texto2';
    txt3.textContent = 'texto3';
    txt4.textContent = 'texto4';
    
}
document.addEventListener('DOMContentLoaded', function() {
    carregar()
})