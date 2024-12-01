export interface ReturnProps {
  mainDiagonal: number[];
  bottomSideDiagonal: number[];
  upperDiagonal: number[];
}

export const tridiagonalTransformation = (A: number[][]): ReturnProps => {
  const mainDiagonal = A.map(
    (row, Iindex) => row.filter((_, Jindex) => Iindex === Jindex)[0]
  );

  const bottomSideDiagonal = A.map(
    (row, Iindex) => row.filter((_, Jindex) => Iindex === Jindex + 1)[0]
  ).map((el) => (el !== undefined ? el : 0));

  const upperDiagonal = A.map(
    (row, Iindex) => row.filter((_, Jindex) => Iindex === Jindex - 1)[0]
  ).map((el) => (el !== undefined ? el : 0));

  return {
    mainDiagonal,
    bottomSideDiagonal,
    upperDiagonal,
  };
};
