export function initFeedbackMobile(){
    const feedback = [
        {
            nome: "circo",
            service: "Neon",
            text: "Um texto qualquer somente para teste",
            img: "./assets/images/Circo.jpg"
        },
        
        {
            nome: "about",
            service: "Noivas",
            text: "Trabalho impecável e muito carinho em cada detalhe do meu grande dia.",
            img: "./assets/images/about.png"
        },

        {
            nome: "galeria",
            service: "Noivas",
            text: "Trabalho impecável e muito carinho em cada detalhe do meu grande dia.",
            img: "./assets/images/galeria.jpg"
        },

        {
            nome: "flavia",
            service: "Noivas",
            text: "Trabalho impecável e muito carinho em cada detalhe do meu grande dia.",
            img: "./assets/images/flavia.png"
        },

        {
            nome: "",
            service: "Noivas",
            text: "Trabalho impecável e muito carinho em cada detalhe do meu grande dia.",
            img: "./assets/images/MQM.jpg"
        },

        {
            nome: "espantalho",
            service: "Noivas",
            text: "Trabalho impecável e muito carinho em cada detalhe do meu grande dia.",
            img: "./assets/images/espantalho.jpg"
        }
    ];

    let currentIndex = 0;
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    function mUpdateUI(currentIndex) {
        const item = feedback[currentIndex];

        // update-textos
        document.getElementById('mobile-texto-feedback').innerText = item.text;
        document.getElementById('mobile-nome').innerText = item.nome;
        document.getElementById('mobile-servico').innerText = item.service;

        // update-image
        document.getElementById('main-image').src = item.img;
    }

    function updateCarrossel(direction) {
        currentIndex += direction;

        if(currentIndex > feedback.length - 1) mUpdateUI(currentIndex = 0);
        else if (currentIndex < 0) {mUpdateUI(currentIndex = feedback.length - 1)}else mUpdateUI(currentIndex);
    }

    btnNext?.addEventListener('click', () => updateCarrossel(1));
    btnPrev?.addEventListener('click', () => updateCarrossel(-1));

    mUpdateUI(currentIndex);
}