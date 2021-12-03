import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes =[
    new Cliente('Yago', 20, '1'),
    new Cliente('Gabriel', 20, '2'),
    new Cliente('Jaque', 20, '3'),
    new Cliente('Duda', 20, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  return (
    <div className={`
      flex items-center justify-center h-screen
      bg-gradient-to-tr from-blue-900 to-gray-800
    `}>
      <Layout titulo='Titulo' >
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  )
}
