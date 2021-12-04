import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    tabela,
    exibirTabela,
    cliente,
    clientes,
    selecionarCliente,
    novoCliente,
    excluirCliente,
    salvarCliente
  } = useClientes()

  function renderizarTabela() {

    return (
      <>
      <div className={`flex`}>
        <div className={`flex py-1 w-3/5`}>
          <h2 className={`text-lg`}>Lista de todos os clientes cadastrados!</h2>
        </div>
        <div className={`flex w-2/5 justify-end`}>
          <Botao cor='green' className='mb-4' onClick={novoCliente}>Novo Cliente</Botao>
        </div>
      </div>
      <Tabela
        clientes={clientes}
        clienteSelecionado={selecionarCliente}
        clienteExcluido={excluirCliente}
      />
      </>
    )
  }

  function renderizarFormulario() {
    return (
      <Formulario
        clienteMudou={salvarCliente}
        cliente={cliente}
        cancelado={exibirTabela}
      />
    )
  }

  return (
    <div className={`
      flex items-center justify-center h-screen
      bg-gradient-to-tr from-blue-900 to-gray-800
    `}>
      <Layout titulo='Tabela de Clientes' >
        {tabela ? renderizarTabela() : renderizarFormulario()}
      </Layout>
    </div>
  )
}
