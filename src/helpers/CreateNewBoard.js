/* Creates a row x column matrix and fills all values with 0
*/

const createNewBoard = (rows, columns) => {
  let result = [];
  for (var i = 0; i < rows; i++) {
    result.push(new Array(columns).fill(0));
  }

  return result;
}

export default createNewBoard;