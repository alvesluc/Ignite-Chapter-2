import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 8.000,00</td>
            <td>Desenvolvimento</td>
            <td>17/03/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 950,00</td>
            <td>Apartamento</td>
            <td>15/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}