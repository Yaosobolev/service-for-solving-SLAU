import { determinant } from "./determinant";

const getMinor = (matrix: number[][], row: number, col: number) => {
  return matrix
    .filter((_, i) => i !== row)
    .map((row) => row.filter((_, j) => j !== col));
};

export const calcInverseMatrix = (matrix: number[][]): number[][] => {
  const det = determinant(matrix);
  if (det === 0) {
    throw new Error(
      "Матрица не имеет обратной, так как ее определитель равен 0."
    );
  }

  const n = matrix.length;
  const adjugateMatrix: number[][] = [];

  for (let i = 0; i < n; i++) {
    const row: number[] = [];
    for (let j = 0; j < n; j++) {
      const minor = getMinor(matrix, i, j);
      const cofactor = determinant(minor);
      // Чередующийся знак для алгебраических дополнений
      row.push(((i + j) % 2 === 0 ? 1 : -1) * cofactor);
    }
    adjugateMatrix.push(row);
  }

  // Транспонирование матрицы
  const transpose = adjugateMatrix[0].map((_, colIndex) =>
    adjugateMatrix.map((row) => row[colIndex])
  );

  // Деление каждого элемента транспонированной матрицы на определитель
  return transpose.map((row) => row.map((value) => value / det));
};
