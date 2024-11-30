import { Table, TableBody, TableCell, TableRow } from "@/components/ui";

interface Props {
  backwardElimination: number[];
}

export const TableBackwardGauss: React.FC<Props> = ({
  backwardElimination,
}) => {
  return (
    <>
      <h2 className="text-lg mt-8">Обратный ход</h2>
      <Table className="max-w-[200px]">
        <TableBody>
          {backwardElimination.map((el, index) => {
            return (
              <TableRow key={index} className="flex items-center">
                <TableCell className="font-medium">x{index + 1}:</TableCell>
                <span className="text-sm">=</span>
                <TableCell className="font-medium">
                  {Number.isNaN(el) ? 0 : el}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
