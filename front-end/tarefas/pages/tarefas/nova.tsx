import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import Layout from "../../components/UI/Layout/Layout";
import styles from "../../styles/nova.module.css"
import {useRouter} from "next/router";

import axios from "axios"
import { iconCancel, saveIcon } from "../../components/Icons";

function Nova() {
    const rota = useRouter()

    //Futuramente substituir por um hook ou um contexto mais geral, como um Reducer
    const [titulo, settitulo] = useState<string>("");
    const [descricao, setdescricao] = useState<string>("");
    const [responsavel, setresponsavel] = useState<string>("");


    const tituloHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        settitulo(event.target.value)
        
        
    }

    const descricaoHandler = (event :ChangeEvent<HTMLTextAreaElement>)=>{

        setdescricao(event.target.value)
        
    }

    const responsavelHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        setresponsavel(event.target.value)
    }

    const submitForm = (evento : FormEvent<HTMLFormElement>) =>{
        evento.preventDefault()
        
        axios.post("http://localhost:3001/tarefas", {
            titulo : titulo,
            descricao : descricao,
            responsavel : responsavel
        }).then(retorno=>{
            console.log(retorno);
            rota.push("/tarefas")
        }).catch(erro=>{
            console.log(erro);
        })
        
    }

    return (  
        <Layout>
            
            <div className="d-flex justify-content-center">

          <div className={`d-flex justify-content-center ${styles.contextForm} animate__animated animate__rotateInUpLeft`}>
        <form className={styles.formulario} onSubmit={submitForm}>
            
            <div className={`mb-3`}>
                <label htmlFor="InputTitulo" className="form-label">Titulo</label>
                <input type="text" id="InputTitulo" className={`form-control text-center`} value={titulo}  required onChange={tituloHandler}/>
            </div>
            <div className={`mb-3`}>
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <textarea className="form-control text-center" value={descricao} required onChange={descricaoHandler} rows={3}></textarea>
            </div>
            <div className={`mb-3`}>
                <label htmlFor="responsavel">Responsável</label>
                <input type="text" className="form-control text-center" required value={responsavel} onChange={responsavelHandler}/>
               
            </div>
            <div className={styles.botoes}>

            <button className="btn btn-outline-warning rounded w-auto me-2" type="submit">Salvar{saveIcon}</button>
            <button className="btn btn-outline-danger rounded w-auto" type="button" onClick={()=>rota.push("/tarefas")}>Cancelar{iconCancel}</button>
            </div>
        </form>
              </div>  
            </div>
        </Layout>
    );
}

export default Nova;