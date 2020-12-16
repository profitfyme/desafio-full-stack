## Instalação

Baixe as dependências do projeto:

    yarn

Renomeie o arquivo env.example para .env

Suba o container do docker:

    docker-compose up

Monte as tabelas no banco de dados:

    Caso queira utilizar o knex cli global
    1. Instalando knex globalmente: yarn global knex
    2. rode no terminal: knex migrate:latest

    Caso não queria instalar o knex globalmente
    1. rode no terminal: node_modules/knex/bin/cli.js migrate:latest

Iniciando o projeto localmente

    yarn start


Pronto! Agora o servidor vai subir na porta 5000

### Sobre

Projeto em NodeJs, Typescript, Express para cadastro de usuários e autenticação
### Observação

    É necessário ter no mínimo a versão 10 do nodeJs