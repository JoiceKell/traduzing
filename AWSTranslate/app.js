const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path'); 

const translateRoutes = require('./routes/translate');

const app = express();
const PORT = 3001;

//Public directory configuration
app.use(express.static(__dirname + '/public'));

//Body parser configuration
app.use(bodyParser.urlencoded({ extended: false }));

//Handlebars configuration
app.set('views', path.join(__dirname, 'views')); 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Routes
app.use('/', translateRoutes);

app.listen(PORT, function() {
  console.log(`O Express está rodando na porta ${PORT}`);
});