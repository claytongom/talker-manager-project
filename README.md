<div align="center">
  <img src="https://user-images.githubusercontent.com/113382266/234041431-8b9e61dc-1772-4858-bf4b-f6f1bd2aba82.png" alt="talker-manager-claytongom-logo" width="auto" height="auto" style="max-width:100%; height:auto; margin:0 auto;">
</div>

# Talker Manager

Esta é uma API na qual é possível cadastrar, listar, atualizar e deletar palestrantes. Você pode testar as requisições a partir da extensão "Thunder Client" disponível no Visual Studio Code, ou qualquer outro Client Rest de sua preferência.

## Tecnologias:

<div style="text-align: center;">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"/>
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white' alt='ESlint' />
</div>


## Rodar com Docker:

**Passo 1** - Clone o repositório
```bash
git clone git@github.com:claytongom/talker-manager-project.git
```

**Passo 2** - Acesse a pasta criada
```bash
cd talker-manager-project
```

**Passo 3** - Instale dependências
```bash
npm install
```

**Passo 4** - Utilizando Node no Docker
```bash
docker-compose up -d --build
```

**Passo 5** - Para executar o terminal no container
```bash
docker exec -it talker_manager bash
```

**Passo 6** - Para executar a aplicação com nodemon
```bash
npm run dev
```

## Se preferir, rode localmente:
- Para isso, utiliza a versão 16 do node

**Passo 1** - Clone o repositório
```bash
git clone git@github.com:claytongom/talker-manager-project.git
```

**Passo 2** - Acesse a pasta criada
```bash
cd talker-manager-project
```

**Passo 3** - Instale dependências
```bash
npm install
```

## Documentação API:

 - Adquirindo <strong><u>Token</u></strong> com email e senha

```bash
POST /login
```
Formato do body da requisição:
```bash
{
  "email": "email@email.com",
  "password": "123456"
}
```

Token:
```bash
{
  "token": "5lmaSLXGq763HRa"
}
```
##
- Cadastrando um palestrante (talker)

```bash
POST /talker
```

Formato do body da requisição:
```bash
  {
  "name": "Username",
  "age": 37,
  "talk": {
    "watchedAt": "07/10/2022",
    "rate": 8
  }
}
```
##
Retornando array com todos os palestrantes
```bash
GET /talker
```

##
Retorna um palestrante a partir do parâmetro id
```bash
GET /talker/:id
```
<table style="margin:auto;">
  <tr>
    <th style="text-align:center;">Parâmetro</th>
    <th style="text-align:center;">Tipo</th>
    <th style="text-align:center;">Descrição</th>
  </tr>
  <tr>
    <td style="text-align:center;">id</td>
    <td style="text-align:center;">number</td>
    <td style="text-align:center;">ID obrigatório</td>
  </tr>
</table>

##
Atualizando dados do paletrante a partir do parâmetro id
```bash
PUT /talker/:id
```

<table style="margin:auto;">
  <tr>
    <th style="text-align:center;">Parâmetro</th>
    <th style="text-align:center;">Tipo</th>
    <th style="text-align:center;">Descrição</th>
  </tr>
  <tr>
    <td style="text-align:center;">id</td>
    <td style="text-align:center;">number</td>
    <td style="text-align:center;">ID obrigatório</td>
  </tr>
</table>

```bash
  {
  "name": "Username",
  "age": 25,
  "talk": {
    "watchedAt": "10/10/2018",
    "rate": 5
  }
}
```
##
Deleta o palestrante a partir do parâmetro id

```bash
DELETE /talker/:id
```
## Resumo
<table style="margin:auto;">
  <tr>
    <th style="text-align:center;">Método</th>
    <th style="text-align:center;">Rota</th>
    <th style="text-align:center;">Parâmetro</th>
    <th style="text-align:center;">Tipo</th>
    <th style="text-align:center;">Descrição</th>
  </tr>
  <tr>
    <td style="text-align:center;">POST</td>
    <td style="text-align:center;">/login</td>
    <td style="text-align:center;">email / password</td>
    <td style="text-align:center;">string / string</td>
    <td style="text-align:center;">Retorno de Token atraves de email e senha</td>
  </tr>
  <tr>
    <td style="text-align:center;">POST</td>
    <td style="text-align:center;">/talker</td>
    <td style="text-align:center;">formato json disponível na API</td>
    <td style="text-align:center;">string / number</td>
    <td style="text-align:center;">Cadastra um palestrante por meio das informações passadas no corpo da requisição</td>
  </tr>
  <tr>
    <td style="text-align:center;">GET</td>
    <td style="text-align:center;">/talker</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">Retorna um array com todas os palestrantes</td>
  </tr>
  <tr>
    <td style="text-align:center;">GET</td>
    <td style="text-align:center;">/talker/:id</td>
    <td style="text-align:center;">id</td>
    <td style="text-align:center;">number</td>
    <td style="text-align:center;">Busca palestrante a partir do id</td>
  </tr>
  <tr>
    <td style="text-align:center;">PUT</td>
    <td style="text-align:center;">/talker/:id</td>
    <td style="text-align:center;">id</td>
    <td style="text-align:center;">number</td>
    <td style="text-align:center;">Atualiza os dados de um palestrante a partir do id</td>
  </tr>
  <tr>
    <td style="text-align:center;">DELETE</td>
    <td style="text-align:center;">/talker/:id</td>
    <td style="text-align:center;">id</td>
    <td style="text-align:center;">number</td>
    <td style="text-align:center;">Deleta um palestrante a partir do id</td>
  </tr>
</table>

