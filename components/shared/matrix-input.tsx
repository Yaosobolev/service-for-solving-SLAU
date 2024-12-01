interface Props {
  matrixA: number[][];
  matrixB: number[];
  size: number;
  onMatrixAChange: (matrix: number[][]) => void;
  onMatrixBChange: (matrix: number[]) => void;
}

export const MatrixInput: React.FC<Props> = ({
  matrixA,
  matrixB,
  size,
  onMatrixAChange,
  onMatrixBChange,
}) => {
  const handleMatrixAChange = (row: number, col: number, value: string) => {
    const newMatrix = matrixA.map((rowArray, i) =>
      rowArray.map((cell, j) =>
        i === row && j === col ? parseFloat(value) || 0 : cell
      )
    );
    onMatrixAChange(newMatrix);
  };
  const handleMatrixBChange = (row: number, value: string) => {
    const newMatrixB = matrixB.map((cell, i) =>
      i === row ? parseFloat(value) || 0 : cell
    );
    onMatrixBChange(newMatrixB);
  };

  return (
    <div className="overflow-x-auto max-w-[1000px] mb-2">
      <div className="px-2 flex gap-6">
        <div className="">
          {" "}
          <p className="font-bold text-center mb-2 text-nowrap">Матрица A</p>
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
          >
            {matrixA.map((row, i) =>
              row.map((cell, j) => (
                <input
                  key={`A-${i}-${j}`}
                  type="number"
                  value={cell}
                  onChange={(e) => handleMatrixAChange(i, j, e.target.value)}
                  className="p-2 border rounded text-center max-w-20"
                />
              ))
            )}
          </div>
        </div>
        <div className="">
          <p className="font-bold text-center mb-2 text-nowrap">Матрица B</p>
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: `repeat(1, 1fr)` }}
          >
            {matrixB.map((cell, i) => (
              <input
                key={`B-${i}`}
                type="number"
                value={cell}
                onChange={(e) => handleMatrixBChange(i, e.target.value)}
                className="p-2 border rounded text-center max-w-20 bg-orange-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
