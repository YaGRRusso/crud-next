import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void
}

export default function Formulario( props:FormularioProps ) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div className={`bg-gray-300 rounded-lg p-5`}>
      <div>
        {id ? (
          <Entrada texto='Codigo' tipo='text' valor={id} somenteLeitura/>
        ) : false}
        <Entrada texto='Nome' tipo='text' valor={nome} valorMudou={setNome}/>
        <Entrada texto='Idade' tipo='number' valor={idade} valorMudou={setIdade}/>
      </div>
      <div className={`flex justify-end pt-5`}>
        <Botao
          cor='blue'
          className={`mr-3 w-28`}
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao cor='gray' className={`w-28`} onClick={props.cancelado}>Voltar</Botao>
      </div>
    </div>
  )
}