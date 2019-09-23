const texts = ['Engineer Developer Front-end'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if (count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 300);
}());


const porfolio = document.getElementById("item-porfolio");
// Agregar listener
porfolio.addEventListener("click", function(evento){
	var porfilioContent = document.getElementById("porfolio-content");
    porfilioContent.classList.add('show');
});

const studies = document.getElementById("item-studies");
// Agregar listener
studies.addEventListener("click", function(evento){
	var porfilioContent = document.getElementById("studies-content");
    porfilioContent.classList.add('show');
});