export const determinant = (matrix: number[][]) => {
  const n = matrix.length;

  // Базовый случай для 1x1 матрицы
  if (n === 1) {
    return matrix[0][0];
  }

  // Базовый случай для 2x2 матрицы
  if (n === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  // Рекурсивное вычисление для n x n матриц
  let det = 0;

  for (let col = 0; col < n; col++) {
    // Получаем минор, исключая текущую строку и столбец
    const minor = matrix.slice(1).map((row) => row.filter((_, j) => j !== col));

    // Вычисление определителя с использованием разложения по первой строке
    const cofactor = matrix[0][col] * determinant(minor);

    // Чередование знака (+, -, +, -,...)
    det += (col % 2 === 0 ? 1 : -1) * cofactor;
  }

  return det;
};

// export function determinant(mat: number[][], n: number) {
//   if (n === 1) {
//     return mat[0][0];
//   }
//   let det = 0;
//   let sign = 1;
//   for (let i = 0; i < n; i++) {
//     let submatrix = createSubmatrix(mat, i, n);
//     det += sign * mat[0][i] * determinant(submatrix, n - 1);
//     sign = -sign;
//   }
//   return det;
// }

// function createSubmatrix(mat: number[][], colToRemove: number, n: number) {
//   let submatrix = [];
//   for (let i = 1; i < n; i++) {
//     let newRow = [];
//     for (let j = 0; j < n; j++) {
//       if (j !== colToRemove) {
//         newRow.push(mat[i][j]);
//       }
//     }
//     submatrix.push(newRow);
//   }
//   return submatrix;
// }

// export function determinant(mat: number[][], n: number) {
//   let det = 1;
//   let total = 1;
//   const temp = Array(n).fill(0);
//   for (let i = 0; i < n; i++) {
//     let index = i;
//     while (index < n && mat[index][i] === 0) {
//       index++;
//     }
//     if (index === n) {
//       continue;
//     }
//     if (index !== i) {
//       for (let j = 0; j < n; j++) {
//         [mat[i][j], mat[index][j]] = [mat[index][j], mat[i][j]];
//       }
//       det *= Math.pow(-1, index - i);
//     }
//     for (let j = 0; j < n; j++) {
//       temp[j] = mat[i][j];
//     }
//     for (let j = i + 1; j < n; j++) {
//       const num1 = temp[i];
//       const num2 = mat[j][i];
//       for (let k = 0; k < n; k++) {
//         mat[j][k] = num1 * mat[j][k] - num2 * temp[k];
//       }
//       total *= num1;
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     det *= mat[i][i];
//   }
//   return det / total;
// }
