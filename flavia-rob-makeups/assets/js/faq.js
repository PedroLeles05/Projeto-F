const textos = [
    // cursos
    {
        pergunta: "Vocês oferecem cursos para iniciantes ou apenas para quem já é profissional?",
        resposta: "Oferecemos ambas as opções! Temos o curso de Automaquiagem, ideal para quem deseja aprender a se maquiar para o dia a dia, e os cursos de Aperfeiçoamento Profissional, focados em técnicas avançadas de Maquiagem Social e Artística para quem já atua ou deseja entrar no mercado.",
        categoria: "cursos",
    },

    {
        pergunta: "É necessário levar meu próprio kit de maquiagem para as aulas?",
        resposta: "Para os cursos profissionais, recomendamos que o aluno traga seu kit básico para praticar com os produtos que já possui. No entanto, disponibilizamos todos os materiais de uso específico (como tintas artísticas, próteses e selantes profissionais) para uso durante as aulas práticas no estúdio.",
        categoria: "cursos",
    },

    {
        pergunta: "Os cursos são presenciais ou existe a opção de aulas online?",
        resposta: "Atualmente, nossos cursos são exclusivamente presenciais. Acreditamos que, na maquiagem, o acompanhamento detalhado de cada traço e a percepção real das texturas são fundamentais para um aprendizado de alta qualidade, algo que o contato direto facilita muito.",
        categoria: "cursos",
    },

    {
        pergunta: "Recebo certificado de conclusão ao final do curso?",
        resposta: "Sim! Todos os nossos módulos (VIP ou em turma) conferem um certificado de conclusão assinado. O documento detalha a carga horária e as técnicas específicas aprendidas, sendo um excelente diferencial para o seu portfólio e currículo profissional.",
        categoria: "cursos",
    },

    // agendamentos
    {
        pergunta: "Com quanta antecedência devo realizar meu agendamento?",
        resposta: "Para garantir a sua data, o ideal é agendar com pelo menos 15 dias de antecedência. Para eventos maiores, como casamentos ou projetos artísticos complexos, recomendo de 1 a 2 meses.",
        categoria: "agendamentos",
    },

    {
        pergunta: "Como funciona a confirmação da data?",
        resposta: "A data só é garantida após o pagamento de um sinal de 30% do valor do serviço. Esse valor é abatido do total no dia do atendimento.",
        categoria: "agendamentos",
    },

    {
        pergunta: "Posso cancelar ou reagendar meu horário?",
        resposta: "Sim, desde que o aviso seja feito com até 48 horas de antecedência. Em caso de cancelamentos após esse prazo, o valor do sinal não é reembolsado, pois a agenda fica bloqueada para outros clientes.",
        categoria: "agendamentos",
    },

    {
        pergunta: "Vocês atendem aos domingos ou feriados?",
        resposta: "Atendemos sim, porém mediante consulta de disponibilidade e aplicação de uma taxa diferenciada para esses dias específicos.",
        categoria: "agendamentos",
    },

    // atendimentos
    {
        pergunta: "O atendimento é realizado em estúdio ou a domicílio?",
        resposta: "Ofereço as duas opções. O atendimento no estúdio conta com iluminação profissional, enquanto o atendimento a domicílio (home care) oferece mais conforto para você, sendo aplicada uma taxa de deslocamento conforme a região.",
        categoria: "atendimentos",
    },

    {
        pergunta: "Quanto tempo dura uma sessão de maquiagem?",
        resposta: "Uma maquiagem Social leva, em média, de 1h a 1h15. Já as maquiagens Artísticas ou conceituais podem levar de 2h a 4h, dependendo da complexidade dos detalhes.",
        categoria: "atendimentos",
    },

    {
        pergunta: "Preciso preparar minha pele ou levar algum produto?",
        resposta: "Não é necessário levar nada, pois utilizo um kit profissional completo. Recomendo apenas que a pele esteja limpa e hidratada. Caso você tenha alguma alergia específica a algum componente, por favor, me avise antes do início.",
        categoria: "atendimentos",
    },

    {
        pergunta: "Quais marcas de produtos são utilizadas nos atendimentos?",
        resposta: "Utilizo apenas marcas profissionais de alta performance, hipoalergênicas e testadas para longa duração, garantindo que a sua maquiagem resista ao suor, lágrimas e ao tempo do evento.",
        categoria: "atendimentos",
    },

    // serviços
    {
        pergunta: "Qual o tempo médio de duração de uma maquiagem social?",
        resposta: "O atendimento dura, em média, de 60 a 90 minutos, dependendo da complexidade da técnica escolhida e da preparação de pele necessária. Recomendamos chegar com 10 minutos de antecedência.",
        categoria: "servicos",
    },

    {
        pergunta: "Vocês realizam atendimento em domicílio (Home Care)?",
        resposta: "Sim! Realizamos atendimentos externos para sua maior comodidade. Para essa modalidade, é aplicada uma taxa de deslocamento variável de acordo com a sua localização. Consulte a disponibilidade de agenda para a sua data.",
        categoria: "servicos",
    },

    {
        pergunta: "É necessário fazer um teste de maquiagem antes do evento?",
        resposta: "O teste é opcional para maquiagens sociais, mas altamente recomendado para noivas e debutantes. Ele garante que todos os detalhes estejam perfeitos e alinhados com o seu gosto pessoal antes do grande dia.",
        categoria: "servicos",
    },

    {
        pergunta: "Quais produtos são utilizados nos atendimentos?",
        resposta: "Trabalhamos exclusivamente com produtos de alta performance e marcas renomadas (nacionais e importadas). Todos os itens são hipoalergênicos e escolhidos para garantir a máxima durabilidade e acabamento fotográfico à sua maquiagem.",
        categoria: "servicos",
    },

];

const pergunta = document.querySelectorAll('.pergunta');
const resposta = document.querySelectorAll('.resposta');
const btnFiltro = document.querySelectorAll('.btn-filtro');
const linha = document.querySelectorAll('.linha');

let categoria = "cursos";

function filtrarResposta() {
    btnFiltro.forEach((botao) => {
        botao.addEventListener('click', () =>{
            document.querySelector('.btn-ativo')?.classList.remove('btn-ativo', 'border', 'border-white', 'px-4', 'py-2.5', 'text-white/90');
            botao.classList.add('btn-ativo', 'text-white/90', 'border', 'border-white', 'px-4', 'py-2.5');

            categoria = botao.getAttribute("data-categoria");
            const filtredCategoria = textos.filter(t => t.categoria == categoria);
            upDateFaq(filtredCategoria); 
        });
    });
};

function upDateFaq(filtredCategoria) {
    linha.forEach((linha, index) =>{
        pergunta[index].innerText = filtredCategoria[index].pergunta;
        resposta[index].innerText = filtredCategoria[index].resposta;
    });

};

filtrarResposta();