interface ReturnProps {
  maxAbsolute: number;
  isAccurate: boolean;
}

export const checkAccuracySeidel = (
  curX: number[],
  prevX: number[],
  e: number
): ReturnProps => {
  const vector = curX.map((el, i) => el - prevX[i]);

  const maxAbsolute = Math.max(...vector.map(Math.abs));
  const isAccurate = maxAbsolute < e;

  return { maxAbsolute, isAccurate };
};
