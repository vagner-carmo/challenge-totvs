# TOTVS Quality Assurance Challenge
Projeto para o desafio da TOTVS de QA.

## 1 - Cenários de Testes

Nesse desafio eu utilizei o Gherkin para criação dos cenários de testes baseados no protótipo informado, o conforme o arquivo: [casoTestes.txt](https://github.com/vagner-carmo/challenge-totvs/blob/master/CasoTestes.txt)


	
## 2 - Automação de 2 funcionalidades front-end

Nesse desafio eu utilizei o Cypress, que é um Framework Javascript para automação de testes end-to-end.

Os arquivos para esse desafio estão dentro da pasta [front](https://github.com/vagner-carmo/challenge-totvs/tree/master/front).

A primeira parte consiste em uma automação que clica no botão “Start”, aguarda pelo carregamento do elemento e faz uma validação se o texto “Hello World!” foi apresentado, arquivo: [challenge2.1.spec.js](https://github.com/vagner-carmo/challenge-totvs/blob/master/front/cypress/integration/challenge2.1.spec.js)

A segunda parte consiste em uma automação que clica nos três botões apresentados em tela, na sequência clica em todos os botões “edit” e depois em todos os botões “delete” da grid, arquivo: [challenge2.2.spec.js](https://github.com/vagner-carmo/challenge-totvs/blob/master/front/cypress/integration/challenge2.2.spec.js)

Para utilizar o projeto, no Visual Studio Code crie um projeto Node:
- Abra o Terminal e digite ‘npm init –yes’

Para adicionar as dependências do Cypress: 
- No terminal digite ‘npm install -D cypress’

Para criar as estruturas de pastas padrão e abrir o Cypress:
- No terminal digite ‘./node_modules/.bin/cypress open’

Após instalado o Cypress e suas dependências basta inserir o projeto (conteúdo da pasta front) e executar os 2 testes dentro na ferramenta Cypress.



## 3 - Automação de 1 funcionalidade back-end

Nesse desafio utilizei o Postman para criar uma collection de testes, onde validei o GET, POST, PUT e DELETE da API.

Também implementei os testes automatizados validando se é um JSON e um schema válido e se o código da resposta esta conforme o esperado.

Conforme arquivo: [challenge.postman_collection.json](https://github.com/vagner-carmo/challenge-totvs/blob/master/back/challenge.postman_collection.json)

No Postman selecione o menu File -> Import
Selecione a aba File e clique no botão “Upload Files”
Navegue até o diretório onde você salvou o arquivo e selecione-o
Clique no botão Import

Ao clicar em “Send” em cada requisição será retornado conteúdo no campo “Body” e no campo “Test Results”