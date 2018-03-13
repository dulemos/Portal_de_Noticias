module.exports = function (application){	
	application.get('/formulario_inclusao_noticia', function(req, res){
		//realizando a instancia do controller admin que contém a propriedade que executa formulario inclusao noticia
		application.app.controller.admin.fomulario_inclusao_noticia(application, req, res);
	});

	application.post('/noticias/salvar', function(req, res){
		application.app.controller.admin.noticias_salvar(application, req, res);
	});


};