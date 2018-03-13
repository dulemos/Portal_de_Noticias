//tratando as principais rotas com express e renderizando com EJS

module.exports = function (application) {
	application.get('/', function(req, res){

			console.log('tudo certo até aqui');
		application.app.controller.home.index(application, req, res);
	});

};