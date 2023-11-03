var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');

var app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/static', express.static('dist'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));  //problema detectado
app.get('/', function(request, responce, next){
    responce.send('IEEE')
});

app.listen(app.get('port'), ()=>{
    console.log('Servidor activo');
})