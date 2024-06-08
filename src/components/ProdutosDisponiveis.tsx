import Tabel from "./Tabel";

function ProdutosDisponiveis() {
  class Produto {
    // Propriedades da classe
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    medidas: number[] = [0, 0, 0];

    // Construtor
    constructor(
      id: number,
      nome: string,
      preco: number,
      quantidade: number,
      medidas: number[] = [0, 0, 0]
    ) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
      this.medidas = medidas;
    }
  }
  const produtos: Produto[] = [
    new Produto(1, "Água 250ml", 10, 100, [17.7, 5.7, 5.7]),
    new Produto(2, "Água 500ml", 20, 200, [19.17, 6.9, 6.9]),
    new Produto(3, "Água 1L", 30, 300, [23.28, 7.91, 7.91]),
  ];

  const tableTittle = [
    [1, "Produto"],
    [2, "Preço"],
    [3, "Quantidade"],
    [4, "Medidas"],
  ];

  return (
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
          {produtos.map((produto) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={produto.id}
            >
              <td className="py-4 px-6">{produto.nome}</td>
              <td className="py-4 px-6 text-center">{produto.preco}</td>
              <td className="py-4 px-6 text-center">{produto.quantidade}</td>
              <td className="py-4 px-6 text-center">
                {produto.medidas.join("x")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdutosDisponiveis;
