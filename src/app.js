var Cadastro = [{ "name": "Reparos elétricos", "prestador": "Alex Rodrigues", "diponibilidade": "9:00 às 19:00", "contato": "(00) 0 0000-0000", "valorhora": "30,00", "local": "Belo Horizonte-MG", "descricao": "Reparos elétricos em geral.Reparos elétricos emergenciais e manutenção e instalação e sistema elétricos com experiência e qualidade reconhecidas." }, { "name": "Reparos em encanamento", "prestador": "Alex Rodrigues", "diponibilidade": "8:00 às 17:00", "contato": "(00) 0 0000-0000", "valorhora": "40,00", "local": "Contagem-MG", "descricao": "Reparos em encanamentos, torneiras, chuveiros entre outros." }, { "name": "Reparos em eletronicos", "prestador": "Alex Rodrigues", "diponibilidade": "7:00 às 19:00", "contato": "(00) 0 0000-0000", "valorhora": "a negociar", "local": "home office", "descricao": "Atendemos tecnologia Smd, Lead Free ou tradicional, utilizando microprocessadores, microcontroladores, circuitos analógicos e digitais, fontes de alimentação, sistemas de rede e comunicação, bem como CARTÃO ELETRÔNICO DE POTÊNCIA." }];
var Agendas = [{"data":"01/12/2021","local":"Rua, Bairro, Cidade, Estado","horario":"15:30","sevico":"Reparos em eletronicos"},{"data":"07/12/2021","local":"Rua, Bairro, Cidade, Estado","horario":"12:00","sevico":"Reparos em encanamento"},{"data":"07/11/2021","local":"Rua, Bairro, Cidade, Estado","horario":"09:40","sevico":"Reparos elétricos"},{"data":"13/12/2021","local":"Rua, Bairro, Cidade, Estado","horario":"14:20","sevico":"Reparos elétricos"},{"data":"13/12/2021","local":"Rua, Bairro, Cidade, Estado","horario":"14:20","sevico":"Reparos elétricos"}];
function ExibirCadastro(){
    var textoHTML = '';
    for (let x=0; x< Cadastro.length; x++){
        textoHTML += `<div id = "tela"><h2>Serviço: ${Cadastro[x].name} </h2>`;
        textoHTML += `<strong>Prestador do Serviço:</strong> ${Cadastro[x].prestador}<br>`;
        textoHTML += `<strong>Disponibilidade:</strong> ${Cadastro[x].diponibilidade} <br>`;
        textoHTML += `<strong>Contato:</strong> ${Cadastro[x].contato}<br>`;
        textoHTML += `<strong>Valor hora:</strong> ${Cadastro[x].valorhora}<br>`;
        textoHTML += `<strong>Local:</strong> ${Cadastro[x].local}<br>`;
        textoHTML += `<strong>Descrição do Serviço:</strong> ${Cadastro[x].descricao}</div><br>`;
        textoHTML += `<div id = "acao"><input type = "checkbox" id = "" name = "check" value = "selecionar"><label for = "check"> Selecionar </label>`;
        textoHTML += `<ul><li><a href="">Número de vistas: 0</a></li><li><a href="">Chat</a></li></ul></div> <br><br>`;
    };
    var tela= document.getElementById(`servico`);
    tela.innerHTML = textoHTML;
    //alert (textoHTML);

    var textHTML = '';
    textHTML += `<h2 id = "titulo">Agenda</h2>`;
    for (let y=0; y< Agendas.length; y++){
        textHTML += `<div id = "conteudo"><strong>Data: </strong> ${Agendas[y].data}<br>`;
        textHTML += `<strong>Endereço: </strong> ${Agendas[y].local}<br>`;
        textHTML += `<strong>Horario:</strong> ${Agendas[y].horario} <br>`;
        textHTML += `<strong>Serviço:</strong> ${Agendas[y].sevico}</div><br><br>`;    
    };
    var visor= document.getElementById(`agenda`);
    visor.innerHTML = textHTML;

}
