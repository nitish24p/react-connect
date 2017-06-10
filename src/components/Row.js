import React from 'react';

import Cell from './Cell'

const Row = (props) => {
  const { rowIndex, row, nextPlayer, addPiece } = props;
  const generateCells = row.map((rowItem, columnIndex) => {
      return (
        <Cell
          key={`${rowIndex}-${columnIndex}`}
          cell={rowItem}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          nextPlayer={nextPlayer}
          addPiece={addPiece}
        />
      )
    });

  return (
    <div>
    {generateCells}
    </div>
  )
}

export default Row;
