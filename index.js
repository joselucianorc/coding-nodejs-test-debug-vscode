const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const dadoRecebido = req.query.dadoEnviado
    const retorno = `O valor recebido foi ${dadoRecebido}`
    res.send(retorno)    
})

const port = 3333
app.listen(port, () => {
    console.log(`Servidor carregado com sucesso. URI: http://localhost:${port}`)
})