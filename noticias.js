//incorporando biblioteca HTTP
var http = require('http');
//criando servidor
http.createServer( function (req, res) {
	console.log('Escutando na porta 3000');
	res.end("<html><body><h1>Portal de Notícias</h1><body></html>");
}).listen(3000);