const WINNING_COUNT = 4;

const DecideGameWinner = (board) => {
  if (horizontalCheck(board).isGameOver || verticalCheck(board).isGameOver) {
    return true
  }
}

const horizontalCheck = (board) => {
  var rowIndex, columnIndex, redCount = 0, blueCount = 0;
  let winnerObj = {};
  // Loop through all rows
  for (rowIndex = 0; rowIndex < board.length; rowIndex++) {

    // Loop through all the columns
    for (columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
      if (board[rowIndex][columnIndex] === 'red') {
        redCount ++;
        blueCount = 0
      } else if (board[rowIndex][columnIndex] === 'blue') {
        blueCount ++;
        redCount = 0;
      }

      if (redCount === WINNING_COUNT) {
        winnerObj.isGameOver = true;
        winnerObj.winner = 'red';
        break;
      }

      if (blueCount === WINNING_COUNT) {
        winnerObj.isGameOver = true;
        winnerObj.winner = 'blue';
        break;
      }
    }

    redCount = 0;
    blueCount = 0
  }

  return winnerObj
}

const verticalCheck = (board) => {
  var rowIndex, columnIndex, redCount = 0, blueCount = 0;
  let winnerObj = {};
  // Loop through all columns
  for (columnIndex = 0; columnIndex < board[0].length; columnIndex++) {

    // Loop through all the row cells
    for (rowIndex = 0; rowIndex < board.length; rowIndex++) {
      if (board[rowIndex][columnIndex] === 'red') {
        // Increase Respective count and set other color count to 0 as cells have to be continuos
        redCount ++;
        blueCount = 0;
      } else if (board[rowIndex][columnIndex] === 'blue') {
        blueCount ++;
        redCount = 0;
      }

      if (redCount === WINNING_COUNT) {
        winnerObj.isGameOver = true;
        winnerObj.winner = 'red';
        break;
      }

      if (blueCount === WINNING_COUNT) {
        winnerObj.isGameOver = true;
        winnerObj.winner = 'blue';
        break;
      }
    }

    redCount = 0;
    blueCount = 0
  }

  return winnerObj

}


const diagonalCheck = (board) => {
  var rowIndex, columnIndex, redCount = 0, blueCount = 0;
  let winnerObj = {};
  const rowLength = board.length;
  const columnLength = board[0].length;

  var maxLength = Math.max(rowLength, columnLength);

  var temp;

  for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
      temp = [];
      for (var y = columnLength - 1; y >= 0; --y) {
          var x = k - y;
          if (x >= 0 && x < rowLength) {
              console.log(board[x][y])
          }
      }
  }

}


export default DecideGameWinner;