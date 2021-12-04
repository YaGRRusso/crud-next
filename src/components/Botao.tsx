interface BotaoProps {
  cor?: 'green' | 'blue' | 'gray'
  className?: string
  children: any
  onClick?: () => void
}

export default function Botao( props:BotaoProps ) {
  const cor = props.cor ?? 'purple'

  return (
    <button onClick={props.onClick} className={`
      px-4 py-2 rounded-md
      bg-gradient-to-r from-${cor}-600 to-${cor}-800 text-white
      ${props.className}
    `}>
      {props.children}
    </button>
  )
}