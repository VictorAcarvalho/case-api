## SIMPLES API - BACK END

#### Equipe de desenvolvimento

```
Guilherme Callegari
Rafael Simas
Samuelton Kelvi
Victor Alves
```

#### Objetivo

```
Criar um tela para efetuar login e um dashbord totalmente funcional para a Banco Conta Simples
```

#### Equipe de desenvolvimento

```
Guilherme Callegari
Rafael Simas
Samuelton Kelvi
Victor Alves
```

#### Comando para restaurar a node_modules

```
npm install ou npm i
```

##### Comando para rodar com Node

```
npm start
```

#### Comando para rodar com Nodemon

```
npm run dev
```

##### API irá funcionar na porta 3003 por padrão
Você pode configurar a sua porta utilizando a variavel ambiente PORT=



#### Lista de Rotas da API

###### Cadastro de usuário

```
POST '/user'
```
###### Login de usuário

```
POST '/login'
```
###### Atualiza o saldo

```
PUT '/userbalance'
```

###### Mostrar o saldo
```
GET '/balance'
```

###### Cadastrar Cartão

```
POST '/card'
```

###### Listar Cartão

```
GET '/card'
```

###### Listar um único cartão

```
GET '/card/:id'
```

###### Atualiza um único cartão

```
PUT '/card/:id'
```

###### Faz o delete do cartão

```
PUT '/delete/:id'
```

###### Faz uma transação

```
POST '/operations/:card'
```

###### Lista as transações do cartão

```
GET '/operations/:card'
```
##### Lista uma única transação

```
GET '/operations/:id'
```
