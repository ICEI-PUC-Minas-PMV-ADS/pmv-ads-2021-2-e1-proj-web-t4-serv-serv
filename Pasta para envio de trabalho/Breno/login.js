/*
var usuarios = [
    {"login": "assis@emailteste.com.br", "senha": "123456"},
    {"login": "breno@emailteste.com.br", "senha": "234567"},
    {"login": "bruna@emailteste.com.br", "senha": "345678"},
    {"login": "luisa@emailteste.com.br", "senha": "456789"},
    {"login": "samuel@emailteste.com.br", "senha": "567890"}
];

function Login() {    
    var usuario = document.getElementsByName('username')[0].value;
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "pagina-inicial.html";
            return true;
        }        
    }
    alert("E-mail ou Senha incorretos, tente novamente.");
    return false;        
}
*/

let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password' )
    }    
})