import { luDecomposition } from "@/lib";

export const solveLU = (A: number[][], b: number[]) => {
  const { L, U } = luDecomposition(A);
  const n = b.length;

  // Решение Ly = b
  const y = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    y[i] = b[i];
    for (let j = 0; j < i; j++) {
      y[i] -= L[i][j] * y[j];
    }
  }

  // Решение Ux = y
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    x[i] = y[i];
    for (let j = i + 1; j < n; j++) {
      x[i] -= U[i][j] * x[j];
    }
    x[i] /= U[i][i];
  }

  return x;
};
