"use client";

import {
  Container,
  MatrixActions,
  MatrixInput,
  MatrixSizeSelector,
  MethodSelector,
} from "@/components/shared";
import { useState } from "react";

export default function Home() {
  const [size, setSize] = useState(3);
  const [matrixA, setMatrixA] = useState<number[][]>(
    Array(size).fill(Array(size).fill(0))
  );
  const [matrixB, setMatrixB] = useState<number[]>(Array(size).fill(0));
  const [method, setMethod] = useState("");

  const handleClear = () => {
    setMatrixA(Array(size).fill(Array(size).fill(0)));
    setMatrixB(Array(size).fill(0));
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
      <MethodSelector onMethodChange={setMethod} />
      <MatrixActions onClear={handleClear} onSolve={handleSolve} />
    </Container>
  );
}
