const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser');

// Buscando as rotas.
const routeSite      = require('./routes/route-site'),
      routeDashBoard = require('./routes/route-dashboard');

// Define o caminho de arquivo estáticos.
app.use(express.static(__dirname + '/assets'));

// Setamos que nossa engine será o ejs.     
app.set('view engine', 'ejs'); 

// Seta onde ficam as views.
app.set('views', 'src/views/'); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// Define as rotas.
app.use('/', routeSite);
app.use('/admin', routeDashBoard);

// Se chegou aqui é porque não achou nenhuma rota.
app.use((req, res) => res.status(404).send('ERROR 404'))

module.exports = app;