interface ReturnProps {
  alfa: number[];
  beta: number[];
}
export const calcFastForward = (
  b: number[],
  c: number[],
  a: number[],
  d: number[]
): ReturnProps => {
  const alfa: number[] = [];
  const beta: number[] = [];
  b.forEach((el, index) => {
    const calcValue =
      index === 0
        ? (c[index] / el) * -1
        : (c[index] / (a[index] * alfa[index - 1] + b[index])) * -1;
    alfa[index] = Math.abs(calcValue) === 0 ? Math.abs(calcValue) : calcValue;
  });
  b.forEach((el, index) => {
    const calcValue =
      index === 0
        ? (beta[index] = d[index] / el)
        : (beta[index] =
            (d[index] - a[index] * beta[index - 1]) /
            (a[index] * alfa[index - 1] + b[index]));

    beta[index] = Math.abs(calcValue) === 0 ? Math.abs(calcValue) : calcValue;
  });
  return { alfa, beta };
};
