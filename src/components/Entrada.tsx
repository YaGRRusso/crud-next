interface EntradaProps {
  tipo: 'text' | 'number'
  texto: string
  valor: any
  somenteLeitura?: boolean
  valorMudou?: (valor: any) => void
}

export default function Entrada( props:EntradaProps ) {
  return (
    <div className={`flex flex-col mb-5`}>
      <label className={`mb-1`}>
        {props.texto}
      </label>
      <input
        onChange={e => props.valorMudou?.(e.target.value)}
        type={props.tipo}
        value={props.valor}
        readOnly={props.somenteLeitura ?? false}
        className={`
          focus:outline-none rounded-lg px-4 py-2 border
          border-purple-500 bg-gray-50 ${props.somenteLeitura ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  )
}