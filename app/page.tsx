"use client";

import {
  Container,
  DeterminantBlock,
  MatrixActions,
  MatrixInput,
  MatrixSizeSelector,
  MethodSelector,
  TableGauss,
  TableInverseMatrix,
} from "@/components/shared";

import { updateMatrixA, updateMatrixB } from "@/lib";
import { methods } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpenSolution, setIsOpenSolution] = useState<boolean>(false);

  const [size, setSize] = useState(3);
  const [matrixA, setMatrixA] = useState<number[][]>(
    Array(size).fill(Array(size).fill(0))
  );
  const [matrixB, setMatrixB] = useState<number[]>(Array(size).fill(0));
  const [method, setMethod] = useState(methods[0]);
  const handleClear = () => {
    setMatrixA(Array(size).fill(Array(size).fill(0)));
    setMatrixB(Array(size).fill(0));
  };

  const handleChangeMethod = (method: string) => {
    setMethod(method);
  };
  const handleSolve = () => {
    if (methods.includes(method)) {
      setIsOpenSolution(!isOpenSolution);
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
          {(() => {
            switch (method) {
              case "Определитель":
                return <DeterminantBlock matrix={matrixA} />;
              case "Обратная матрица":
                return <TableInverseMatrix matrix={matrixA} />;
              case "Гаусс":
                return <TableGauss matrix={matrixA} vector={matrixB} />;
              default:
                return <div>Метод не найден</div>;
            }
          })()}
        </div>
      )}
    </Container>
  );
}
