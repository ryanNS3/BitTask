import React from 'react'
import { BotaoCriar } from '../button/botao'


const Header = ({titulo,abrir,setAbrir,pesquisar,fButao}) => {
    const [open,setOpen] = React.useState(false)
    
  return (
    <header className='body-header-compo'>
      <section className='titulo-header'>
        <h1 id='titulo-header'>{titulo}</h1>
      </section>

      <section className='secao-criar-pesquisar'>
        <BotaoCriar setValue={setAbrir} value={abrir}  />
      </section>
    </header>
  )
}

export default Header
