document.addEventListener('DOMContentLoaded', function() {

    // 1. Inicializar a biblioteca AOS (Animate on Scroll)
    AOS.init({
        duration: 800,       // Duração da animação em milissegundos
        easing: 'ease-in-out', // Curva de aceleração da animação
        once: true,          // Animar elementos apenas uma vez
        offset: 100,         // Ponto de gatilho da animação (em pixels do fundo da tela)
    });

    // 2. Lógica para o botão "Voltar ao Topo"
    const backToTopButton = document.getElementById('back-to-top-btn');

    // Mostra ou esconde o botão com base na posição de rolagem
    window.onscroll = function() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Função para rolar a página suavemente para o topo ao clicar
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. Inicializar a biblioteca Vanilla-Tilt.js nos ícones de habilidades
    // Isso adiciona o efeito de inclinação 3D interativo
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 25,     // Ângulo máximo de inclinação
        speed: 400,  // Velocidade da transição
        glare: true, // Adiciona um efeito de brilho
        "max-glare": 0.5 // Intensidade do brilho
    });

});