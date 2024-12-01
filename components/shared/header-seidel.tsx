interface Props {
  className?: string;
  value: number;
  onSetValue: (value: number) => void;
}

export const HeaderSeidel: React.FC<Props> = ({ value, onSetValue }) => {
  return (
    <div className=" mt-3">
      <label htmlFor={`seidel-input`} className="mr-2">
        Точность <p className="inline-block">&#949; :</p>
      </label>
      <input
        key={`seidel-input`}
        type="number"
        value={value}
        onChange={(e) => onSetValue(Number(e.target.value))}
        className="p-2 border rounded text-center "
      />
    </div>
  );
};
