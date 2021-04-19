# TOTVS Quality Assurance Challenge
Projeto para o desafio da TOTVS de QA.

## 1 - Cenários de Testes

Criado os cenários de testes baseados no protótipo informado, o conforme o arquivo: [casoTestes.txt](https://github.com/vagner-carmo/challenge-totvs/blob/master/CasoTestes.txt)


	
## 2 - Automação de 2 funcionalidades front-end

Nesse desafio eu utilizei o Cypress, que e um Framework Javascript para automação de testes end-to-end.

Os arquivos para esse desafio estão dentro da pasta [front](https://github.com/vagner-carmo/challenge-totvs/tree/master/front).

A primeira parte consiste em uma automação que clica no botão “Start”, aguarda pelo carregamento do elemento e faz uma validação se o texto “Hello World!” foi apresentado, arquivo: [challenge2.1.spec.js](https://github.com/vagner-carmo/challenge-totvs/blob/master/front/cypress/integration/challenge2.1.spec.js)

A segunda parte consiste em uma automação que clica nos três botoes apresentados em tela, na sequência clica em todos os botoes “edit” e depois em todos os botoes “delete” da grid, arquivo: [challenge2.2.spec.js](https://github.com/vagner-carmo/challenge-totvs/blob/master/front/cypress/integration/challenge2.2.spec.js)



## 3 - Automação de 1 funcionalidade back-end

Nesse desafio utilizei o Postman para criar uma collection de testes, onde validei o GET, POST, PUT e DELETE da API.

Também implementei os testes automatizados validando se e um JSON e um schema valido e se o código da resposta esta conforme o esperado.

Conforme arquivo: [challenge.postman_collection.json](https://github.com/vagner-carmo/challenge-totvs/blob/master/back/challenge.postman_collection.json)