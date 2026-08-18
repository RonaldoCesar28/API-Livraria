# Livraria

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=%20CONCLUIDO&color=GREEN)

## Resumo do projeto

Projeto de API REST para uma Livraria com sistema de cadastro e manejo de livros e autores.


## 🚀 Tecnologias

* `Node.js` v20.20.0
* `express` v5.2.1,
* `mongodb` v7.5.0
* `mongoose` v9.9.2
* `dotenv` v17.4.2
* `nodemon` v3.1.14


## 📂 Estrutura de Pastas e Arquivos do Projeto

Este projeto já conta com o código necessário para subir a API em um servidor local:

```
├── node_modules
├── src
│   ├── config
│   │   └── dbconnect.js
│   ├── controllers
│   │   └── autorController.js
│   │   └── livroController.js
│   ├── models
│   │   └── Autor.js
│   │   └── Livro.js
│   ├── routes
│   │   └── autoresRoutes.js
│   │   └── index.js
│   │   └── livrosRoutes.js
│   ├── app.js
├── .env    
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── server.js
```


## Siga os passos para a criação de um banco de dados utilizando o serviço Mongo Atlas:

* 1 - Acesse o site Mongo Atlas e crie uma conta, caso não possua, ou faça login. Após logar, crie uma nova organização caso seja seu primeiro acesso, com o nome que desejar (por exemplo, alura).

* 2 - Clique no botão New Project à direita da tela e dê um nome ao seu novo projeto. Clique em Next.

* 3 - O próximo passo é definir permissões. Você pode clicar em Create Project sem alterar nada.

* 4 - Na tela Create a database clique no botão Build a database para criar uma nova instância de banco de dados.

* 5 - Escolha a opção M0 FREE, role a tela e selecione a opção de provider AWS, região us-east-1. Em seguida, você pode dar um nome ao cluster ou manter a opção Cluster0. Clique em Create.

* 6 - Nas opções de segurança, crie um usuário com a opção Username and Password para acesso ao banco. Por exemplo, username admin e senha admin123. Clique em Create user.
```

* 7 - Na seção Where would you like to connect from? escolha My Local Environment. O IP de sua
máquina já está automaticamente adicionado como IP permitido para acesso, mas para ser possível
acessar livremente o banco, adicione também o IP 0.0.0.0/0 e clique em Add entry. 
Em seguida conclua clicando em Finish and close.
```

O acesso livre não é indicado para ambientes de produção, porém, no nosso caso podemos deixar dessa forma por ser um projeto de estudo.

* 8 - Clique em Go to Databases no modal para voltar para a tela principal de databases.

* 9 - Clique em Connect no Cluster0, que acabamos de criar.

```
* 10 - No menu Connect, escolha a opção Driver. A instalação com npm install mongodb,já foi feita
pois a lib do MongoDB para Node.js já está adicionada no package.json, então este passo 
não é necessário. Copie a string de conexão abaixo:
```

```
mongodb+srv://admin:<password>@cluster0.0dgjke6.mongodb.net/?retryWrites=true&w=majority
```

```
Substitua admin:<password> pelos dados de username e password que você criou nos passos anteriores,
por exemplo, admin:admin123. Clique em Close para fechar a janela.
```

A string de conexão será utilizada para fazer a conexão da API com o banco de dados que acabamos de criar. Copie o endereço e reserve para utilizarmos em seguida!

## Como rodar a API

* No terminal, acesse a pasta raiz do projeto e insira o comando `npm run dev` para rodar o projeto em modo de desenvolvimento. Você deverá ver no terminal a seguinte mensagem:
  ```
  > api-js-local@1.0.0 dev
  > nodemon server.js

  [nodemon] 3.1.14
  [nodemon] to restart at any time, enter `rs`
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,json
  [nodemon] starting `node server.js`
  Servidor escutando em http://localhost:3000
  ```

* Os recursos da API poderão ser acessados a partir da *base URL* `http://localhost:3000`.

  > Esta API está programada para ser acessada a partir de `http://localhost:3000`. Certifique-se de que não existem outros recursos ocupando a porta `3000` antes de subir o projeto.


### Endpoints

A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:3000`:

`/livros`
* `GET /livros`
* `GET /livros/:id`
* `POST /livros`
* `PUT /livros/:id`
* `DELETE /livros/:id`

`/autores`
* `GET /autores`
* `GET /autores/:id`
* `GET /autores/:id/livros`
* `POST /autores`
* `PUT /autores/:id`
* `DELETE /autores/:id`


## Roadmap

* Autenticação
* Tratamento de erros
* Validações

## Desenvolvedor
<img src="https://github.com/user-attachments/assets/c7a6e9ed-d509-4f2a-b857-c832d6973a54" width="120px"/><br>Ronaldo Cesar
