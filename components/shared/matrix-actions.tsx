interface Props {
  isOpenSolution: boolean;
  onClear: () => void;
  onSolve: () => void;
}

export const MatrixActions: React.FC<Props> = ({
  isOpenSolution,
  onClear,
  onSolve,
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
        {isOpenSolution ? "Скрыть" : "Решить"}
      </button>
    </div>
  );
};
