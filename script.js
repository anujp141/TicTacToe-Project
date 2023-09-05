let squares = Array(9).fill(null);
let xIsNext = true; 
let winner = null; 

// Function to handle square click events
function handleClick(index) {
    if (winner || squares[index]) return; // Ignore if the game is won or the square is already filled
    squares[index] = xIsNext ? 'X' : 'O'; // Set the square to X or O
    xIsNext = !xIsNext; // Toggle the current player

    // Check for a winner or a draw
    winner = calculateWinner();
    if (winner) {
        document.getElementById('game-status').textContent = `Winner: ${winner}`;
    } else if (!squares.includes(null)) {
        document.getElementById('game-status').textContent = "It's a draw!";
    } else {
        document.getElementById('game-status').textContent = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    // Update the square's text content
    document.getElementsByClassName('square')[index].textContent = squares[index];
}

// Function to check for a winner
function calculateWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // Return the winning player (X or O)
        }
    }

    return null; // No winner yet
}

// Attach click event handlers to each square
const squareElements = document.getElementsByClassName('square');
for (let i = 0; i < squareElements.length; i++) {
    squareElements[i].addEventListener('click', () => handleClick(i));
}

// Reset button (optional)
document.getElementById('reset-button').addEventListener('click', () => {
    squares = Array(9).fill(null);
    xIsNext = true;
    winner = null;
    document.getElementById('game-status').textContent = `Next player: X`;
    for (const square of squareElements) {
        square.textContent = '';
    }
});
