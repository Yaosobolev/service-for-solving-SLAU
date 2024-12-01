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
