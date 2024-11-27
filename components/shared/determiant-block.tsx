import { determinant } from "@/lib";

interface Props {
  matrix: number[][];
}

export const DeterminantBlock: React.FC<Props> = ({ matrix }) => {
  const resultDeterminant = determinant(matrix);
  return (
    <div className="text-sm font-medium mt-2">
      <span>det A</span>
      <span> = </span>
      <span>{resultDeterminant}</span>
    </div>
  );
};
