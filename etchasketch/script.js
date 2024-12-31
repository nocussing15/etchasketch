//container for the 16x16 grid 
const container = document.getElementById("grid-container"); 

//loop to create the 256 squares 
for (let i = 0 ; i<256; i++){
    let newSquare = document.createElement('div');
    newSquare.id ='square' + i;
    newSquare.className = 'squares';
    newSquare.textContent= 'test';
    container.appendChild(newSquare); 
}
