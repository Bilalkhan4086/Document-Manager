import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonRows = ({ cellSize, rowsLength }) => {
  let rows = Array.from(Array(rowsLength).keys());

  return rows.map((_, i) => (
    <TableRow key={`row-${i}`}>
      <TableCell colSpan={cellSize}>
        <Skeleton key={`skelton-${i}`} />
      </TableCell>
    </TableRow>
  ));
};

export default SkeletonRows;
