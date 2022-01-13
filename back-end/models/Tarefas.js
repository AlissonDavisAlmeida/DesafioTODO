const mongoose = require("mongoose")
const {Schema} = mongoose

const tarefasSchema = new Schema({
    titulo : {
        type:String,
        required:true
    },
    descricao : {
        type :String
    },
    concluida : Boolean,
    responsavel: {
        type:String, 
        required:true
    }
})


const Tarefas = mongoose.model("tarefas", tarefasSchema)

module.exports = Tarefas