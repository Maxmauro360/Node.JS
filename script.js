function carregar(){
    const head = window.document.querySelector("#header")
    const txt = window.document.querySelector("#texto")
    const txt2 = window.document.querySelector("#texto2")
    const txt3 = window.document.querySelector("#texto3")
    const txt4 = window.document.querySelector("#texto4")
    const sec = window.document.querySelector("#seção")
    
    head.textContent='Seja bem vindo!';
    txt.textContent = 'Faça seu cadastro:';
    txt2.textContent = 'Login';
    /*txt3.textContent = 'texto3';
    txt4.textContent = 'texto4';*/
    
}
document.addEventListener('DOMContentLoaded', function() {
    carregar()
}) 
    function cadastrar(){
        let user = window.document.querySelector("#cadastro").value;
        let pass = window.document.querySelector("#criarSenha").value;

        if (user === ""|| pass=== ""){ /*verifica se há algum espaço vazio*/
            alert("Preencha todos os campos da pagina!");
            return; /*para a função não continuar */
        }

    localStorage.setItem("senha", pass);
    localStorage.setItem("usuario", user);

    alert("cadastro realizado com sucesso!");
    
}
    function Logar(){
            let user = window.document.querySelector("#login").value;
            let pass = window.document.querySelector("#senha").value;

            let usuariosalvo = localStorage.getItem("usuario");
            let senhasalva = localStorage.getItem("senha");

            if(user === usuariosalvo && pass=== senhasalva){
                document.querySelector("#texto3").textContent = "Login realizado com sucesso!";
            } else {
                window.document.querySelector("#texto3").textContent = "Usuário ou senha incorretos!";
            }
        }

              