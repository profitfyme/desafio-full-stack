## Comandos para executar Front-end:

> cd front-end
> yarn
> yarn start

## Comandos para executar a API:

> cd back-end
> yarn
> yarn typeorm migration:run
> yarn dev

## Variables de ambiente

Front-end:

REACT_APP_API_URL='' Endereço da API

Back-end:

# Application
APP_SECRET=
APP_API_URL=
APP_WEB_URL=

APP_SECRET um string para encriptar os dados do token.
APP_API_URL a URL da API
APP_WEB_URL a URL da Aplicação

## Banco de dados

Migração de dados: yarn typeorm migration:run

## Configuração do TypeORM para conexação com BD

Copiar o arquivo ormconfig.example.json
alterar as seguintes linhas:

Para PROD:

"host": "",
"port": 5432,
"username": "",
"password": "",
"database": "",
"entities": [
  "./dist/modules/**/infra/typeorm/entities/*.js" 
],
"migrations": [
  "./dist/shared/infra/typeorm/migrations/*.js"
],
"cli": {
  "migrationsDir": "./dist/shared/infra/typeorm/migrations"
}

Para DEV:

"port": 5432,
"username": "",
"password": "",
"database": "",
"entities": [
  "./src/modules/**/infra/typeorm/entities/*.ts"
],
"migrations": [
  "./src/shared/infra/typeorm/migrations/*.ts"
],
"cli": {
  "migrationsDir": "./src/shared/infra/typeorm/migrations"
}

## Tecnologias utilizadas

- TypeScript
- Node.js
- Express
- PostgresSQL
- React.js
- Styled Components

## Testes unitarios

> cd back-end
> yarn test --coverage
