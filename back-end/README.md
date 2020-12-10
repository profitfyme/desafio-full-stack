# Cadastro de usuario

**Requisitos Funcionales**

- O usuário deve poder registrar seus dados;
- O usuário deve receber um e-mail com confirmação da criação da conta;

**Requisitos Não Funcionales**

- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negocio**

- O usuário precisa confirmar o email para confirmar a criação da conta;

# Actualização do perfil

**Requisitos Funcionales**

- O usuário deve poder atualizar seu nome, sobrenome, telephone, email e senha;

**Regras de Negocio**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;
