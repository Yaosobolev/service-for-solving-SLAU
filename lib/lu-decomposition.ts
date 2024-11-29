export const luDecomposition = (A: number[][]) => {
  const n = A.length;
  const L = Array.from({ length: n }, () => Array(n).fill(0));
  const U = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Заполняем U
      if (j >= i) {
        U[i][j] = A[i][j];
        for (let k = 0; k < i; k++) {
          U[i][j] -= L[i][k] * U[k][j];
        }
      }

      // Заполняем L
      if (j < i) {
        L[i][j] = A[i][j];
        for (let k = 0; k < j; k++) {
          L[i][j] -= L[i][k] * U[k][j];
        }
        L[i][j] /= U[j][j];
      }
    }
    L[i][i] = 1; // Диагональные элементы L равны 1
  }

  return { L, U };
};
