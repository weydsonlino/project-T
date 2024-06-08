import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function VeiculosParaEntrega() {
  class Veiculo {
    tipoVeiculo: string;
    capacidadeKG: number;
    capacidadeM3: number;
    valor: number;
    constructor(
      tipoVeiculo: string,
      capacidadeKG: number,
      capacidadeM3: number,
      valor: number
    ) {
      this.tipoVeiculo = tipoVeiculo;
      this.capacidadeKG = capacidadeKG;
      this.capacidadeM3 = capacidadeM3;
      this.valor = valor;
    }
  }
  const veiculos: Veiculo[] = [
    new Veiculo("Caminhão", 10000, 100, 1000),
    new Veiculo("Van", 5000, 50, 500),
  ];
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Tipo de Veículo</TableCell>
            <TableCell>Capacidade KG</TableCell>
            <TableCell>Capacidade M³</TableCell>
            <TableCell>Valor</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {veiculos.map((veiculo) => (
            <TableRow key={veiculo.tipoVeiculo}>
              <TableCell>{veiculo.tipoVeiculo}</TableCell>
              <TableCell>{veiculo.capacidadeKG}</TableCell>
              <TableCell>{veiculo.capacidadeM3}</TableCell>
              <TableCell>{veiculo.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default VeiculosParaEntrega;
