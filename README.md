# Calculadora API

Esta é uma API simples construída com Node.js e Express que realiza operações matemáticas básicas, incluindo soma, subtração, multiplicação e divisão.

## Funcionalidades

- **Soma**: Realiza a soma de dois números.
- **Subtração**: Realiza a subtração de dois números.
- **Multiplicação**: Realiza a multiplicação de dois números.
- **Divisão**: Realiza a divisão de dois números e trata a divisão por zero.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework web para Node.js.
- **Body-Parser**: Middleware para analisar o corpo das requisições.

## Endpoints

### 1. **Soma**
- **Método**: POST
- **URL**: `/soma`
- **Corpo da Requisição**:
  ```json
  {
    "a": número,
    "b": número
  }
  ```
- **Resposta**:
  ```
  O resultado da soma de a e b é resultado
  ```

### 2. **Subtração**
- **Método**: POST
- **URL**: `/subtrai`
- **Corpo da Requisição**:
  ```json
  {
    "a": número,
    "b": número
  }
  ```
- **Resposta**:
  ```
  O resultado da subtração de a e b é resultado
  ```

### 3. **Multiplicação**
- **Método**: POST
- **URL**: `/multiplica`
- **Corpo da Requisição**:
  ```json
  {
    "a": número,
    "b": número
  }
  ```
- **Resposta**:
  ```
  O resultado da multiplicação de a e b é resultado
  ```

### 4. **Divisão**
- **Método**: POST
- **URL**: `/divide`
- **Corpo da Requisição**:
  ```json
  {
    "a": número,
    "b": número
  }
  ```
- **Resposta**:
  - Se `b` for diferente de zero:
    ```
    O resultado da divisão de a por b é resultado
    ```
  - Se `b` for zero:
    ```
    Erro: Divisão por zero!
    ```

## Como Executar

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu_usuario/nome_do_repositorio.git
   ```

2. **Navegue até o diretório do projeto**:
   ```bash
   cd nome_do_repositorio
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Inicie o servidor**:
   ```bash
   node app.js
   ```

5. **Acesse a API em** `http://localhost:3001`.

## Exemplos de Uso

Utilize ferramentas como Postman ou cURL para fazer requisições para os endpoints da API.

### Exemplo com cURL

```bash
curl -X POST http://localhost:3001/soma -H "Content-Type: application/json" -d '{"a": 5, "b": 10}'
```
