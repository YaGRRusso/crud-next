export default function Titulo( props ) {
  return (
    <div className={`
      flex flex-col justify-center
    `}>
      <h1 className={`p-3`}>
        {props.children}
      </h1>
      <hr className={`border`}/>
    </div>
  )
}