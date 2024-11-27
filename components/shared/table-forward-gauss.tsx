import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

interface Props {
  forwardElimination: number[][];
}

export const TableForwardGauss: React.FC<Props> = ({ forwardElimination }) => {
  return (
    <>
      <h2 className="text-lg mt-8">Прямой ход</h2>
      <Table>
        <TableHeader>
          <TableRow>
            {forwardElimination[0].map((_, index) => (
              <TableHead key={index} className="text-center">
                {index === forwardElimination[0].length - 1
                  ? "b"
                  : "a" + (index + 1)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {forwardElimination.map((row, index) => {
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
