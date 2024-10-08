document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi recebida.`);
    

    this.reset();
});

// let slideIndex = 0;

// function mudarSlide(n) {
//     const slides = document.querySelectorAll('.projeto');
//     slideIndex += n;

//     if (slideIndex < 0) {
//         slideIndex = slides.length - 1;
//     }
//     if (slideIndex >= slides.length) {
//         slideIndex = 0; 
//     }

//     const container = document.querySelector('.projetos-container');
//     container.style.transform = `translateX(-${slideIndex * 100}%)`;
// }

// mudarSlide(0);
