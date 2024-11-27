import { gaussElimination } from "@/lib";
import { TableBackwardGauss, TableForwardGauss } from "@/components/shared";

interface Props {
  matrix: number[][];
  vector: number[];
}

export const TableGauss: React.FC<Props> = ({ matrix, vector }) => {
  const { forwardElimination, backwardElimination } = gaussElimination(
    matrix,
    vector
  );
  return (
    <>
      <TableForwardGauss forwardElimination={forwardElimination} />
      <TableBackwardGauss backwardElimination={backwardElimination} />
    </>
  );
};
