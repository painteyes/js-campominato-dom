// Consegna

// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. I numeri nella lista delle bombe non possono essere duplicati.
        // [] Creo un array vuoto che conterrà i numeri nelle quali si trovano le bombe
        // [] Popolo, con un ciclo while, l'array con 16 numeri non duplicati compresi nel range tra 1 e numberOfSquares

// In seguito l'utente clicca su una cella: 
    // [] Aggiungo un eventListener al click della cella

        // se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
            // [] Controllo, con l'if,  se il textContent della cella è incluso nell'array di 16 numeri
            // [] Aggiungo la classe red alla cella
            // [] ?''La partita termina''?

        // altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
            // [] Aggiungo una classe active alla cella 
            // [] Creo un array vuoto per contare i click azzeccati
            // [] Aggiungo il textContent della cella cliccata

// Quando il giocatore  raggiunge il numero massimo possibile di numeri consentiti la partita termina
    // [] Creo una variabile con il numero massimo di tentativi possibili -> let .... = numero massimo di numeri nel range della difficoltà prescelta - il numero delle bombe (16)
    // [] Controllo, con l'if, se la variabile === lunghezza dell'array che conta i click azzeccati
    // [] ?''La partita termina''?

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
    // [] Stampo un messaggio concatenando una stringa all'array.lenght con i click azzeccati

// BONUS:
// [] 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// [] 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste




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
