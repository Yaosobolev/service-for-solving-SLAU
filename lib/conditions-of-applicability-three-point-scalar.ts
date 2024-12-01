interface ReturnProps {
  arraySums: number[];
}

export const conditionsOfApplicabilityThreePointScalar = (
  a: number[],
  c: number[]
): ReturnProps => {
  const arraySums = a.map(
    (_, index) => Math.abs(a[index]) + Math.abs(c[index])
  );

  return { arraySums };
};
