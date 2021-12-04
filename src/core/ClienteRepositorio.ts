import Cliente from "./Cliente";

export default interface ClienteRepositotio {
  salvar(cliente: Cliente): Promise<Cliente>
  excluir(cliente: Cliente): Promise<void>
  obterTodos(): Promise<Cliente[]>
}