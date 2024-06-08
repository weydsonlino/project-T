import VeiculosParaEntrega from "./VeiculosParaEntrega";

type SistemaEntregaProps = {
  setShowEntrega: (value: boolean) => void;
  nomeEmpresa: string;
  produto: string;
  quantidadeDeProdutos: number;
  destino: string;
};

const SistemaEntrega: React.FC<SistemaEntregaProps> = ({
  setShowEntrega,
  nomeEmpresa,
  produto,
  quantidadeDeProdutos,
  destino,
}) => {
  return (
    <div className="absolute inset-x-28 inset-y-0 m-10 bg-black w-9/12 h-52">
      <h1>Entrega</h1>
      <h2>Detalhes do pedido</h2>
      <p>Nome da empresa: {nomeEmpresa}</p>
      <p>Produto: {produto}</p>
      <p>Quantidade de produtos: {quantidadeDeProdutos}</p>
      <p>Destino: {destino}</p>
      <a href="https://ibb.co/M1DQtJC">
        <img
          src="https://i.ibb.co/QHFtTxK/teste.png"
          className="w-3/4"
          alt="teste"
        />
      </a>
      <br />
      <button>Confirmar Entrega</button>
      <br />
      <button onClick={() => setShowEntrega(false)}>Cancelar Entrega</button>
    </div>
  );
};

export default SistemaEntrega;
