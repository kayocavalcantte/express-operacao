var express = require('express');

var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

// Função para soma
function soma(a, b) {
  return a + b;
}
// Função para subtração
function subtrai(a, b) {
    return a - b;
  }

// Função para multiplicação
function multiplica(a, b) {
    return a * b;
  }

// Função para divisão
function divide(a, b) {
    if (b === 0) {
      return 'Erro: Divisão por zero!';
    }
    return a / b;
  }

// Rota para soma
app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});



// Rota para subtração
app.post('/subtrai', function (req, res) {
  var body = req.body;
  var resultado = subtrai(body.a, body.b);
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});



// Rota para multiplicação
app.post('/multiplica', function (req, res) {
  var body = req.body;
  var resultado = multiplica(body.a, body.b);
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});



// Rota para divisão
app.post('/divide', function (req, res) {

  var body = req.body;
  var resultado = divide(body.a, body.b);
  res.send(`O resultado da divisão de ${body.a} por ${body.b} é ${resultado}`);
});

var port = 3001;

// Iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});


