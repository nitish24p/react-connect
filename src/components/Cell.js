import React from 'react';

const Cell = (props) => {
  console.log('insideCell', props)

  return(
    <div className='cell {props.cell ? yes}'
      onClick={() => props.addPiece(props.columnIndex)}
    >
      {props.cell}
    </div>
  )
}

export default Cell;