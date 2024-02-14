let colorContainer = document.querySelector('.colorContainer');
let colorButton = document.querySelector('button');
let hex = document.querySelector('#hex');
function newColor() {
    let symbols ='0123456789ABCDEF'; //Hexa kod innehåller hela tiden dem här symboler
    let color="#";
    for(let i=0; i<6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)] /* Här så skapar vi en variabel i en for loop
        anledningen till varför for loopen ska loopa bara 6 gånger är på grund av att hexa färger innehåller 6 symboler
        Jag gångade Math.random med 16 eftersom den ska ta en av dem här 16 symbolerna och skapa en random hexa färg
        som innehåller 6 symboler, jag använder Math.floor för att jag ska inte få en decimal nummer.*/  
    }
    document.body.style.background = color; //Detta innebär att färgen på hela webbsidan ska förändras utifrån variabeln color
    hex.innerHTML = color; // För att visa hexa bokstaver enligt färg i webbsidan
}

colorButton.addEventListener('click', newColor); /* Här skapade jag en event listener på knappen så när jag trycker 
så kommer funktionen newColor att kallas*/
