// CLICKING ON THE PLAY BUTTON SHOWS THE GRID WITH THE SQUARES
document.getElementById('play').addEventListener('click', startGame);

// -----------------------------------------------------------------------------------------------
// FUNCTIONS RELATED TO DOM
// -------------------------

// CLICKING ON EACH SQUARE THE ACTIVE CLASS WILL BE ADDED TO THE CLICKED SQUARE
function handleSquareClick() {
    this.classList.add('active');
}

// -----------------------------------------------------------------------------------------------
// FUNCTIONS
// -------------------------

// CREATING THE GRID WITH SQUARES
function startGame() {  
    
    // Select the DOM elements that affect the number of squares
    const difficultLevel = document.getElementById('difficult').value;
    
    // Check the value of the DOM elements to determine the corresponding number of squares
    let numberOfSquares;

    if (difficultLevel === 'easy') {
        numberOfSquares = 100;
    } else if (difficultLevel === 'hard') {
        numberOfSquares = 81;
    } else if (difficultLevel === 'crazy') {
        numberOfSquares = 49;
    }

    // Create an array of numbers in ascending order from 1 to 'numberOfSquares'  
    let generatedNumbers = generateSquaresNumbers(numberOfSquares);

    // For each number in the array, create a cell and append it to the grid container
    const mainGrid = document.getElementById('grid');

    // Refreshing grid
    mainGrid.innerHTML = '';

    for(let i = 0; i < generatedNumbers.length; i++) {

        const thisNumber = generatedNumbers[i];
        const formFactor = Math.sqrt(generatedNumbers.length);

        // Creating a cell
        const newGeneratedSquare = generateGridItem(thisNumber, formFactor);
        
        // Appending the cell to the grid container
        mainGrid.appendChild(newGeneratedSquare);
    }

    // Add click to DOM elements
    const allElements = document.getElementsByClassName('square');    

    for (let i = 0; i < allElements.length; i++) {
        const thisElement = allElements[i];
        thisElement.addEventListener('click', handleSquareClick);
    }
}

// Create a grid element
// number -> number to put in the square
// squareSize -> form factor of the square
function generateGridItem(number, squareSize) {

    // // Creating a element
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    newSquare.style.width = 'calc(100% /' + squareSize + ')';
    newSquare.style.height = 'calc(100% /' + squareSize + ')';

    // Return the element created    
    return newSquare;
}

// Generate an array with 'quantityOfNumbers' numbers in ascending order
// quantityOfNumbers -> how many numbers should it generate
function generateSquaresNumbers (quantityOfNumbers) {

    const numbersArray = [];

    for(let i = 1; i <= quantityOfNumbers; i++) {
        const thisNumber = i;
        numbersArray.push(thisNumber);
    }

    // Return an array from quantityOfNumbers
    return numbersArray;
}

// -----------------------------------------------------------------------------------------------
