"use client";

import {
  Container,
  MatrixActions,
  MatrixInput,
  MatrixSizeSelector,
  MethodSelector,
} from "@/components/shared";
import { useEffect, useState } from "react";

export default function Home() {
  const [size, setSize] = useState(3);
  const [matrixA, setMatrixA] = useState<number[][]>(
    Array(size).fill(Array(size).fill(0))
  );
  const [matrixB, setMatrixB] = useState<number[]>(Array(size).fill(0));
  const [method, setMethod] = useState("");
  console.log(matrixA);
  const handleClear = () => {
    setMatrixA(Array(size).fill(Array(size).fill(0)));
    setMatrixB(Array(size).fill(0));
  };

  const handleChangeMethod = (method: string) => {
    setMethod(method);
  };
  const handleSolve = () => {
    // Здесь вызовите соответствующий алгоритм для решения
    console.log(
      "Решение для метода:",
      method,
      "Матрица A:",
      matrixA,
      "Матрица B:",
      matrixB
    );
  };

  useEffect(() => {
    const updateMatrixA = (matrix: number[][], defaultValue = 0) => {
      // Создаем новую матрицу с нужным размером
      const newMatrix = Array(size)
        .fill(null)
        .map((_, rowIndex) =>
          Array(size)
            .fill(null)
            .map((_, colIndex) => {
              // Если элемент существует в старой матрице, сохраняем его
              if (
                matrix[rowIndex] &&
                matrix[rowIndex][colIndex] !== undefined
              ) {
                return matrix[rowIndex][colIndex];
              }
              // Иначе используем значение по умолчанию
              return defaultValue;
            })
        );
      return newMatrix;
    };
    const updateMatrixB = (matrix: number[], defaultValue = 0) => {
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

    setMatrixA(updateMatrixA(matrixA, 0));
    setMatrixB(updateMatrixB(matrixB, 0));
    // setMatrixA(Array(size).fill(Array(size).fill(0)));
    // setMatrixB(Array(size).fill(0));
  }, [size]);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Решение систем уравнений</h1>
      <MatrixSizeSelector onSizeChange={setSize} />
      <MatrixInput
        matrixA={matrixA}
        matrixB={matrixB}
        size={size}
        onMatrixAChange={setMatrixA}
        onMatrixBChange={setMatrixB}
      />
      <MethodSelector onMethodChange={handleChangeMethod} />
      <MatrixActions onClear={handleClear} onSolve={handleSolve} />
    </Container>
  );
}
