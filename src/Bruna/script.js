let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')

let cpf = document.querySelector('#cpf')
let labelcpf = document.querySelector('#labelCpf')

let dataNasc = document.querySelector('#dataNasc')
let labeldataNasc = document.querySelector('#labeldataNasc')

let email = document.querySelector('email')
let labelEmail = document.querySelector('#labelEmail')

let telefone = document.querySelector('#telefone')
let labeltelefone = document.querySelector('#labeltelefone')

let logadouro = document.querySelector('#logadouro')
let labelLogadouro = document.querySelector('#labellogadouro')

let numero = document.querySelector('#numero')
let labelNumero = document.querySelector('#labelNumero')

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')

let estado = document.querySelector('#estado')
let labelEstado = document.querySelector('#labelEstado')

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validsenha = false

let repetirsenha = document.querySelector('#repetirsenha')
let labelrepetirsenha = document.querySelector('#labelrepetirsenha')
let validrepetirsenha = false



// cadastro de senha 
senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = '*Insira no mínimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validsenha = false
  }else{
    labelSenha.setAttribute('style', 'color: blue')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: blue')
    validsenha = true
  }
})

// checar se senhas 
repetirsenha.addEventListener('keyup', () => {
  if(senha.value != repetirsenha.value){
    labelrepetirsenha.setAttribute('style', 'color: red')
    labelrepetirsenha.innerHTML = '*senhas não coincidem'
    repetirsenha.setAttribute('style', 'border-color: red')
    validrepetirsenha = false
  }else{
    labelrepetirsenha.setAttribute('style', 'color: blue')
    labelrepetirsenha.innerHTML = 'Confirme a senha'
    repetirsenha.setAttribute('style', 'border-color: blue')
    validrepetirsenha = true
    
  }
})

// json
function cadastrar(){
  if(validsenha && validrepetirsenha){
    let listauser = JSON.parse(localStorage.getItem('listauser') || '[]' )
    
    listauser.push(
     {
       nomecad: nome.value,
       senhacad: senha.value,
       cpfcad: cpf.value,
       dataNascad: dataNasc.value,
       emailcad: email.value,
       telefonecad: telefone.value,
       logadourocad: logadouro.value,
       numerocad: numero.value,
       cidadecad: cidade.value,
       estadocad: estado.value

     }
    )

    localStorage.setItem('listeruser', JSON.stringify(listauser))
   
    alert('Cadastro realizado com sucesso!')

    // direcionar para tela de login
    window.location.href = "#" 

  }else {
    alert('preencha os campos corretamente')
  }
}