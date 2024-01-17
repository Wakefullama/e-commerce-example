// Aspetta che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutte le celle del gioco
    const cells = document.querySelectorAll('.cell');
    // Elementi per mostrare il messaggio di vittoria
    const winnerMessage = document.getElementById('winnerMessage');
    const winnerPlayerSpan = document.getElementById('winnerPlayer');
    // Imposta il giocatore corrente a 'X'
    let currentPlayer = 'X';

    // Combinazioni vincenti per il gioco Tic Tac Toe
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

    // Funzione per controllare se c'è una combinazione vincente
    function checkWin() {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return cells[index].textContent.trim() === currentPlayer;
            });
        });
    }

//Obiettivo della Funzione: La funzione checkWin controlla se il giocatore corrente (currentPlayer, che può essere 'X' o 'O') ha una combinazione vincente sul tabellone.
//Array winningCombinations: All'inizio della funzione, abbiamo un array di combinazioni vincenti. Ogni combinazione vincente è un array di tre indici che rappresentano le celle nel tabellone di Tic Tac Toe. Per esempio, [0, 1, 2] rappresenta la prima riga del tabellone, [0, 3, 6] rappresenta la prima colonna, e così via.
//Metodo some: Utilizziamo il metodo some su winningCombinations. Il metodo some verifica se almeno una delle combinazioni nell'array soddisfa la condizione data (in questo caso, una combinazione vincente). Se anche solo una combinazione soddisfa la condizione, some restituisce true, altrimenti false.
//Verifica di Ogni Combinazione: Per ogni combinazione in winningCombinations, usiamo il metodo every per verificare se tutte le celle in quella combinazione specifica sono occupate dallo stesso giocatore (currentPlayer).
//Il metodo every restituisce true se tutti gli elementi nell'array soddisfano la condizione fornita.
//Nella condizione, cells[index].textContent.trim() === currentPlayer, controlliamo se il contenuto di ogni cella (senza spazi vuoti, quindi usiamo trim()) corrisponde al giocatore corrente.
//Risultato: Se almeno una delle combinazioni in winningCombinations ha tutte e tre le celle occupate dallo stesso giocatore (tutte 'X' o tutte 'O'), la funzione checkWin restituisce true, indicando che il giocatore corrente ha vinto. Altrimenti, se nessuna combinazione mostra una vittoria, restituisce false.

    // Gestisce il clic su una cella
    function handleCellClick() {
        // Controlla se la cella è vuota
        if (this.textContent.trim() === '') {
            // Imposta il segno del giocatore corrente
            this.textContent = currentPlayer;
            this.classList.add('taken');

            // Controlla se il giocatore corrente ha vinto
            if (checkWin()) {
                // Mostra il messaggio di vittoria
                winnerMessage.style.display = 'block';
                winnerPlayerSpan.textContent = currentPlayer;
                // Rimuove l'event listener dalle celle per prevenire ulteriori mosse
                cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
            } else {
                // Cambia il giocatore corrente
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    // Aggiunge l'event listener a ogni cella
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    // Gestisce il clic sul pulsante di restart
    document.getElementById('restartButton').addEventListener('click', () => {
        // Ripulisce le celle e nasconde il messaggio di vittoria
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('taken');
        });
        winnerMessage.style.display = 'none';
        // Resetta il giocatore a 'X' e riabilita le mosse
        currentPlayer = 'X';
        cells.forEach(cell => {
            cell.addEventListener('click', handleCellClick);
        });
    });
});
