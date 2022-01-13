import { useEffect, useState } from "react";
import Layout from "../../components/UI/Layout/Layout";
import { TarefaModel } from "../../models/Tarefa";
import styles from "../../styles/tarefas.module.css"
import axios from "axios"
import Tarefa from "../../components/tarefa/Tarefa";

function Tarefas() {

    const [listaTarefas, setlistaTarefas] = useState<TarefaModel[]>(null);

    useEffect(() => {
       axios.get("http://localhost:3001/tarefas").then(retorno=>{
           console.log(retorno.data);
            setlistaTarefas(retorno.data.resultado)
           
       }).catch(erro=>{
           console.log(erro);
       })
    }, [])

    const renderizarTarefas = ()=>{
        return listaTarefas?.map(tarefa=>{
            return <Tarefa key={tarefa._id} _id={tarefa._id} titulo={tarefa.titulo}
                        descricao={tarefa.descricao} concluida={tarefa.concluida} responsavel={tarefa.responsavel}/>
        })
    }

    const dragOver = (evento)=>{
        evento.preventDefault()
    }

    return (  
        <Layout>

            <div className={`${styles.layoutTarefas}`}>
                <ul className={`list-group  text-start`} onDragOver={dragOver}>
                    {listaTarefas ? renderizarTarefas() : <h1>Não Existem Tarefas Cadastradas</h1>}
                </ul>
            </div>
        </Layout>
    );
}

export default Tarefas ;