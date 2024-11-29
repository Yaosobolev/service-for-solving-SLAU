import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

interface Props {
  lUMatrix: number[][];
  title: string;
}

export const TableSolveLU: React.FC<Props> = ({ lUMatrix, title }) => {
  return (
    <>
      <h2 className="text-xl mt-8">{title}</h2>
      <Table className="max-w-[200px]">
        <TableBody>
          {lUMatrix.map((el, index) => {
            return (
              <TableRow key={index} className="flex items-center">
                <TableCell className="font-medium">
                  {`x${index + 1}`}:
                </TableCell>
                <span className="text-sm">=</span>
                <TableCell className="font-medium">{el}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
