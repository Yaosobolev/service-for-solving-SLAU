import {
  calcFastBackward,
  calcFastForward,
  conditionsOfApplicabilityThreePointScalar,
  tridiagonalTransformation,
} from "@/lib";
import {
  TableThreePointScalarFastBackward,
  TableThreePointScalarFastForward,
  ThreePointScalarFulfillmentCondition,
} from "@/components/shared";

interface Props {
  matrix: number[][];
  vector: number[];
  className?: string;
}

export const TableThreePointScalar: React.FC<Props> = ({ matrix, vector }) => {
  const { mainDiagonal, bottomSideDiagonal, upperDiagonal } =
    tridiagonalTransformation(matrix);
  const { arraySums } = conditionsOfApplicabilityThreePointScalar(
    bottomSideDiagonal,
    upperDiagonal
  );

  const conclusion = mainDiagonal.find((a, i) => Math.abs(a) < arraySums[i])
    ? false
    : true;

  const { alfa, beta } = calcFastForward(
    mainDiagonal,
    upperDiagonal,
    bottomSideDiagonal,
    vector
  );

  const { x } = calcFastBackward(
    mainDiagonal,
    bottomSideDiagonal,
    vector,
    alfa,
    beta
  );

  return (
    <>
      <ThreePointScalarFulfillmentCondition
        arraySums={arraySums}
        bottomSideDiagonal={bottomSideDiagonal}
        mainDiagonal={mainDiagonal}
        upperDiagonal={upperDiagonal}
        conclusion={conclusion}
      />

      {conclusion && (
        <>
          <TableThreePointScalarFastForward alfa={alfa} beta={beta} />
          <TableThreePointScalarFastBackward x={x} />
        </>
      )}
    </>
  );
};
