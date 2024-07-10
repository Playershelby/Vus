 // Decrement index and currentIndex movie

//Section sobre



//secão noticia

var button = document.getElementById('read_button');

button.addEventListener('click', function() {
    var card = document.querySelector('.box-container');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = 'Ler Menos';
    }

    button.textContent = 'Ler Mais';
});

var button = document.getElementById('read_button');