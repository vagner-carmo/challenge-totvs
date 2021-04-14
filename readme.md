# Totvs Quality Assurance Challenge
Projeto para o desafio da Totvs de QA.

## 1 - Cenarios de Testes

Crie cenarios de testes baseados no prototipo informado.

###### Caso 1:
**# language:** pt-br

**Cenario:** Abrir a rede social ao clicar no icone correspondente  
	**Dado** que o usuario tem acesso aos campos em 'Informacoes Gerais' 
	**E** que esteja devidamente configurado cada rede social com um link valido  
	**Quando** clicar no <icone > da rede social  
	**Entao** deve abrir uma nova guia no navegador redirecionando ao <link>   

	**Exemplo:**
	|      icone            |		link		|
	|     (WhatsApp)        |  https://web.whatsapp.com/...	|
	|     (Facebook)        |  http://www.facebook.com/...	|
	|     (Instagram)       |  https://www.instagram.com/..	|
	|     (Twitter)         |  https://twitter.com/home/...	|
	|     (Linkedin)        |  https://br.linkedin.com/...	|

	
###### Caso 2:
**# language:** pt-br
**Cenario:** Listar todas as oportunidades ao clicar em 'ver todas as oportunidades'  
	**Dado** que o usuario tem acesso ao campo 'Oportunidades'  
    **E** que ja tenha oportunidades cadastradas  
    **Quando** clicar na opcao 'ver todas as oportunidades'   
    **Entao** deve aumentar o campo de oportunidades e listar todas as disponiveis  
	
	
###### Caso 3:
**Cenario:** Abrir Google Maps ao clicar no local  
	**Dado** que o usuario tem acesso ao campo 'Local'    
	**E** que ja tenha um endereco preenchido neste campo  
	**Quando** clicar no minimapa   
	**Entao** deve abrir o Google Maps ja carregado com o ponto de interesse com o endereco cadastrado.

	
###### Caso 4:
**Cenario:** Cadastrar nova atividade    
	**Dado** que o usuario tem acesso ao campo 'Atividade'     
	**E** que tenha permissão para cadastrar novas atividades    
	**Quando** clicar no icone correspondente     
	**Entao** deve abrir uma nova tela para cadastro de uma nova atividade    
