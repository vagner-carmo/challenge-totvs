# Totvs Quality Assurance Challenge
Projeto para o desafio da Totvs de QA.

## 1 - Cen�rios de Testes

Crie cen�rios de testes baseados no prot�tipo informado.

###### Caso 1:
**# language:** pt-br

**Cen�rio:** Abrir a rede social ao clicar no �cone correspondente  
	**Dado** que o usu�rio tem acesso aos campos em �Informa��es Gerais�   
	**E** que esteja devidamente configurado cada rede social com um link v�lido  
	**Quando** clicar no <icone > da rede social  
	**Ent�o** deve abrir uma nova guia no navegador redirecionando ao <link>   

	**Exemplo:**
	|      icone            |			link				|
	|     (WhatsApp)        |  https://web.whatsapp.com/�	|
	|     (Facebook)        |  http://www.facebook.com/�	|
	|     (Instagram)       |  https://www.instagram.com/�	|
	|     (Twitter)         |  https://twitter.com/home/�	|
	|     (Linkedin)        |  https://br.linkedin.com/�	|

	
###### Caso 2:
**# language:** pt-br
**Cen�rio:** Listar todas as oportunidades ao clicar em �ver todas as oportunidades�  
    <p>
	**Dado** que o usu�rio tem acesso ao campo �Oportunidades�   
    **E** que j� tenha oportunidades cadastradas  
    **Quando** clicar na op��o �ver todas as oportunidades�  
    **Ent�o** deve aumentar o campo de oportunidades e listar todas as dispon�veis.  
	<p>
	
	
###### Caso 3:
**Cen�rio:** Abrir Google Maps ao clicar no local  
	**Dado** que o usu�rio tem acesso ao campo �Local�  
	**E** que j� tenha um endere�o preenchido neste campo  
	**Quando** clicar no minimapa   
	**Ent�o** deve abrir o Google Maps j� carregado com o ponto de interesse com o endere�o cadastrado.

	
###### Caso 4:
**Cen�rio:** Cadastrar nova atividade    
	**Dado** que o usu�rio tem acesso ao campo �Atividade�    
	**E** que tenha permiss�o para cadastrar novas atividades    
	**Quando** clicar no �cone correspondente     
	**Ent�o** deve abrir uma nova tela para cadastro de uma nova atividade    