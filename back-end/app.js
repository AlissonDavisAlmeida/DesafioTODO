require("./database/connection")

const express = require("express")
const cors = require("cors")
const app = express()

const rotaTarefas = require("./routers/tarefas")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.use("/tarefas", rotaTarefas)



app.listen(3001, ()=>{
    console.log("Servidor Express iniciado na porta 3001")
})

