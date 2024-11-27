export const updateMatrixB = (
  matrix: number[],
  defaultValue = 0,
  size: number
) => {
  return Array(size)
    .fill(null)
    .map((_, index) => {
      // Сохраняем существующее значение, если оно есть
      if (matrix[index] !== undefined) {
        return matrix[index];
      }
      // Иначе устанавливаем значение по умолчанию
      return defaultValue;
    });
};
