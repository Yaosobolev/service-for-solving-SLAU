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

export const TableLU: React.FC<Props> = ({ lUMatrix, title }) => {
  console.log(lUMatrix);
  return (
    <>
      <h2 className="text-xl mt-8">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            {lUMatrix.map((_, index) => (
              <TableHead key={index} className="text-center">
                a{index + 1}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {lUMatrix.map((el, index) => {
            return (
              <TableRow key={index}>
                {el.map((el, index) => (
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
