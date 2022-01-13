const express = require("express")
const rotaTarefas = express.Router()
const mongoose = require("mongoose")
const Tarefas = require("../models/Tarefas")


rotaTarefas.get("/",(req, res)=>{

    Tarefas.find().then(resultado=>{
        return res.status(200).json({
            resultado
        })
    }).catch(erro=>{
        return res.status(500).json({
            mensagem : "Ocorreu um erro na busca das tarefas",
            erro
        })
    })
})

rotaTarefas.post("/",(req, res)=>{

    const {titulo, descricao, responsavel} = req.body

    const tarefa = new Tarefas({
        titulo : titulo,
        descricao : descricao,
        concluida : false,
        responsavel : responsavel
    })

    tarefa.save().then(retorno=>{
        return res.status(200).json({
            mensagem : "Tarefa Salva com sucesso",
            retorno
        })
    }).catch(erro=>{
        return res.status(500).json({
            mensagem : "Erro na gravação da tarefa",
            erro
        })
    })

})

rotaTarefas.delete("/:id",(req, res)=>{
    const { id} = req.params

   const isValidId = mongoose.isValidObjectId(id)

   if(!isValidId){
        return res.status(500).json({
            mensagem:"O id informado é inválido"
        })
   }

   Tarefas.findByIdAndDelete({_id:id}).then(retorno=>{
        return res.status(200).json({
            mensagem:"Tarefa removida com sucesso",
            retorno
        })
   }).catch(erro=>{
    return res.status(500).json({
        mensagem : 'Ocorreu um erro na remoção da tarefa',
        erro
    })
   })


})

rotaTarefas.put("/:id",(req, res)=>{

    const {id } = req.params
    const isValidId = mongoose.isValidObjectId(id)

    const {titulo, descricao, responsavel, concluida} = req.body

    if(!isValidId){
        return res.status(500).json({
            mensagem:"O id informado não é um id válido no MongoDB"
        })
    }

    Tarefas.findByIdAndUpdate({_id:id},{
       titulo : titulo,
       descricao : descricao,
       responsavel : responsavel,
       concluida : concluida 
    }).then(retorno=>{
        return res.status(200).json({
            mensagem:"Tarefa atualizada com sucesso",
            retorno
        })
    }).catch(erro=>{
        return res.status(404).json({
            mensagem:"Ocorreu um erro na atualização da tarefa",
            erro
        })
    })
})

rotaTarefas.get("/:id",(req, res)=>{

    const {id} = req.params

    Tarefas.findById({_id : id}).then(resultado=>{
        return res.status(200).json({
            resultado
        })
    }).catch(erro=>{
        return res.status(500).json({
            mensagem : "Ocorreu um erro na busca das tarefas",
            erro
        })
    })
})


module.exports = rotaTarefas