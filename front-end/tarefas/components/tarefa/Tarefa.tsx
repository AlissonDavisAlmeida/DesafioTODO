import { TarefaModel } from "../../models/Tarefa";
import { IconeDelete, IconeEdit, saveIcon } from "../Icons";
import styles from "./tarefa.module.css"
import {useRouter} from "next/router"
import axios from "axios"

function Tarefa(props : TarefaModel) {

    const rota = useRouter()

    const removerTarefa = ()=>{
        axios.delete(`http://localhost:3001/tarefas/${props._id}`).then((retorno)=>{
            console.log("Tarefa removida com sucesso");
            rota.reload()
        }).catch(erro=>{
            console.log("Ocorreu um erro: "+erro);
        })
    }

    const editarTarefa = ()=>{

        rota.push(`/tarefas/${props._id}`)
    }

    return ( 
        <li className={`list-group-item d-flex align-items-center justify-content-center animate__animated animate__bounceInUp`}>
            <div className="col-6 d-flex align-items-center me-3">

            <input className={`form-check-input me-4  ${styles.input}`} disabled={true} type="checkbox" checked={props.concluida} aria-label="..."></input>
            <textarea rows={1} disabled className={`form-control ${styles.formTexto} text-center me-2`} value={`Título: ${props.titulo} `}/>
            <textarea rows={1}  disabled className={`form-control ${styles.formTexto} ${styles.formResponsavel} text-center`}  value={` Responsável: ${props.responsavel}`}/>
            </div>
            
            <div className={`d-flex justify-content-end col-auto `}>

                <button className={`btn btn-outline-success  p-2 me-3`} type="button" onClick={editarTarefa}>{IconeEdit}Editar</button>
                <button className={`btn btn-outline-danger`} onClick={removerTarefa} type="button">{IconeDelete}Apagar</button>
               
            </div>
        </li>
     );
}

export default Tarefa;