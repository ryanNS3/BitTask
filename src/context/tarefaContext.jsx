import React, { createContext } from 'react'
import useAxios from '../hooks/useAxios';
import { base } from '../server/server';

export const TarefaGlobal = createContext()

export const TarefaContext = ({children}) => {
  const {requisicao} = useAxios();
  const [dados, setDados] = React.useState()
  const [erro, setErro] = React.useState()
  const [loading, setLoading] = React.useState()
  const token = window.localStorage.getItem('token');


  async function CriarTarefa(projeto,dados){
       console.log(token)
      const req = await requisicao(`${base}/projetos/${projeto}/tarefas`,dados,"POST",  {Authorization : `Bearer ${token}`})
      console.log( "req" + req)
      return req
  }  

  async function ObterTudo(url,projeto){
    const req = await requisicao(`${base}/projetos/tarefas`,null, "GET", {Authorization : `Bearer ${token}`})
        return req
  }

  async function ObterTudoPorProjeto(projeto){
    const req = await requisicao(`${base}/projetos/${projeto}/tarefas`,null, "GET", {Authorization : `Bearer ${token}`})
        return req
  }

  async function  ObterEspecifico(url,id){

  }

  async function AlterarTarefa(projetoId,tarefaId, dados){
    const req = await requisicao(`${base}/projetos/${projetoId}/tarefas/${tarefaId}`,dados, "PUT", {Authorization : `Bearer ${token}`})
        return req
      }  
      
    async function DeletarTarefa(projetoId,tarefaId,){
      const req = await requisicao(`${base}/projetos/${projetoId}/tarefas/${tarefaId}`,null, "DELETE", {Authorization : `Bearer ${token}`})
        return req
    
  }

  return(
    <TarefaGlobal.Provider value={{dados, loading, erro, CriarTarefa, ObterTudo,ObterTudoPorProjeto, ObterEspecifico, AlterarTarefa, DeletarTarefa}}>
        {children}
    </TarefaGlobal.Provider>

  ) 
}


