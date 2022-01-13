const mongoose = require("mongoose")
require("dotenv/config")
const url = process.env.CONNECTION_URL

mongoose.connect(url).then(retorno =>{
    console.log("Conectado ao Banco de dados do MongoDB")
}).catch(erro=>{
    console.log("Ocorreu um erro na conexão com o mongoose :"+erro)
})


module.exports = mongoose
