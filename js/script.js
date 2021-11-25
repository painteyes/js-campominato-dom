// CONSEGNA

// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// --------
// ANALISI
// --------
 
// VARIABLES //

// Il computer deve generare le bombe: 16 numeri casuali nel range tra 1 e 'numberOfSquares'. Inoltre i numeri nella lista non possono essere duplicati.
        // [] Creo un array vuoto che conterrà i numeri-bombe
        // [] Popolo, con un ciclo while, l'array con 16 numeri non duplicati compresi nel range tra 1 e 'numberOfSquares'

// [] Calcolo il numero massimo di tentativi possibili -> ((numberOfSquares) - (la lunghezza dell'array che contiene i numeri-bombe))

// [] Creo un array vuoto che conterrà i numeri-non-bombe azzeccati dall'utente 

// FUNCTIONS RELATED TO THE DOM //

// [x] Creo, con un ciclo for, le celle
// [] Seleziono le singole celle e aggiungo un evento al click

// FUNCTIONS //

// Creo una funzione per la partita termina
    // [] Legge l'argomento per sapere se il giocatore ha vinto o perso

    // SE

        // l'utente ha vinto - cioè l'argomento === "win"
            // [] Stampa un messaggio: "Hai vinto"

        // l'utente ha perso - cioè l'argomento === "lose"
            // [] Stampa un messaggio: "Hai perso, hai azzeccato (la lunghezza dell'array che contiene i numeri-bombe) tentativi"
    
    // [] l'utente non può continuare a cliccare sulle altre celle

// L'utente fa click su una cella: 

    // Leggo il numero della cella

        // SE

                // l'utente fa click su un numero-bomba - cioè il numero della cella è incluso nell'array che contiene i numeri-bombe
                    // [] Controllo, con l'if, se l'array include il textContent della cella
                    
                    // la cella si colora di rosso
                        // [] Aggiungo la classe red alla cella
                      
                // l'utente raggiunge il numero massimo possibile di tentativi consentiti
                    // [] Controllo, con l'if, se ((numberOfSquares) - (la lunghezza dell'array che contiene i numeri-bombe)) >= (lunghezza dell'array che contiene i numeri-non-bombe)
                             
            // La partita termina - cioè viene invocata la funzione per la partita termina
                                     
        // ALTRIMENTI SE

                // l'utente fa click su un numero-non-bomba 
                    // [] Controllo, con l'if, se l'array include il textContent della cella

                    // SE

                            // il numero non è stato indovinato in precedenza - cioè che non è già incluso nell'array che contiene i numeri-non-bombe
                                // [] Controllo, con l'if, se l'array include il textContent della cella

                        // la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle
                            // [] Aggiungo una classe active alla cella 
                            // [] Aggiungo il textContent della cella all'array che che contiene i numeri-non-bombe
                
// Al termine della partita comunico il punteggio che è corrisponderà al numero di volte che l’utente ha cliccato su una cella che non era una bomba
    // [] Stampo un messaggio concatenando una stringa + la lunghezza dell'array che che contiene i numeri-bombe

// BONUS:
// [] 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// [] 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

// --------
// LOGICA 
// --------

// CLICKING ON THE PLAY BUTTON SHOWS THE GRID WITH THE SQUARES
document.getElementById('play').addEventListener('click', startGame);

// ---------
// FUNCTIONS 
// ---------

// CLICKING ON EACH SQUARE THE ACTIVE CLASS WILL BE ADDED TO THE CLICKED SQUARE
function handleSquareClick() {
    this.classList.add('active');
}

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

// CREATE A GRID ELEMENT 
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

// GENERATE AN ARRAY with 'quantityOfNumbers' numbers in ascending order
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
