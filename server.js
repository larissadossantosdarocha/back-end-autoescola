// dependencias e Frameworks 
const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')


//configuraçãoes de saida para front 
const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)


app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
})