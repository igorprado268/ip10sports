 // Exemplo de função temporizadora com setTimeout
//  function mostrarMensagemDeBoasVindas() {
//     setTimeout(function() {
//         alert('Bem-vindo à IP10sports! Aproveite nossas ofertas exclusivas.');
//     }, 3000); // 3 segundos de atraso
// }

// Chamar as funções ao carregar a página
window.onload = function() {
    // mostrarMensagemDeBoasVindas();
    // destacarOfertas();
    formEnviado();
    
}


function formEnviado() {
    const botao = document.getElementById('botao');
    const form = document.querySelector('form'); 

    botao.addEventListener('click', function (event) {
        event.preventDefault(); 

        let email = document.getElementById('email').value.trim();
        let senha = document.getElementById('password').value.trim();

        if (email === '' || senha === '') {
            alert('Por favor, insira valores válidos para email e senha.');
        } else {
            document.getElementById('div-1').innerHTML = '<div class="loading"></div>'; 

            setTimeout(() => { 
                document.getElementById('div-1').innerHTML = '<div> <h1>CADASTRO CONCLUÍDO</h1> <br> <a href="index.html" >Voltar para o início</a> </div>'; // Atualiza a mensagem
            }, 1000);

        }
    });

    form.addEventListener('keydown', function (event) {
     
        if (event.key === 'Enter') {
            event.preventDefault(); 
            button.click();
        }
    });
}

function trocarImgGaleria() {
    const imgPrincipal = document.getElementById('imgPrincipal');
    const thumbnails = document.querySelectorAll('.galeriaThumbnails img');

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function (event) {
            event.preventDefault();
            imgPrincipal.src = this.src;
        });
    });
}

function menuHamburguer() {
    const burguer = document.getElementById('menuBurguer');
    const menu = document.getElementById('menu');

    burguer.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
}

