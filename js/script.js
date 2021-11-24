// 
// ANALISI
// 

// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// Il computer deve generare le bombe: 16 numeri casuali nel range tra 1 e 'numberOfSquares'. Inoltre i numeri nella lista non possono essere duplicati.
        // [] Creo un array vuoto che conterrà i numeri-bombe
        // [] Popolo, con un ciclo while, l'array con 16 numeri non duplicati compresi nel range tra 1 e 'numberOfSquares'

// [] Calcolo il numero massimo di tentativi possibili -> ((numberOfSquares) - (la lunghezza dell'array che contiene i numeri-bombe))

// [] Creo un array vuoto per contare i click azzeccati

// [] Seleziono le singole celle e aggiungo un evento al click

// L'utente clicca su una cella: 
         
    // La partita termina 
                
            // SE
                // il numero è incluso nell'array che contiene i numeri-bombe
                    // [] Controllo, con l'if, se l'array include il textContent della cella
                
                    // la cella si colora di rosso
                        // [] Aggiungo la classe red alla cella
                
                    // la partita termina
                        // [] 

            // SE 
                // il giocatore raggiunge il numero massimo possibile di tentativi consentiti
                    // [] Controllo, con l'if, se ((numberOfSquares) - (la lunghezza dell'array che contiene i numeri nelle quali si trovano le bombe)) === (lunghezza dell'array che conta i click azzeccati)
                        
                        // la partita termina   
                            // [] 

        // ALTRIMENTI
            // SE
                // il numero non è già incluso nell'array che conta i click azzeccati
                    // [] Controllo, con l'if, se l'array include il textContent della cella

                        // la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle
                            // [] Aggiungo una classe active alla cella 
                            // [] Aggiungo il textContent della cella all'array che conta i click azzeccati
                
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
    // [] Stampo un messaggio concatenando una stringa all'array.lenght che conta i click azzeccati

// BONUS:
// [] 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// [] 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

// 
// LOGICA
// 

// CLICKING ON THE PLAY BUTTON SHOWS THE GRID WITH THE SQUARES
document.getElementById('play').addEventListener('click', startGame);

// ------------------------
// FUNCTIONS RELATED TO DOM
// ------------------------

// CLICKING ON EACH SQUARE THE ACTIVE CLASS WILL BE ADDED TO THE CLICKED SQUARE
function handleSquareClick() {
    this.classList.add('active');
}

// ---------
// FUNCTIONS
// ---------

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
