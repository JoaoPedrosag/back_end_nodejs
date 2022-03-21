const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/// ROTAS
const rotaRecebeJson = require('./routes/recebeJson');
const rotaVerificaHash = require('./routes/verificaHash');



app.use(bodyParser.urlencoded({ extended: false})); /// apenas dados simples
app.use(bodyParser.json());

app.use('/', rotaRecebeJson);
app.use('/verificaHash', rotaVerificaHash);


app.use((req, res, next) =>{
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Header',
     'Origin, Content-Type, X-Requrested-With, Aceppt, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();

})


app.use((req, res, next)=>{
    const erro = Error('Não Encontrado');
    erro.status = 404;
    next(erro);
});


app.use((error, req, res, next)=> {
    res.status(error.status || 500)
    return res.send(
        {
            erro: {
                mensagem: error.message
            }
         }
    );



});

module.exports = app;