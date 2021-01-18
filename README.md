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
POST '/user' STATUS :201
```
###### Login de usuário

```
POST '/login'  STATUS :200
```
###### Atualiza o saldo

```
PUT '/userbalance' STATUS :201
```

###### Mostrar o saldo
```
GET '/balance' STATUS :200
```

###### Cadastrar Cartão

```
POST '/card'  STATUS :201
```

###### Listar Cartão

```
GET '/card'   STATUS :200
```

###### Listar um único cartão

```
GET '/card/:id'  STATUS :200
```
###### Listar um único cartão e mostra sua última transação
```
GET '/cardlast/:id' STATUS :200
```

###### Atualiza um único cartão

```
PUT '/card/:id' STATUS :200
```

###### Faz o delete do cartão

```
PUT '/delete/:id'   STATUS :200
```

###### Faz uma transação

```
POST '/operations/:card'  STATUS :201
```

###### Lista as transações do cartão

```
GET '/operations/:card' STATUS :200
```
##### Lista uma única transação

```
GET '/operations/:id'   STATUS :200
```
