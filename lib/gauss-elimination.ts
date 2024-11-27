// export function gaussElimination(matrix: number[][], vector: number[]) {
//   const n = matrix.length;
//   for (let i = 0; i < n; i++) {
//     // Находим максимальный элемент в текущем столбце
//     let maxElementIndex = i;
//     for (let k = i + 1; k < n; k++) {
//       if (Math.abs(matrix[k][i]) > Math.abs(matrix[maxElementIndex][i])) {
//         maxElementIndex = k;
//       }
//     }

//     // Перестановка строк
//     [matrix[i], matrix[maxElementIndex]] = [matrix[maxElementIndex], matrix[i]];
//     [vector[i], vector[maxElementIndex]] = [vector[maxElementIndex], vector[i]];

//     // Диагонализируем текущий элемент
//     for (let k = i + 1; k < n; k++) {
//       const factor = matrix[k][i] / matrix[i][i];
//       for (let j = i; j < n; j++) {
//         matrix[k][j] -= factor * matrix[i][j];
//       }
//       vector[k] -= factor * vector[i];
//     }
//   }

//   // Обратный ход
//   const solution = Array(n).fill(0);
//   for (let i = n - 1; i >= 0; i--) {
//     let sum = vector[i];
//     for (let j = i + 1; j < n; j++) {
//       sum -= matrix[i][j] * solution[j];
//     }
//     solution[i] = sum / matrix[i][i];
//   }
//   return solution;
// }
const deepCopyMatrix = (matrix: number[][]): number[][] => {
  return matrix.map((row) => [...row]);
};

// const forwardElimination = (matrix: number[][], vector: number[]) => {
//   const n = matrix.length;
//   for (let i = 0; i < n; i++) {
//     let maxElementIndex = i;

//     for (let k = i + 1; k < n; k++) {
//       if (Math.abs(matrix[k][i]) > Math.abs(matrix[maxElementIndex][i])) {
//         maxElementIndex = k;
//       }
//     }

//     // Перестановка строк
//     [matrix[i], matrix[maxElementIndex]] = [matrix[maxElementIndex], matrix[i]];
//     [vector[i], vector[maxElementIndex]] = [vector[maxElementIndex], vector[i]];

//     for (let k = i + 1; k < n; k++) {
//       const factor = matrix[k][i] / matrix[i][i];
//       for (let j = i; j < n; j++) {
//         matrix[k][j] -= factor * matrix[i][j];
//       }
//       vector[k] -= factor * vector[i];
//     }
//   }
// };
function forwardElimination(matrix: number[][], vector: number[]) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    // Находим максимальный элемент в текущем столбце по модулю для выбора ведущего элемента
    let maxElementIndex = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(matrix[k][i]) > Math.abs(matrix[maxElementIndex][i])) {
        maxElementIndex = k;
      }
    }

    // Перестановка строк
    [matrix[i], matrix[maxElementIndex]] = [matrix[maxElementIndex], matrix[i]];
    [vector[i], vector[maxElementIndex]] = [vector[maxElementIndex], vector[i]];

    // Масштабируем строку так, чтобы ведущий элемент был равен единице
    const leadingElement = matrix[i][i];
    for (let j = i; j < n; j++) {
      matrix[i][j] /= leadingElement;
    }
    vector[i] /= leadingElement;

    // Обнуляем элементы ниже диагонали в текущем столбце
    for (let k = i + 1; k < n; k++) {
      const factor = matrix[k][i];
      for (let j = i; j < n; j++) {
        matrix[k][j] -= factor * matrix[i][j];
      }
      vector[k] -= factor * vector[i];
    }
  }
}

const backwardElimination = (matrix: number[][], vector: number[]) => {
  const n = matrix.length;
  const solution = Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    let sum = vector[i];
    for (let j = i + 1; j < n; j++) {
      sum -= matrix[i][j] * solution[j];
    }
    solution[i] = sum / matrix[i][i];
  }

  return solution;
};

export const gaussElimination = (matrix: number[][], vector: number[]) => {
  const matrixCopy = deepCopyMatrix(matrix);
  const vectorCopy = [...vector];

  forwardElimination(matrixCopy, vectorCopy);
  const resultBackwardElimination = backwardElimination(matrixCopy, vectorCopy);

  return {
    forwardElimination: matrixCopy.map((row, i) => [...row, vectorCopy[i]]),
    backwardElimination: resultBackwardElimination,
  };
};
