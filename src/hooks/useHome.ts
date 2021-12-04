import { useState } from 'react';

export default function useHome(  ) {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const exibirTabela = () => setVisivel('tabela')
  const exibirFormulario = () => setVisivel('form')

  return {
    formulario: visivel === 'form',
    tabela: visivel === 'tabela',
    exibirFormulario,
    exibirTabela
  }
}