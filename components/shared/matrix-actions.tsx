export const MatrixActions = ({
  onClear,
  onSolve,
}: {
  onClear: () => void;
  onSolve: () => void;
}) => {
  return (
    <div className="mt-4 flex gap-4">
      <button
        onClick={onClear}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Очистить
      </button>
      <button
        onClick={onSolve}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Решить
      </button>
    </div>
  );
};
