const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool



router.post('/', (req, res, next) => {
    mysql.getConnection((err, conn) => {
        if(err){return res.status(500).send({ error: err})}
        
        conn.query(`SELECT * FROM convidado.users WHERE cpf = ? && assinado = 0;;`, [req.body.cpf], (error, results) => {
            if(err){return res.status(500).send({ error: err})}
            if(results.length > 0) {
                 res.status(200).send({
                    mensagem: 'Show'
                })
            }
        });
    });

    
    
    
    
    
    
});







module.exports = router;