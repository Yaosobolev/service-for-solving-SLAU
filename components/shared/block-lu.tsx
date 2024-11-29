import { luDecomposition, solveLU } from "@/lib";
import { TableLU } from "./table-lu";
import { TableSolveLU } from "./table-solve-lu";

interface Props {
  matrix: number[][];
  vector: number[];
}

export const BlockLU: React.FC<Props> = ({ matrix, vector }) => {
  const { L, U } = luDecomposition(matrix);
  const x = solveLU(matrix, vector);
  return (
    <>
      <TableLU title="L-матрица" lUMatrix={L} />
      <TableLU title="M-матрица" lUMatrix={U} />
      <TableSolveLU title="Решение СЛАУ методом LU-разложения" lUMatrix={x} />
    </>
  );
};
