 // Exemplo de função temporizadora com setTimeout
//  function mostrarMensagemDeBoasVindas() {
//     setTimeout(function() {
//         alert('Bem-vindo à IP10sports! Aproveite nossas ofertas exclusivas.');
//     }, 3000); // 3 segundos de atraso
// }

// // Chamar as funções ao carregar a página
// window.onload = function() {
//     // mostrarMensagemDeBoasVindas();
//     // destacarOfertas();
//     formEnviado();
    
// }


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

function bannerCarrossel() {
    const imgsMobileTablet = [
      "imgs/banners/banner cllr/vista seu manto-cllr.png",
      "imgs/banners/banner cllr/torc-jog-cllr.png",
      "imgs/banners/banner cllr/nba-cllr.png"
    ];
  
    const imgsDesktop = [
      "imgs/banners/banner pc/vista já seu manto.png",
      "imgs/banners/banner pc/torc-jog.png",
      "imgs/banners/banner pc/nba.png"
    ];
  
    // Elementos
    const banner = document.getElementById("banner-principal");
    const setaEsquerda = document.getElementById("seta-esquerda");
    const setaDireita  = document.getElementById("seta-direita");
    if (!banner || !setaEsquerda || !setaDireita) return;
  
    // Breakpoint: mobile+tablet até 1024px
    const mql = window.matchMedia("(max-width: 1024px)");
  
    // Estado
    let imagens = mql.matches ? imgsMobileTablet : imgsDesktop;
    let indiceAtual = 0;
  
    function mostrarImagem() {
      banner.src = imagens[indiceAtual];
    }
  
    function selecionarConjuntoSePreciso() {
      const novoConjunto = mql.matches ? imgsMobileTablet : imgsDesktop;
      if (novoConjunto !== imagens) {
        imagens = novoConjunto;
        // mantém o índice dentro do tamanho do novo array
        indiceAtual = indiceAtual % imagens.length;
        mostrarImagem();
      }
    }
  
    // Navegação
    setaDireita.addEventListener("click", () => {
      indiceAtual = (indiceAtual + 1) % imagens.length;
      mostrarImagem();
    });
  
    setaEsquerda.addEventListener("click", () => {
      indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
      mostrarImagem();
    });
  
    // Atualiza quando o breakpoint muda (resize, orientação, zoom, etc.)
    mql.addEventListener("change", selecionarConjuntoSePreciso);
    window.addEventListener("resize", selecionarConjuntoSePreciso);
  
    // Primeira renderização
    mostrarImagem();
  }

function msgAddCarrinho(){
    const addCarrinho = document.getElementById('addCarrinho');
    addCarrinho.addEventListener('click', function(event){
        setTimeout(function() {
            alert('Produto adicionado ao carrinho com sucesso!');
        }, 1000); // 3 segundos de atraso
    });
}
  



