"use client";

import PedidosPedentes from "@/components/PedidosPedentes";

export default function Game() {
  return (
    <div id="gameArea" className="relative">
      <div id="section">
        <div className="gameSection">
          <PedidosPedentes />
        </div>
      </div>
      <div>
        <div className="gameSectionDois">
          <h2>Pedidos concluidos</h2>
        </div>
      </div>
    </div>
  );
}
