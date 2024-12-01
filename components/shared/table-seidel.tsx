"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { HeaderSeidel } from "./header-seidel";
import { iterationCalcSeidel } from "@/lib";

interface Props {
  matrix: number[][];
  vector: number[];
}

interface ResultProps {
  betweenValues: number[][];
  index: number;
  maxAbsoluteValue: number[];
}

export const TableSeidel: React.FC<Props> = ({ matrix, vector }) => {
  const [accuracy, setAccuracy] = useState<number>(0.0001);

  const [result, setResult] = useState<ResultProps | string>({
    betweenValues: [[0]],
    index: 0,
    maxAbsoluteValue: [0],
  });

  useEffect(() => {
    const resultCalc = iterationCalcSeidel(matrix, vector, accuracy);
    setResult(resultCalc);
  }, [matrix, vector, accuracy]);
  return (
    <>
      <HeaderSeidel value={accuracy} onSetValue={setAccuracy} />

      {}
      <h2 className="text-xl mt-7">
        {`Реализация метода Зейделя при точности ${accuracy}`}
      </h2>

      {typeof result === "object" ? (
        <Table className={cn("mt-1")}>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">n</TableHead>
              {matrix.map((_, index) => {
                return (
                  <TableHead key={index} className="text-center">{`x${
                    index + 1
                  }`}</TableHead>
                );
              })}

              <TableHead className="text-right">
                <p className="flex justify-end ">
                  max |{" "}
                  <div className="flex gap-2 ">
                    <p className="flex gap-1">
                      x{" "}
                      <span className="flex flex-col items-center justify-center gap-2">
                        <sup>k</sup> <sub>i</sub>
                      </span>
                    </p>{" "}
                    <span>-</span>{" "}
                    <p className="flex gap-1">
                      x{" "}
                      <span className="flex flex-col items-start justify-center gap-2">
                        <sup>k - 1</sup> <sub>i</sub>
                      </span>
                    </p>{" "}
                  </div>{" "}
                  |
                </p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="text-nowrap">
              <TableCell className="text-left">{0}</TableCell>
              {vector.map((el, index) => {
                return (
                  <TableCell key={index} className="text-right">
                    {el}
                  </TableCell>
                );
              })}
            </TableRow>
            {Array(result.betweenValues.length)
              .fill(0)
              .map((_, index) => {
                return (
                  <TableRow key={index} className="text-nowrap">
                    <TableCell className="text-left">{index + 1}</TableCell>
                    {result.betweenValues[index].map((el, index) => {
                      return (
                        <TableCell key={index} className="text-right">
                          {el}
                        </TableCell>
                      );
                    })}

                    <TableCell key={index} className="text-right">
                      {result.maxAbsoluteValue[index]}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      ) : (
        <p className="mt-2 text-base font-semibold text-red-500">{result}</p>
      )}
    </>
  );
};
