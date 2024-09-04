//dependencias para funcionar

const express = require('express')
const router = express.Router();

const alunos = require('./controll/alunos')

// rota (endpoint) de teste 

const teste = (req, res)=>{
    res.json("API Loja TI respondendo com sucesso!");
}

router.get('/',teste);
router.get('/alunos', alunos.read);

module.exports = router; 