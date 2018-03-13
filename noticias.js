//incorporando biblioteca HTTP
var http = require('http');
//criando servidor
http.createServer( function (req, res) {
	//interpretando a requisição pela URL
	var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end("<html><body><h1>Notícias de tecnologia</h1><body></html>");
	}
	else if(categoria == '/moda'){
		res.end("<html><body><h1>Notícias de moda</h1><body></html>");
	}
	else if(categoria == '/beleza'){
		res.end("<html><body><h1>Notícias de Beleza</h1><body></html>");
	}
	else {
		res.end("<html><body><h1>Portal de Notícias</h1><body></html>");
	};
	
	
}).listen(3000);

console.log('Escutando na porta 3000');


