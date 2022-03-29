# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.
 
* Julia Reis tem 24 anos, é publicitária recém formada que trabalha em uma empresa de marketing digital e atua como consultora de pequenas empresas. Quer ter tempo livre para curtir a vida e não se preocupar com pequenas distrações. Embora esteja escrevendo uma carreira de sucesso, não consegue aproveitar bem seu curto tempo disponível. Adora ler e passear com seu pet, medita e busca ajudar outras mulheres a se recolocar no mercado. Possui perfil criado nas redes sociais Instagram, Facebook, Twitter, Pinterest e LinkedIn.
* Alberto Souza tem 41 anos, é encanador, trabalha como autônomo fazendo serviços a domicílio. Sente que pode mais, deseja contratar pessoas e abrir um negócio no ramo. Não sabe como dar uma guinada na vida profissional, tentou divulgar seu trabalho nas redes sociais, sem sucesso. Atua no mercado há mais de 5 anos e tem vasto conhecimento. Gosta de viajar com a família, mas não tem conseguido ultimamente.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Julia Reis         | Buscar profissionais mulheres      | Não me preocupar com assédios          |
| Julia Reis         |Publicar feedback sobre profissional| Atestar a qualidade e segurança        |
| Julia Reis         | Publicar denúncia anônimamente     | Saber que não serei identificado(a)    |
| Julia Reis         |Interação cliente x prestador - chat| Garantir o melhor negócio para ambos   |
| Alberto Souza      | Receber dados pessoais do cliente  | Ter segurança na prestação do serviço  |
| Alberto Souza      | Poder gerir a agenda de serviços   | Atender aos clientes dentro do prazo   |
| Alberto Souza      | Saber nec. especiais dos clientes  |Prestar atendimento inclusivo ao cliente|
| Julia Reis         | Ter várias formas de pagamento     | Atender às necessidades financeiras    |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID     | Descrição do Requisito                                                    | Prioridade |
|-------|---------------------------------------------------------------------------|------------|
|RF-001 | Deve permitir que os usuários criem e editem um perfil com dados pessoais | ALTA       |
|RF-002 | Deve permitir que os usuários busquem prestadores por região delimitada   | ALTA       |
|RF-003 | Deve possuir filtros para parametrizar a busca                            | MÉDIA      |
|RF-004 | Deve permitir o cadastramento dos serviços e respectivas categorias       | ALTA       |
|RF-005 | Deve permitir a inclusão dos tipos de serviços em um campo de descrição   | MÉDIA      |
|RF-006 | Deve informar aos usuários dados de acessibilidade (filhos, N.E., etc.)   | BAIXA      |
|RF-007 | Deve permitir feedbacks com notas, elogios, reclamações e denúncias       | MÉDIA      |
|RF-008 | Deve possibilitar a interação entre os usuários por meio de um fórum      | BAIXA      |
|RF-009 | Deve permitir a contratação e conclusão do check list do serviço          | ALTA       |
|RF-0010| Deve permitir a visualização da agenda de serviços por parte do prestador | MEDIA      |
|RF-0011| Deve possuir os tipos de pagamento aceitos pelo prestador de serviço      | MÉDIA      |
|RF-0012| Deve ter um chat de interação entre usuário e prestador                   | ALTA       |
|RF-0013| Deve notificar o usuário e o prestador sobre o serviço contratado         | ALTA       |

### Requisitos não Funcionais

|ID     | Descrição do Requisito                                                    |Prioridade |
|-------|---------------------------------------------------------------------------|-----------|
|RNF-001|Deve ser publicado em um ambiente acessível (Repl.it, GitHub Pages, Heroku)| ALTA      |
|RNF-002| Deve ser responsivo permitindo a visualização em um celular               | ALTA      |
|RNF-003| Deve ter um design simples e autoexplicativo                              | MEDIA     |
|RNF-004| Deve ser compatível com os principais navegadores do mercado              | ALTA      |
|RNF-005| Deve estar acessível 24/7                                                 | MEDIA     |
|RNF-006| Deve testar a segurança e veracidade do usuário                           | ALTA      |
|RNF-007| Deve possibilitar o armazenamento de imagens e vídeos                     | BAIXA     |
|RNF-008| Deve estar em conformidade com a LGPD                                     | ALTA      |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                      |
|------|----------------------------------------------------------------------------|
|RE-001| O projeto deverá ser entregue até o final do semestre                      |
|RE-002| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend  |
|RE-003| A equipe não pode subcontratar o desenvolvimento do trabalho               |
|RE-004| O projeto não deve ser feito por um único indivíduo                        |
|RE-005| As decisões pertinentes devem ser tomadas por mais de 50% do grupo         |
|RE-006| O projeto deve estar em conformidade com as leis vigentes                  |

## Wireframes

![WhatsApp Image 2022-03-27 at 21 54 34 (1)](https://user-images.githubusercontent.com/86447935/160718828-030f8425-4063-44a2-9264-1e4ed7b9345e.jpeg)
![WhatsApp Image 2022-03-27 at 21 54 34 (2)](https://user-images.githubusercontent.com/86447935/160718829-80d14839-212d-475e-957c-d5cc423d4843.jpeg)
![WhatsApp Image 2022-03-27 at 21 54 34](https://user-images.githubusercontent.com/86447935/160718831-c54095c5-60a1-49e4-ac13-2854612c439b.jpeg)
![WhatsApp Image 2022-03-27 at 21 54 35 (1)](https://user-images.githubusercontent.com/86447935/160718834-267ced83-3c91-4d6b-bfde-42ab518e55c2.jpeg)
![WhatsApp Image 2022-03-27 at 21 54 35](https://user-images.githubusercontent.com/86447935/160718836-5f10315b-b2b1-46ff-a21a-657a4360ae49.jpeg)
