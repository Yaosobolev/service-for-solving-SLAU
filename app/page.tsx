"use client";

import {
  Container,
  DeterminantBlock,
  MatrixActions,
  MatrixInput,
  MatrixSizeSelector,
  MethodSelector,
  TableInverseMatrix,
} from "@/components/shared";

import { updateMatrixA, updateMatrixB } from "@/lib";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpenSolution, setIsOpenSolution] = useState<boolean>(false);

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

  const handleChangeMethod = (method: string) => {
    setMethod(method);
  };
  const handleSolve = () => {
    switch (method) {
      case "Определитель":
        setIsOpenSolution(!isOpenSolution);

        break;
      case "Обратная матрица":
        setIsOpenSolution(!isOpenSolution);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setMatrixA(updateMatrixA(matrixA, 0, size));
    setMatrixB(updateMatrixB(matrixB, 0, size));
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
      <MatrixActions
        onClear={handleClear}
        onSolve={handleSolve}
        isOpenSolution={isOpenSolution}
      />

      {isOpenSolution && (
        <div>
          <h2 className="text-xl mt-8">Результат: {method}</h2>
          {method === "Определитель" ? (
            <DeterminantBlock matrix={matrixA} />
          ) : (
            <TableInverseMatrix matrix={matrixA} />
          )}
        </div>
      )}
    </Container>
  );
}
