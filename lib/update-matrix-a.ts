export const updateMatrixA = (
  matrix: number[][],
  defaultValue = 0,
  size: number
) => {
  // Создаем новую матрицу с нужным размером
  const newMatrix = Array(size)
    .fill(null)
    .map((_, rowIndex) =>
      Array(size)
        .fill(null)
        .map((_, colIndex) => {
          // Если элемент существует в старой матрице, сохраняем его
          if (matrix[rowIndex] && matrix[rowIndex][colIndex] !== undefined) {
            return matrix[rowIndex][colIndex];
          }
          // Иначе используем значение по умолчанию
          return defaultValue;
        })
    );
  return newMatrix;
};
