import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { calcInverseMatrix } from "@/lib";

interface Props {
  matrix: number[][];
}

export const TableInverseMatrix: React.FC<Props> = ({ matrix }) => {
  const resultInverseMatrix = calcInverseMatrix(matrix);
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {matrix.map((_, index) => (
              <TableHead key={index} className="text-center">
                a{index + 1}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {resultInverseMatrix.map((row, index) => {
            return (
              <TableRow key={index}>
                {row.map((el, index) => (
                  <TableCell key={index} className="text-center">
                    {el}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
