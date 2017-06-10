import React, { Component } from 'react';

import CreateNewBoard from './../helpers/CreateNewBoard';

import Row from './Row';

const NO_OF_ROWS = 6;
const NO_OF_COLUMNS = 7;

class Board extends Component {
    constructor(props) {
      super(props);

      this.state = {
        board: [],
        nextPlayer: 'red'
      }

    }

    componentWillMount() {
      const board = CreateNewBoard(NO_OF_ROWS, NO_OF_COLUMNS)
      this.setState({...this.state, board});
    }

    renderBoard() {
      return this.state.board.map((row, rowIndex) => {
        return (
          <Row 
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            nextPlayer={this.state.nextPlayer}
            addPiece={this.addPiece.bind(this)}
          />
        )
      })
    }

    togglePlayer() {
      if (this.state.nextPlayer === 'red') {
        this.setState({...this.state, nextPlayer: 'blue'})
      } else {
        this.setState({...this.state, nextPlayer: 'red'})
      }
    }

    addPiece(columnIndex) {
      const board = [...this.state.board];
      let rowToAdd = board.length - 1 // Maximum Index can be 5 
      let i;
      for (i = 0; i < board.length; i++) {
        if (board[i][columnIndex] !== 0 ) {
          rowToAdd = i - 1 // add to previous Row Index
          if (rowToAdd < 0) {
            return
          }
          break;
        }
      }

      board[rowToAdd][columnIndex] = this.state.nextPlayer;

      this.setState({board});
      this.togglePlayer();
    }

    isGameOver() {
      const board = this.state.board;
      
    }

    render() {
        return (
          <div>
            created a board
            {this.renderBoard()}
          </div>
        );
    }
}

export default Board;
