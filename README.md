# Hivelabs-API - NodeJS

## Overview

### O teste    
 Criar um novo usuário recebendo os dados pelo corpo da requisição: retorna os dados do usuário criado com status correspondente.
Se nickname já existe, retornar status e mensagem de erro.
[] Listar todos os usuários cadastrados filtrados pelos campos nome e/ou sobrenome, filtrados por parâmetros de consulta: retorna um array de usuários.
[] Listar um usuário pelo nickname passado como parâmetro: retorna um único usuário com nome, sobrenome e nickname.
[] Alterar o sobrenome e o endereço do usuário recebido no corpo da requisição, baseado no id recebido como parâmetro de rota: retorna o usuário alterado com as novas informações.
[] Alterar o nickname de um usuário recebido no corpo da requisição, baseado no id recebido como parâmetro de rota: retorna o usuário alterado com as novas informações.
Se o nickname passado já existir, deve retornar status e mensagem de erro.
[] Deletar um usuário baseado no id recebido como parâmetro de rota: retorna o status de sucesso.

### Como utilizar a API:  
  
  
1 - Primeiramente faça o clone deste repositório para a sua máquina  

2 - Rode no terminal o comando `npm install` que instalará automaticamente todas as dependências necessárias para rodar a API e depois rode o comando `npm start` para iniciar.  

3 - Cadastre um usúario utilizando o método POST na rota:  

> YOUR-HOST:4040/users/

passando no corpo com formato raw JSON:  
```
 {   
    "name": " ",
    "lastname": " ",    
    "nickname": " ",
    "address": " ",
    "bio": " "   
}
```
  
7 - Para listar os usuários pelo nome e/ou sobrenome utilize o método GET na rota abaixo passando como parametros conforme o exemplo:  

> YOUR-HOST:4040/users  

```
 {   
    "name": " ",
    "lastname": " "     
}
```

8 - Para listar os dados de um usuário pelo nickname, utilize o método GET na rota abaixo, passando o nickname no corpo da requisição como no exemplo abaixo:
> YOUR-HOST:4040/users

 ```
 {   
  "nickname": " ",  
      
}
```
9 - Para editar/atualizar o sobrenome e o endereço de um usuário cadastrado, utilize o método PATCH na rota:  

> YOUR-HOST:4040/users  

Lembre-se de passar o ID do usuário que você estará atualizando, conforme o exemplo abaixo:  
```
  {
    "id": "1",
    "lastname": " ",
    "address": " "
    
}
```
10 - Para deletar um cliente da base de dados utilize o método DELETE na seguinte rota:  

 > YOUR-HOST:4040/users

Basta passar o ID do cliente que deseja excluir conforme o exemplo:  

 ```
 {   
  "id": "1"      
}
```

### Links
[Linkedin:] (https://www.linkedin.com/in/lucasaclima03/)
