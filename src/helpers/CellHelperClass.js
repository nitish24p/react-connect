const determineCellClass = (cell) => {
  if(cell === 'red') return 'red';
  else if (cell === 'blue') return 'blue';
  else return ''
}

export default determineCellClass;