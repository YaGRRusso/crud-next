export default function Titulo( props ) {
  return (
    <div className={`
      flex flex-col justify-center
    `}>
      <h1 className={`p-3 text-3xl font-bold`}>
        {props.children}
      </h1>
      <hr className={`border-2 border-purple-500`}/>
    </div>
  )
}