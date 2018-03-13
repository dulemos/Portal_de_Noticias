//Encarregado de carregar views e models para o req

module.exports.fomulario_inclusao_noticia = function (application, req, res){
	res.render("admin/form_add_noticia", {validacao: {}, noticia : {}});
}

module.exports.noticias_salvar = function (application, req, res){
	var noticia = req.body;
	
	//Validando infos do Formulario
	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é Obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia', 'noticia é obrigatória').notEmpty();
	//Guardando os erros de validação
	var erros = req.validationErrors();
	
	if (erros) {
		res.render("admin/form_add_noticia", { validacao : erros, noticia : noticia });
		console.log(erros);
		return;
	
	}
	//Instanciando conexao e model
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);
	noticiasModel.salvarNoticia(noticia, function(error, result){
		//redirecionando para a página de notícias
		res.redirect('/noticias');
	});
};