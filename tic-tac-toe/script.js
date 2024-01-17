document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const winnerMessage = document.getElementById('winnerMessage');
    const winnerPlayerSpan = document.getElementById('winnerPlayer');
    const gameBoard = document.getElementById('gameBoard');
    const restartButton = document.getElementById('restartButton');
    let currentPlayer = 'X';
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWinner(board) {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    function checkTie(board) {
        return board.every(cell => cell !== '');
    }

    function handleCellClick(event) {
        const cell = event.target;
        const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

        if (cell.textContent === '' && gameActive) {
            cell.textContent = currentPlayer;
            cell.classList.add('taken');
            board[cellIndex] = currentPlayer;

            const winner = checkWinner(board);
            if (winner) {
                winnerMessage.style.display = 'block';
                winnerPlayerSpan.textContent = winner;
                gameActive = false;
            } else if (checkTie(board)) {
                winnerMessage.style.display = 'block';
                winnerPlayerSpan.textContent = 'Pareggio';
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                if (currentPlayer === 'O') {
                    // Il computer fa la sua mossa
                    computerMove();
                }
            }
        }
    }

    function computerMove() {
        // Implementa l'algoritmo Minimax semplificato per la mossa del computer
        let bestScore = -Infinity;
        let move;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                let score = minimax(board, 0, false);
                board[i] = '';
                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }

        if (move !== undefined) {
            cells[move].textContent = 'O';
            cells[move].classList.add('taken');
            board[move] = 'O';

            const winner = checkWinner(board);
            if (winner) {
                winnerMessage.style.display = 'block';
                winnerPlayerSpan.textContent = winner;
                gameActive = false;
            } else if (checkTie(board)) {
                winnerMessage.style.display = 'block';
                winnerPlayerSpan.textContent = 'Pareggio';
                gameActive = false;
            } else {
                currentPlayer = 'X';
            }
        }
    }

    // Inizializza la griglia di gioco e gli event listener
    const board = Array(9).fill('');
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    restartButton.addEventListener('click', () => {
        // Azzeramento dell'array board
        board.fill('');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('taken');
        });
        winnerMessage.style.display = 'none';
        currentPlayer = 'X';
        gameActive = true;
    });

    
    });

