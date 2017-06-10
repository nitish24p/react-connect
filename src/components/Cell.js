import React from 'react';

const determineCellClass = (cell) => {
  if(cell === 'red') return 'red';
  else if (cell === 'blue') return 'blue';
  else return ''
}

const Cell = (props) => {
  return(
    <div className={`cell ${determineCellClass(props.cell)}`}
      onClick={() => props.addPiece(props.columnIndex)}
    >
    </div>
  )
}

export default Cell;