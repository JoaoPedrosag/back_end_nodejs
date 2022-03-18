const express = require('express');
const router = express.Router();
const axios = require('axios');
var dados = [];

class Api {
 static async getUsers(){
    await axios.get("https://jsonplaceholder.typicode.com/posts").then(function(resposta){
        dados = resposta.data.map(function(item, indice) {
            return item.id
        })
        

    });
return dados;
} 
}
Api.getUsers().then(v => { console.log(v)});







router.get('/recebeJson',(req, res, next) => {
    res.status(200).send({
        mensagem: data
    });

});


module.exports = router