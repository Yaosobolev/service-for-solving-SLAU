import { calcSeidel } from "./calc-seidel";
import { checkAccuracySeidel } from "./check-accuracy-seidel";
import { checkDiagonalDominance } from "./check-diagonal-dominance";
interface ReturnProps {
  betweenValues: number[][];
  index: number;
  maxAbsoluteValue: number[];
}
export const iterationCalcSeidel = (
  A: number[][],
  b: number[],
  k: number
): ReturnProps | string => {
  const maxAbsoluteValue: number[] = [];
  const betweenValues: number[][] = [];
  let index = 0;

  const isConvergent = checkDiagonalDominance(A);
  if (!isConvergent) {
    return "Матрица не удовлетворяет достаточному условию сходимости (нет диагонального преобладания).";
  }

  const accuracy = k;
  let { prevX, values } = calcSeidel(A, b);
  console.log("prevX: ", prevX);
  console.log("values: ", values);
  betweenValues.push([...values]);
  let { maxAbsolute, isAccurate } = checkAccuracySeidel(
    prevX,
    values,
    accuracy
  );
  maxAbsoluteValue.push(maxAbsolute);
  index++;

  for (index; !isAccurate; index++) {
    ({ prevX, values } = calcSeidel(A, b, values));
    betweenValues.push([...values]);
    ({ maxAbsolute, isAccurate } = checkAccuracySeidel(
      prevX,
      values,
      accuracy
    ));
    maxAbsoluteValue.push(maxAbsolute);
    if (index === 1000)
      return "Матрица не удовлетворяет условию сходимости либо слишком строгая точность";
  }

  return { betweenValues, index, maxAbsoluteValue };
};
