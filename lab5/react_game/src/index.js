import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {

}

class Board extends React.Component{

}

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }
    

    handleClick(i) {

    }

    jumpTo(step) {

    }

    render() {
        const history = this.state.history;
        const current = history(this.state.stepNumber);
        const winner = calculateWinner(current.squares);

        const moves = history.map((step,move) => {
            const desc = move ?
                '回到 #' + move + ' 步':
                '遊戲開始';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>(desc)</button>
                </li>
            );
        });
        let status;
        if (winner) {
            status = "贏家是 : " + winner;
        } else {
            status = "下一位玩家 : " + (this.state.xIsNext ? "X" : "O");
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares = {current.squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            <div/>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {

}