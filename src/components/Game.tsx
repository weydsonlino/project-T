"use client";

import PedidosPedentes from "@/components/PedidosPedentes";
import ProdutosDisponiveis from "../components/ProdutosDisponiveis";

export default function Game() {
  return (
    <div id="gameArea" className="relative">
      <div id="section">
        <div className="gameSection">
          <ProdutosDisponiveis />
        </div>
        <div className="gameSection">
          <PedidosPedentes />
        </div>
      </div>
      <div>
        <div className="gameSectionDois">
          <h2>Seu pedido</h2>
        </div>
      </div>
    </div>
  );
}
