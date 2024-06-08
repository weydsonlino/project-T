import { useState } from "react";
import SistemaEntrega from "../components/Sistema de Entrega/SistemaEntrega";
function PedidosPedentes() {
  const [showEntrega, setShowEntrega] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(Number);

  class pedido {
    id: number;
    nomeEmpresa: string;
    produto: string;
    quantidadeDeProdutos: number;
    destino: string;
    dataDeEntrega: string;
    constructor(
      id: number,
      nomeEmpresa: string,
      produto: string,
      quantidadeDeProdutos: number,
      destino: string,
      dataDeEntrega: string
    ) {
      this.id = id;
      this.nomeEmpresa = nomeEmpresa;
      this.produto = produto;
      this.quantidadeDeProdutos = quantidadeDeProdutos;
      this.destino = destino;
      this.dataDeEntrega = dataDeEntrega;
    }
  }

  const pedidos: pedido[] = [
    new pedido(0, "Atacadão", "Água 250ml", 10, "Rua 1", "01/01/2021"),
    new pedido(1, "Casas Bahia", "Água 500ml", 20, "Rua 2", "02/01/2021"),
    new pedido(2, "Pan", "Água 1L", 30, "Rua 3", "03/01/2021"),
  ];
  const tableTittle = [
    [1, "Empresa"],
    [2, "Produto"],
    [3, "Quantidade"],
  ];

  return (
    <div className="">
      <div className="flex items-center justify-center px-4 mt-5 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableTittle.map((title) => (
                <th scope="col" className="py-3 px-6" key={title[0]}>
                  {title[1]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={pedido.id}
              >
                <td className="py-4 px-6">{pedido.nomeEmpresa}</td>
                <td className="py-4 px-6 text-center">{pedido.produto}</td>
                <td className="py-4 px-6 text-center">
                  {pedido.quantidadeDeProdutos}
                </td>
                <button
                  onClick={() => {
                    setShowEntrega(true);
                    setPedidoSelecionado(pedido.id);
                  }}
                >
                  Detalhes
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showEntrega ? (
        <SistemaEntrega
          setShowEntrega={setShowEntrega}
          nomeEmpresa={pedidos[pedidoSelecionado].nomeEmpresa}
          produto={pedidos[pedidoSelecionado].produto}
          quantidadeDeProdutos={pedidos[pedidoSelecionado].quantidadeDeProdutos}
          destino={pedidos[pedidoSelecionado].destino}
        />
      ) : null}
    </div>
  );
}

export default PedidosPedentes;
