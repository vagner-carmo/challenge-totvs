# Totvs Quality Assurance Challenge
Projeto para o desafio da Totvs de QA.

## 1 - Cenários de Testes

Crie cenários de testes baseados no protótipo informado.

###### Caso 1:
**# language:** pt-br

**Cenário:** Abrir a rede social ao clicar no ícone correspondente  
	**Dado** que o usuário tem acesso aos campos em ‘Informações Gerais’   
	**E** que esteja devidamente configurado cada rede social com um link válido  
	**Quando** clicar no <icone > da rede social  
	**Então** deve abrir uma nova guia no navegador redirecionando ao <link>   

	**Exemplo:**
	|      icone            |			link				|
	|     (WhatsApp)        |  https://web.whatsapp.com/…	|
	|     (Facebook)        |  http://www.facebook.com/…	|
	|     (Instagram)       |  https://www.instagram.com/…	|
	|     (Twitter)         |  https://twitter.com/home/…	|
	|     (Linkedin)        |  https://br.linkedin.com/…	|

	
###### Caso 2:
**# language:** pt-br
**Cenário:** Listar todas as oportunidades ao clicar em ‘ver todas as oportunidades’  
    <p>
	**Dado** que o usuário tem acesso ao campo ‘Oportunidades’   
    **E** que já tenha oportunidades cadastradas  
    **Quando** clicar na opção ‘ver todas as oportunidades’  
    **Então** deve aumentar o campo de oportunidades e listar todas as disponíveis.  
	<p>
	
	
###### Caso 3:
**Cenário:** Abrir Google Maps ao clicar no local  
	**Dado** que o usuário tem acesso ao campo ‘Local’  
	**E** que já tenha um endereço preenchido neste campo  
	**Quando** clicar no minimapa   
	**Então** deve abrir o Google Maps já carregado com o ponto de interesse com o endereço cadastrado.

	
###### Caso 4:
**Cenário:** Cadastrar nova atividade    
	**Dado** que o usuário tem acesso ao campo ‘Atividade’    
	**E** que tenha permissão para cadastrar novas atividades    
	**Quando** clicar no ícone correspondente     
	**Então** deve abrir uma nova tela para cadastro de uma nova atividade    