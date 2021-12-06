# Plano de Testes de Software

Faremos os testes Ponta a Ponta a fim de evidenciar todos os recursos do site. Os requisitos para realização dos testes de software são:
* Site publicado na Internet
* Navegador da Internet - Chrome, Firefox ou Edge
* Conectividade de Internet para acesso às plataformas (APISs) 

Os testes funcionais a serem realizados no aplicativo são descritos a seguir. 

| CASO DE TESTE               | CT-01 – Acessar ou criar um perfil e mudar a senha                                |
|-----------------------------|-----------------------------------------------------------------------------------|
| Requisitos associados       | RF-01 - O site deve permitir ao usuário acessar seu perfil para editá-lo, acessar a tela de cadastro de um novo perfil ou alterar sua senha caso seja preciso |
| Objetivo do teste           | Validar um usuário cadastrado; permitir a alteração/recuperação da senha; direcionar o novo usuário para a criação de um perfil |
| Passos                      | Acessar o navegador, clicar em entrar, visualizar a página de login |
| Critérios de êxito          | Deverá aparecer uma mensagem de erro caso haja algum erro na validação do usuário; se a validação for concluída com êxito, o site deverá carregar a página do perfil existente; caso o usuário queira visualizar a senha digitada, a funcionalidade acrescida no campo Senha deverá exibi-la; caso o usuário não se lembre da senha, basta clicar em Esqueci a senha que será direcionado para uma página onde deverá digitar seu e-mail e receber as instruções para alteração |

| CASO DE TESTE               | CT-02 – Cadastrar serviços                                                        |
|-----------------------------|-----------------------------------------------------------------------------------|
| Requisitos associados       | RF-02 - O site deve permitir o cadastramento dos serviços por parte do prestador e categorizá-los |
| Objetivo do teste           | Cadastrar um serviço com todas as informações necessárias, categorizando-o e inserindo imagens em seu acervo |
| Passos                      | Acessar o Navegador; informar o endereço do site; acessar sua conta com usuário e senha; clicar em anunciar; preencher todas as informações sobre o serviço; clicar em anunciar |
| Requisitos associados       | RF-01 - O site deve permitir ao usuário acessar seu perfil para editá-lo, acessar a tela de cadastro de um novo perfil ou alterar |
| Critérios de êxito          | Deverá aparecer uma mensagem de erro caso falte alguma informação obrigatória ou imagem; caso esteja tudo de acordo com os critérios definidos como de preenchimento obrigatórios, o serviço será cadastrado e a tela deverá ser carregada para o respectivo perfil do prestador |

| CASO DE TESTE               | CT-03 – Cadastro da senha de acesso                                               |
|-----------------------------|-----------------------------------------------------------------------------------|
| Requisitos associados       | RF-01 - O site deve permitir ao usuário acessar seu perfil para editá-lo, acessar a tela de cadastro de um novo perfil ou alterar sua senha caso seja preciso |
| Objetivo do teste           | Validar senha cadastrada, verificar se a senha digitada possui a quantidade de caractere exigido e ao repetir senha no campo indicado verificar se as senhas coincidem |
| Passos                      | Acessar o Navegador; clicar em entrar; abaixo do botão entrar clicar em cadastre-se |
| Requisitos associados       | RF-01 - O site deve permitir ao usuário acessar seu perfil para editá-lo, acessar a tela de cadastro de um novo perfil ou alterar |
| Critérios de êxito          | Caso o usuário não digite no campo senha a quantidade de caractere exigido, deverá aparecer uma mensagem indicando a quantidade de caractere permitido; ao repetir a senha no campo indicado, caso o usuário não digite a mesma senha deverá aparecer uma mensagem para indicar que as senhas não coincidem; se o usuário tentar enviar o formulário sem digitar todos os campos corretamente gerar um alerta solicitando que todos os campos sejam preenchidos corretamente; se todos os campos forem preenchidos corretamente o formulário será enviado e as informações salva |

| CASO DE TESTE               | CT-04 – Cadastrar um tópico no Fórum                                              |
|-----------------------------|-----------------------------------------------------------------------------------|
| Requisitos associados       | RF-08 - O site deve possibilitar a interação entre os usuários por meio de um fórum denominado “Faça você mesmo” |
| Objetivo do teste           | Cadastrar uma perguntar sobre como fazer algo; responder dúvidas de outros usuários; pesquisar sobre questões já resolvidas |
| Passos                      | Acessar o Navegador; informar o endereço do site; acessar página “Faça você mesmo”; clicar em “Faça uma pergunta”; preencher o formulário na pop-up; clicar em enviar |
| Requisitos associados       | RF-01 - O site deve permitir ao usuário acessar seu perfil para editá-lo, acessar a tela de cadastro de um novo perfil ou alterar |
| Critérios de êxito          | Ao clicar em “Faça uma pergunta” uma pop-up com formulário deverá abrir para o cadastro do tópico; depois de preencher o formulário, ao clicar enviar, as informações deverão aparecer na tela do fórum |

| CASO DE TESTE               | CT-05 – Responsividade de telas                                                   |
|-----------------------------|-----------------------------------------------------------------------------------|
| Requisitos associados       | RNF-02 O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |
| Objetivo do teste           | Averiguar responsividade de telas em diferentes resoluções e dispositivos |
| Passos                      | Acessar o Navegador; informar o endereço do site; acessar tela que deve ser testada; alterar entre diferentes dimensões |
| Requisitos associados       | RF-01 - O site deve permitir ao usuário acessar seu perfil para editá-lo, acessar a tela de cadastro de um novo perfil ou alterar |
| Critérios de êxito          | Os elementos da página devem se comportar de modo em que sejam mostrados de forma adaptados na tela |
