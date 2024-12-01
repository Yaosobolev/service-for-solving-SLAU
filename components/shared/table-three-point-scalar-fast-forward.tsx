import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui";

interface Props {
  alfa: number[];
  beta: number[];
  className?: string;
}

export const TableThreePointScalarFastForward: React.FC<Props> = ({
  className,
  alfa,
  beta,
}) => {
  return (
    <>
      <h2 className="text-xl mt-7">Прогонка вперед</h2>
      <Table className={cn("mt-1", className)}>
        <TableBody>
          {alfa.map((el, index) => {
            return (
              <TableRow key={index} className="text-nowrap">
                <TableCell>
                  {"\u03b1"}
                  <i className="text-[10px]">{index + 1}</i>
                  {` = ${el}`}
                </TableCell>
                <TableCell>
                  {"\u03b2"}
                  <i className="text-[10px]">{index + 1}</i>
                  {` = ${beta[index]}`}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
