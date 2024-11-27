import { useState } from "react";

interface Props {
  onSizeChange: (size: number) => void;
}

export const MatrixSizeSelector: React.FC<Props> = ({ onSizeChange }) => {
  const [size, setSize] = useState(3);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
    onSizeChange(newSize);
  };

  return (
    <div className="mb-4">
      <label className="mr-2">Размерность матрицы:</label>
      <select
        value={size}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        {[2, 3, 4, 5, 6].map((n) => (
          <option key={n} value={n}>
            {n}x{n}
          </option>
        ))}
      </select>
    </div>
  );
};
