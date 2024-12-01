import { Table, TableBody, TableCell, TableRow } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Props {
  x: number[];
  className?: string;
}

export const TableThreePointScalarFastBackward: React.FC<Props> = ({
  className,
  x,
}) => {
  return (
    <>
      <h2 className="text-xl mt-7">Прогонка назад</h2>
      <Table className={cn("mt-1", className)}>
        <TableBody>
          {x.map((el, index) => {
            return (
              <TableRow key={index} className="text-nowrap">
                <TableCell>
                  {"x"}
                  <i className="text-[10px]">{index + 1}</i>
                  {` = ${el}`}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
