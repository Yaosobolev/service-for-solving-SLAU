interface ReturnProps {
  values: number[];
  prevX: number[];
}
export const calcSeidel = (
  A: number[][],
  b: number[],
  curX: number[] = b ? [...b] : []
): ReturnProps => {
  const values: number[] = [];

  const prevX: number[] = [...curX];

  if (A && A.length) {
    for (let i = 0; i < A.length; i++) {
      values.push(b[i] / A[i][i]);
      for (let j = 0; j < A.length; j++) {
        if (j < i) {
          values[i] -= (A[i][j] / A[i][i]) * curX[j];
        }
        if (j > i) {
          values[i] -= (A[i][j] / A[i][i]) * curX[j];
        }
      }
      curX[i] = values[i];
    }
  }

  return { prevX, values };
};
