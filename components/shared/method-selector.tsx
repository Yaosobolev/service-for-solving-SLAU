interface Props {
  onMethodChange: (method: string) => void;
}

export const MethodSelector: React.FC<Props> = ({ onMethodChange }) => {
  const methods = [
    "Гаусс",
    "LU-разложение",
    "Определитель",
    "Метод трёхдиагональной прогонки",
    "Зейдель",
    "Обратная матрица",
  ];

  return (
    <div className="mb-4 px-4 ">
      <label className="mr-2">Метод решения:</label>
      <select
        onChange={(e) => onMethodChange(e.target.value)}
        className="p-2 border block rounded max-w-[200px] mt-1"
      >
        {methods.map((method) => (
          <option key={method} value={method}>
            {method}
          </option>
        ))}
      </select>
    </div>
  );
};
