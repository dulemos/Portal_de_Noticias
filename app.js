var app = require('./config/server');

//*** chamada realizada em server.js com consign ***
//incluindo modulos 
//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

//var rotaHome = require('./app/routes/home');
//rotaHome(app);

//var rotaFormularioInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia');
//rotaFormularioInclusaoNoticias(app);


//subindo servidor com express
app.listen(3000, function () {
	console.log('server ON');
});