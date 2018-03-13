//Modulo express
var express = require('express');
//modulo consign para as routes
var consign = require('consign');
//modulo body-parser 
var bodyParser = require('body-parser');
//modulo express-validator
var expressValidator = require('express-validator');


//executando a função contida em express
var app = express();

//informando ao express que o engine de views é o EJS
app.set('view engine', 'ejs');



//Setando as Views 
app.set('views', './app/views');

//Modulo body parser - Midlleware da aplicação

app.use(bodyParser.urlencoded({extended: true}));

//Modulo express validator - Midlleware para validação
app.use(expressValidator());
//Permite que os atributos estaticos tenham a raiz no diretorio public
app.use(express.static('./app/public'));

//reconhecendo os arquivos da pasta routes e inclui dentro do servidor 
consign().include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controller')
	.into(app);


module.exports = app;