    export function initDkFeedback() {
        const feedback = [
            {
                nome: "circo",
                service: "serviço",
                text: "Um texto qualquer somente para teste",
                img: "./assets/images/Circo.jpg"
            },
            
            {
                nome: "Feedback 2",
                service: "serviço",
                text: "Trabalho impecável e muito carinho em cada detalhe do meu grande dia.",
                img: "./assets/images/neon.jpg"
            },

            {
                nome: "Feedback 3",
                service: "serviço",
                text: "Trabalho impecável e muito carinho em cada detalhe do meu grande dia.",
                img: "./assets/images/MQM.jpg"
            },

            {
                nome: "Feedback 4",
                service: "serviço",
                text: "Trabalho impecável e muito carinho em cada detalhe do meu grande dia.",
                img: "./assets/images/flavia.png"
            },

            {
                nome: "Feedback 5",
                service: "serviço",
                text: "Trabalho impecável e muito carinho em cada detalhe do meu grande dia.",
                img: "./assets/images/about.png"
            },

            {
                nome: "espantalho",
                service: "serviço",
                text: "Trabalho impecável e muito carinho em cada detalhe do meu grande dia.",
                img: "./assets/images/espantalho.jpg"
            }
        ];

        let mainIndex = 0;
        let cards = [1, 2, 3, 4, 5];

        function updateUI() {
            // update-main
            const mainItem = feedback[mainIndex];

            document.getElementById('feedback').innerText = mainItem.text;
            document.getElementById('nome').innerText = mainItem.nome;
            document.getElementById('servico').innerText = mainItem.service;
            document.getElementById('main-image').src = mainItem.img;

            // update-cards
            cards.forEach((arrarIndex, i) =>{
                const cardItem = document.getElementById(`image-${i + 1}`);
                if(cardItem){
                    cardItem.src = feedback[arrarIndex].img;
                    cardItem.style.backgroundSize = 'cover';
                }
            });

        }

        cards.forEach((_, i) =>{
            const conteiner = document.getElementById(`ct-${i + 1}`);
            if(conteiner){
                conteiner.addEventListener('click', () =>{
                    const oldMain = mainIndex;
                    mainIndex = cards[i];
                    cards[i] = oldMain;

                    updateUI();
                })
            }
        })
        updateUI();
    }