<h1 align="center">
  ## Base#Api
</h1>

<blockquote align="center">“Perturbe a ordem vigente e então tudo se torna um caos.”!</blockquote>

<p align="center">
  <img alt="challenge" src="https://img.shields.io/badge/challenge-%2304D361">

  <a href="https://github.com/carvalhoviniciusluiz">
    <img alt="Made by Vinicius Carvalho" src="https://img.shields.io/badge/made%20by-Vinicius%20Carvalho-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#8ball-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#metal-como-usar-o-insomnia">Como usar o insomnia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">

</p>

## :rocket: Sobre o projeto

### Projeto

Boilerplate Docker NestJs + PostgresSQL, esquema de autenticação modular com suporte a passport + jwt que utiliza ts-node como serviço hot reload;

### Observações

   - O projeto não transpila a cada alteração de código, havendo necessidade deve se usar o script `yarn build`
   - A estrutura não está injeçada no docker, pode se usar o server padrão do nestjs
   - O esquema de rotas é baseado em uma rota raiz configurado a partir da lib [nest-router](https://www.npmjs.com/package/nest-router)
   - O server conteinerizado por padrão encontra se em modo debug e configurado para vscode por padrão
   - As entidades de banco de dados estão configuradas para sincronizarem automaticamente na base;

### **As ferramentas que você irá encontrar**

Aplicação criada do zero usando [NestJs](https://nestjs.com/), conta com as seguintes ferramentas:

- [NestJs](https://www.npmjs.com/package/@nestjs/core);
- [TypeOrm](https://www.npmjs.com/package/typeorm);
- [Ts-node-dev](https://www.npmjs.com/package/ts-node-dev);
- [Passport-Jwt](https://www.npmjs.com/package/passport-jwt);
- [Swagger](https://www.npmjs.com/package/swagger);

## :8ball: Instalação

Os próximos passos devem ser executados no terminal.

Baixando as dependências do projeto:

    yarn

Subindo um servidor de desenvolvimento:

    docker-compose up

## :metal: Como usar o Insomnia

[Insomnia](https://insomnia.rest/download/) é uma ferramenta que facilita testes de api. Você pode importar as rotas do projeto clique no butão `Run in Insomnia` que fica localizado no topo da página para facilitar os seus testes.

### **Sign In**
Realiza a autenticação da conta;

<p align="center">

</p>

### **Sign Up**
Realiza o cadastro das credenciais de acesso;

<p align="center">

</p>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
