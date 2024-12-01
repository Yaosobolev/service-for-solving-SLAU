export const checkDiagonalDominance = (A: number[][]): boolean => {
  for (let i = 0; i < A.length; i++) {
    const rowSum = A[i].reduce(
      (sum, value, j) => (j !== i ? sum + Math.abs(value) : sum),
      0
    );
    if (Math.abs(A[i][i]) <= rowSum) {
      return false;
    }
  }
  return true;
};
