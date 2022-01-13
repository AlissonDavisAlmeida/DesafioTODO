import Layout from "../../../components/UI/Layout/Layout";
import styles from "../../../styles/editar.module.css"
import { useRouter } from "next/router";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { iconCancel, saveIcon } from "../../../components/Icons";
import { TarefaModel } from "../../../models/Tarefa";


function EditTarefas() {

    const rotas = useRouter()
    const { id } = rotas.query

    const [titulo, settitulo] = useState<string>("");
    const [descricao, setdescricao] = useState<string>("");
    const [responsavel, setresponsavel] = useState<string>("");
    const [concluida, setconcluida] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/tarefas/"+id).then(retorno => {
            console.log(retorno);
            const resultado: TarefaModel = retorno.data.resultado
            setconcluida(resultado.concluida)
            settitulo(resultado.titulo)
            setdescricao(resultado.descricao)
            setresponsavel(resultado.responsavel)

        }).catch(erro => {
            console.log("Ocorreu um erro: " + erro);
        })

    }, [])

    const tituloHandler = (event: ChangeEvent<HTMLInputElement>) => {
        settitulo(event.target.value)


    }

    const descricaoHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {

        setdescricao(event.target.value)

    }

    const responsavelHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setresponsavel(event.target.value)
    }

    const submitForm = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        axios.put(`http://localhost:3001/tarefas/${id}`,{titulo, concluida, responsavel, descricao}).then(resultado=>{
           rotas.push("/tarefas")
        }).catch(erro=>{
            console.log(`Ocorreu um erro: ${erro}`);
        })
    }



    return (
        <Layout>
            <div className="d-flex justify-content-center">

                <div className={`d-flex justify-content-center ${styles.contextForm} animate__animated animate__rotateInUpLeft`}>
                    <form className={styles.formulario} onSubmit={submitForm}>

                        <div className={`mb-3`}>
                            <label htmlFor="InputTitulo" className="form-label">Titulo</label>
                            <input type="text" id="InputTitulo" className={`form-control text-center`} value={titulo} required onChange={tituloHandler} />
                        </div>
                        <div className={`mb-3`}>
                            <label htmlFor="descricao" className="form-label">Descrição</label>
                            <textarea className="form-control text-center" value={descricao} required onChange={descricaoHandler} rows={3}></textarea>
                        </div>
                        <div className={`mb-3`}>
                            <label htmlFor="responsavel">Responsável</label>
                            <input type="text" className="form-control text-center" required value={responsavel} onChange={responsavelHandler} />
                            <div className="form-check m-2">
                                <input className="form-check-input" type="checkbox" checked={concluida}  onClick={()=>setconcluida(!concluida)} id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {concluida? "Tarefa Concluida" : "Tarefa Pendente"}
                                    </label>
                            </div>
                        </div>
                        <div className={styles.botoes}>

                            <button className="btn btn-outline-warning rounded w-auto me-2" type="submit">Atualizar{saveIcon}</button>
                            <button className="btn btn-outline-danger rounded w-auto" type="button" onClick={() => rotas.push("/tarefas")}>Cancelar{iconCancel}</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default EditTarefas;