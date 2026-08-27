// Analytics — IDs configurados via variáveis de ambiente (.env), para não expor/versionar
// o ID de produção direto no código. Ver .env.example na raiz do projeto.
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? "";
export const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID ?? "";

export const SITE = {
  name: "Dra. Elaine Morch",
  tagline: "Ginecologista em Sorocaba",
  city: "Sorocaba, SP",
  whatsapp: "15998338258",
  social: {
    facebook: "https://www.facebook.com/share/1EgvGrdBrC/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/dra.elainemorch/",
    youtube: "https://www.youtube.com/@dra.elainemorch",
  },
};

export type FaqItem = { q: string; a: string };

export type Treatment = {
  slug: string;
  categorySlug: "estetica-intima" | "saude-hormonal";
  order: number;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  cardDescription: string;
  image: string;
  indicatedFor?: string[];
  aboutIntro?: string[];
  symptomGroups?: { title: string; items: string[] }[];
  steps?: { title: string; body: string }[];
  approach?: string[];
  results?: string[];
  faq: FaqItem[];
};

export type Category = {
  slug: "estetica-intima" | "saude-hormonal";
  index: number;
  title: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  lead: string;
  homeCardDescription: string;
  homeCardCta: string;
  image: string;
  faq: FaqItem[];
};

import heroHomeImg from "@/assets/hero-home.jpg";
import heroEsteticaImg from "@/assets/hero-estetica.jpg";
import heroSaudeImg from "@/assets/hero-saude.jpg";
import sobreDraElaineImg from "@/assets/sobre-dra-elaine.jpg";
import laserImg from "@/assets/laser-intimo.jpg";
import ninfoplastiaImg from "@/assets/ninfoplastia.jpg";
import radiofrequenciaImg from "@/assets/radiofrequencia.jpg";
import clareamentoImg from "@/assets/clareamento.jpg";
import preenchimentoImg from "@/assets/preenchimento.jpg";
import menopausaImg from "@/assets/menopausa.jpg";
import reposicaoHormonalImg from "@/assets/reposicao-hormonal.jpg";
import hormoniosBioidenticosImg from "@/assets/hormonios-bioidenticos.jpg";
import implantesHormonaisImg from "@/assets/implantes-hormonais.jpg";
import incontinenciaUrinariaImg from "@/assets/incontinencia-urinaria.jpg";

export const CATEGORIES: Category[] = [
  {
    slug: "estetica-intima",
    index: 1,
    title: "Estética Íntima",
    navLabel: "Estética Íntima",
    metaTitle: "Estética Íntima em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Conheça os tratamentos de estética íntima da Dra. Elaine Morch em Sorocaba: laser, ninfoplastia, radiofrequência, clareamento e preenchimento.",
    eyebrow: "Estética Íntima",
    heroTitle: "Cuidado íntimo com ciência, delicadeza e respeito",
    lead: "Tratamentos estéticos para a região íntima, pensados para o seu conforto físico e emocional — sem julgamentos, sem pressa, com toda a técnica que você merece.",
    homeCardDescription:
      "Tratamentos para conforto físico, autoestima e bem-estar da região íntima.",
    homeCardCta: "Explorar tratamentos",
    image: heroEsteticaImg,
    faq: [
      {
        q: "Os tratamentos de estética íntima doem?",
        a: "A maioria dos procedimentos não cirúrgicos (laser, radiofrequência, preenchimento) é bem tolerada, com uso de anestesia tópica quando necessário. A ninfoplastia, por ser cirúrgica, é realizada com anestesia local.",
      },
      {
        q: "Qual tratamento é ideal para mim?",
        a: "Depende dos seus sintomas, objetivos e anatomia. Na consulta inicial, a Dra. Elaine avalia seu caso e indica a opção — ou combinação de opções — mais adequada.",
      },
      {
        q: "Os procedimentos têm tempo de recuperação?",
        a: "Os tratamentos não cirúrgicos (laser, radiofrequência, preenchimento, clareamento) permitem retorno imediato às atividades. A ninfoplastia, por ser cirúrgica, exige um período curto de repouso.",
      },
    ],
  },
  {
    slug: "saude-hormonal",
    index: 2,
    title: "Saúde Hormonal",
    navLabel: "Saúde Hormonal",
    metaTitle: "Saúde Hormonal em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Acompanhamento hormonal especializado em Sorocaba: menopausa, reposição hormonal, hormônios bioidenticos, implantes e incontinência urinária.",
    eyebrow: "Saúde Hormonal",
    heroTitle: "Viva a menopausa e o climatério com equilíbrio",
    lead: "Acompanhamento hormonal especializado para cada fase da vida — do climatério à menopausa — com tratamento personalizado e escuta de verdade.",
    homeCardDescription: "Acompanhamento completo para climatério, menopausa e qualidade de vida.",
    homeCardCta: "Explorar cuidados",
    image: heroSaudeImg,
    faq: [
      {
        q: "Quando devo procurar acompanhamento hormonal?",
        a: "O ideal é iniciar o acompanhamento ginecológico especializado a partir dos 40 anos, mesmo antes do início dos sintomas. Quanto antes o cuidado começar, melhores tendem a ser os resultados.",
      },
      {
        q: "Toda mulher precisa de reposição hormonal?",
        a: "Não necessariamente — depende dos sintomas, histórico de saúde e preferências pessoais. A avaliação individual é o que define a melhor conduta para cada paciente.",
      },
      {
        q: "Qual a diferença entre os tipos de tratamento hormonal oferecidos?",
        a: "A reposição hormonal tradicional, os hormônios bioidenticos e os implantes (pellets) são formas diferentes de repor os mesmos hormônios, com vantagens distintas em conveniência, personalização e tolerância. A Dra. Elaine ajuda você a escolher a melhor opção.",
      },
    ],
  },
];

export const TREATMENTS: Treatment[] = [
  {
    slug: "laser-intimo",
    categorySlug: "estetica-intima",
    order: 1,
    navLabel: "Laser Íntimo",
    title: "Laser Íntimo: conforto, firmeza e bem-estar de dentro para fora",
    metaTitle: "Laser Íntimo em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Laser íntimo em Sorocaba com a Dra. Elaine Morch: tratamento não cirúrgico para ressecamento, firmeza e conforto vaginal.",
    eyebrow: "Estética Íntima",
    lead: "Um tratamento não cirúrgico que rejuvenesce, hidrata e fortalece os tecidos da região vaginal — com resultados reais e tempo de recuperação mínimo.",
    cardDescription:
      "Rejuvenescimento não cirúrgico que hidrata, firma e melhora o conforto vaginal.",
    image: laserImg,
    indicatedFor: [
      "Você sente ressecamento ou desconforto vaginal, especialmente após a menopausa ou amamentação",
      "Percebe perda de firmeza ou elasticidade nos tecidos íntimos",
      "Tem relações sexuais dolorosas (dispareunia)",
      "Experimenta perda leve de urina ao rir, tossir ou praticar exercícios",
      "Quer melhorar a autoestima e o conforto íntimo sem cirurgia",
    ],
    aboutIntro: [
      "O laser emite um feixe de luz que é atraído pela água, gerando aquecimento e destruição de células velhas superficialmente, o que estimula os fibroblastos a produzirem colágeno. É muito utilizado no canal vaginal para tratamento de flacidez e frouxidão, além de incontinência urinária leve a moderada.",
      "A radiofrequência age de forma mais profunda, emitindo uma corrente elétrica que gera calor e quebra partes do colágeno, estimulando os fibroblastos para regeneração do colágeno sem destruição de células na superfície dos tecidos. É usada no canal vaginal e na vulva, tratando flacidez, frouxidão e incontinência urinária leve.",
      "As duas tecnologias são indolores na aplicação.",
    ],
    steps: [
      { title: "Consulta inicial", body: "Avaliação individualizada com a Dra. Elaine." },
      {
        title: "Aplicação do laser",
        body: "Sessão rápida, de 20 a 30 minutos, realizada no consultório.",
      },
      { title: "Sem tempo de parada", body: "Você volta às atividades normais logo após." },
      { title: "Protocolo de sessões", body: "Geralmente 3 sessões, com intervalo de 30 dias." },
    ],
    results: [
      "Melhora do ressecamento vaginal já nas primeiras semanas",
      "Mais firmeza e elasticidade nos tecidos",
      "Redução do desconforto durante as relações sexuais",
      "Melhora discreta da incontinência urinária leve",
      "Mais conforto e confiança no dia a dia",
    ],
    faq: [
      {
        q: "O laser íntimo dói?",
        a: "Não. O procedimento é bem tolerado e pode causar apenas uma leve sensação de calor durante a aplicação. Não é necessário anestesia.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "O protocolo padrão é de 3 sessões, com intervalo de 30 dias entre cada uma. A Dra. Elaine avaliará o seu caso individualmente.",
      },
      {
        q: "Em quanto tempo vejo resultado?",
        a: "Muitas pacientes relatam melhoras já após a primeira sessão, com resultados progressivos ao longo do protocolo.",
      },
      {
        q: "O laser íntimo é seguro?",
        a: "Sim. É uma tecnologia consagrada, aprovada e utilizada mundialmente. A segurança começa na avaliação adequada — por isso a consulta inicial é fundamental.",
      },
    ],
  },
  {
    slug: "ninfoplastia",
    categorySlug: "estetica-intima",
    order: 2,
    navLabel: "Ninfoplastia",
    title: "Ninfoplastia: redescobrindo o conforto e a confiança no seu corpo",
    metaTitle: "Ninfoplastia em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Ninfoplastia em Sorocaba com a Dra. Elaine Morch: procedimento delicado para conforto, simetria e autoestima.",
    eyebrow: "Estética Íntima",
    lead: "Um procedimento cirúrgico delicado que reduz e harmoniza os pequenos lábios vaginais, aliviando desconfortos físicos e devolvendo autoestima.",
    cardDescription: "Procedimento cirúrgico delicado para conforto físico e harmonia estética.",
    image: ninfoplastiaImg,
    indicatedFor: [
      "Você sente desconforto físico ao praticar exercícios, usar roupas de banho ou manter relações sexuais",
      "Os pequenos lábios são assimétricos ou proeminentes de forma que te incomoda",
      "Sente constrangimento ou insegurança com a estética da região íntima",
      "Tem higiene íntima dificultada pelo tamanho dos pequenos lábios",
    ],
    aboutIntro: [
      "A ninfoplastia é uma cirurgia pequena, realizada com anestesia local, que remove o excesso de tecido dos pequenos lábios e harmoniza a região. O procedimento é rápido e pode ser feito no consultório.",
    ],
    steps: [
      {
        title: "Consulta",
        body: "Avaliação clínica detalhada e escuta das suas queixas e expectativas.",
      },
      { title: "Cirurgia", body: "Realizada com anestesia local, dura cerca de 1 hora." },
      {
        title: "Recuperação",
        body: "Repouso de 3 a 5 dias; retorno às atividades normais em cerca de 2 semanas.",
      },
      { title: "Resultado definitivo", body: "Visível a partir de 4 a 6 semanas." },
    ],
    results: [
      "Eliminação do desconforto físico no dia a dia",
      "Melhora estética e simetria da região íntima",
      "Mais confiança e bem-estar na vida íntima",
      "Resultado natural e harmônico",
    ],
    faq: [
      {
        q: "A ninfoplastia deixa cicatriz?",
        a: "As suturas são realizadas com fio absorvível e ficam em locais discretos. Com o tempo, as marcas ficam praticamente imperceptíveis.",
      },
      {
        q: "Quanto tempo leva a recuperação?",
        a: "A maioria das pacientes retorna às atividades leves em 3 a 5 dias e às atividades normais em cerca de 2 semanas. Atividades físicas e relações sexuais devem ser retomadas após orientação médica.",
      },
      {
        q: "Qual é a idade mínima para fazer a ninfoplastia?",
        a: "A partir dos 18 anos, após o desenvolvimento completo. Em menores de idade com indicação médica, é necessário autorização dos responsáveis.",
      },
    ],
  },
  {
    slug: "radiofrequencia-intima",
    categorySlug: "estetica-intima",
    order: 3,
    navLabel: "Radiofrequência Íntima",
    title: "Radiofrequência Íntima: rejuvenescimento sem cirurgia, com resultados reais",
    metaTitle: "Radiofrequência Íntima em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Radiofrequência íntima em Sorocaba: rejuvenescimento sem cirurgia com a Dra. Elaine Morch.",
    eyebrow: "Estética Íntima",
    lead: "Tecnologia de ponta que estimula o colágeno, melhora a firmeza e combate o ressecamento vaginal — de forma segura, confortável e sem tempo de parada.",
    cardDescription: "Estímulo de colágeno para firmeza e rejuvenescimento, sem cirurgia.",
    image: radiofrequenciaImg,
    indicatedFor: [
      "Sentem flacidez ou perda de elasticidade na região íntima",
      "Têm ressecamento vaginal causado por menopausa, pós-parto ou mudanças hormonais",
      "Querem melhorar o conforto nas relações sexuais",
      "Buscam um tratamento não invasivo para a região externa (vulva e lábios maiores)",
      "Desejam um complemento a outros tratamentos estéticos íntimos",
    ],
    aboutIntro: [
      "A radiofrequência emite calor controlado nos tecidos da região íntima, estimulando a produção de colágeno e elastina. O resultado é uma pele mais firme, hidratada e revitalizada — tanto externamente quanto no canal vaginal.",
    ],
    steps: [
      { title: "Consulta inicial", body: "Planejamento do protocolo." },
      { title: "Sessão de 30 a 40 minutos", body: "No consultório — sem dor, sem anestesia." },
      {
        title: "Protocolo de 3 a 5 sessões mensais",
        body: "Conforme avaliação individual.",
      },
      { title: "Retorno imediato às atividades", body: "Sem restrições." },
    ],
    results: [
      "Melhora da firmeza e elasticidade dos tecidos",
      "Redução do ressecamento vaginal",
      "Mais conforto e prazer nas relações sexuais",
      "Rejuvenescimento da aparência da região externa",
      "Resultados progressivos e duradouros",
    ],
    faq: [
      {
        q: "A radiofrequência íntima dói?",
        a: "Não. A sensação durante o procedimento é de calor agradável. A maioria das pacientes relata grande conforto ao longo da sessão.",
      },
      {
        q: "Qual a diferença entre radiofrequência e laser íntimo?",
        a: "O laser emite um feixe de luz atraído pela água, gerando aquecimento superficial e estimulando a produção de colágeno — muito usado para flacidez e incontinência leve a moderada. A radiofrequência age de forma mais profunda, emitindo corrente elétrica que gera calor e estimula a regeneração do colágeno sem destruir a superfície dos tecidos. As duas tecnologias são indolores.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "Em geral, de 3 a 5 sessões com intervalo de 30 dias. A frequência de manutenção varia por paciente.",
      },
    ],
  },
  {
    slug: "clareamento-intimo",
    categorySlug: "estetica-intima",
    order: 4,
    navLabel: "Clareamento Íntimo",
    title: "Clareamento Íntimo: porque você tem o direito de se sentir bonita em todo o seu corpo",
    metaTitle: "Clareamento Íntimo em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Clareamento íntimo em Sorocaba: protocolos médicos personalizados com a Dra. Elaine Morch.",
    eyebrow: "Estética Íntima",
    lead: "Tratamento seguro e eficaz para uniformizar a coloração da pele da região íntima, com protocolos médicos personalizados.",
    cardDescription: "Uniformização da tonalidade da pele com protocolos médicos seguros.",
    image: clareamentoImg,
    indicatedFor: [
      "Você sente incômodo com o escurecimento da região íntima (virilha, grandes lábios, região perianal)",
      "Tem manchas causadas por atrito, depilação frequente, alterações hormonais ou pós-gravidez",
      "Quer mais uniformidade na tonalidade da pele nessa região",
      "Busca mais autoconfiança no próprio corpo",
    ],
    aboutIntro: [
      "O clareamento íntimo é feito com protocolos médicos que podem incluir laser, radiofrequência micro ablativa, peelings específicos ou cremes despigmentantes de uso controlado. A escolha da técnica depende do tipo de pele e da intensidade da hiperpigmentação.",
    ],
    steps: [
      { title: "Avaliação", body: "Do fototipo e das causas do escurecimento." },
      { title: "Definição do protocolo", body: "O mais indicado para o seu caso." },
      { title: "Aplicação", body: "Por profissional especializado, no consultório." },
      { title: "Orientações", body: "Para manutenção em casa, quando necessário." },
    ],
    results: [
      "Uniformização progressiva da tonalidade da pele",
      "Resultado natural, sem tons artificiais",
      "Mais confiança e bem-estar com o próprio corpo",
    ],
    faq: [
      {
        q: "O clareamento íntimo é seguro para todos os tipos de pele?",
        a: "O protocolo é sempre adaptado ao fototipo da paciente. A avaliação prévia é fundamental para garantir segurança e eficácia.",
      },
      {
        q: "O resultado é permanente?",
        a: "Os resultados são duradouros, mas podem ser influenciados por fatores como atrito, depilação e alterações hormonais. A Dra. Elaine orientará sobre manutenção.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "Varia conforme o protocolo e a intensidade do escurecimento. Em geral, entre 3 e 6 sessões são suficientes para resultados significativos.",
      },
    ],
  },
  {
    slug: "preenchimento-intimo",
    categorySlug: "estetica-intima",
    order: 5,
    navLabel: "Preenchimento Íntimo",
    title: "Preenchimento Íntimo: volume, conforto e confiança renovados",
    metaTitle: "Preenchimento Íntimo em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Preenchimento íntimo em Sorocaba: volume e firmeza natural com ácido hialurônico, pela Dra. Elaine Morch.",
    eyebrow: "Estética Íntima",
    lead: "Procedimento minimamente invasivo que restaura volume e firmeza nos grandes lábios, com resultado imediato e natural.",
    cardDescription: "Volume e firmeza natural com ácido hialurônico e resultado imediato.",
    image: preenchimentoImg,
    indicatedFor: [
      "Percebem perda de volume nos grandes lábios com o envelhecimento ou emagrecimento",
      "Sentem desconforto físico ao sentar, pedalar ou praticar atividades físicas por falta de preenchimento",
      "Querem recuperar uma aparência mais jovem e preenchida na região íntima",
      "Buscam resultado imediato sem cirurgia",
    ],
    aboutIntro: [
      "O preenchimento íntimo utiliza ácido hialurônico — o mesmo usado em procedimentos faciais — aplicado com microcânula nos grandes lábios. O ácido hialurônico é biocompatível, seguro e absorvível pelo organismo.",
    ],
    steps: [
      { title: "Consulta e avaliação", body: "Do volume e da anatomia da região." },
      {
        title: "Aplicação",
        body: "Com anestesia tópica — confortável e rápida (30 a 40 minutos).",
      },
      { title: "Resultado imediato", body: "Com leve inchaço inicial que melhora em dias." },
      { title: "Retorno às atividades", body: "Normais no mesmo dia." },
    ],
    results: [
      "Volume e firmeza restaurados imediatamente após o procedimento",
      "Aparência natural e harmoniosa",
      "Mais conforto em atividades físicas e no dia a dia",
      "Resultados que duram de 12 a 18 meses",
    ],
    faq: [
      {
        q: "O preenchimento íntimo dói?",
        a: "É utilizada anestesia tópica antes do procedimento, tornando-o muito confortável. A aplicação com microcânula minimiza o desconforto.",
      },
      {
        q: "O ácido hialurônico é seguro?",
        a: "Sim. É um produto biocompatível e com longa história de uso seguro em procedimentos estéticos. Em mãos experientes e com indicação adequada, é altamente seguro.",
      },
      {
        q: "Quanto tempo dura o resultado?",
        a: "Em média, de 12 a 18 meses. A durabilidade pode variar conforme o metabolismo de cada paciente.",
      },
    ],
  },
  {
    slug: "menopausa",
    categorySlug: "saude-hormonal",
    order: 1,
    navLabel: "Menopausa",
    title: "Menopausa: entenda o que está acontecendo com o seu corpo — e o que você pode fazer",
    metaTitle: "Menopausa: sintomas e tratamento em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Entenda os sintomas da menopausa e do climatério e conheça o acompanhamento especializado da Dra. Elaine Morch em Sorocaba.",
    eyebrow: "Saúde Hormonal",
    lead: "A menopausa é uma fase natural da vida da mulher, mas não precisa ser sinônimo de sofrimento. Com acompanhamento médico especializado, você atravessa essa transição com mais saúde, equilíbrio e bem-estar.",
    cardDescription: "Acompanhamento completo para climatério, menopausa e qualidade de vida.",
    image: menopausaImg,
    aboutIntro: [
      "A menopausa é definida como a interrupção definitiva da menstruação, confirmada após 12 meses consecutivos sem ciclo menstrual. Ocorre em média entre os 45 e 55 anos e marca o fim da capacidade reprodutiva natural.",
      "Antes dela, existe o climatério — o período de transição que pode durar anos, com os ovários produzindo cada vez menos estrogênio e progesterona. É nessa fase que surgem os primeiros sintomas.",
      "O que muitas mulheres não sabem é que os sintomas não são inevitáveis — ou que devem ser suportados em silêncio. Existe tratamento, e ele faz uma diferença real na qualidade de vida.",
      "Com a queda do estrogênio, progesterona, estradiol e testosterona, todos os sistemas do organismo são afetados. O estrogênio não regula apenas o ciclo menstrual — ele age na saúde óssea, na função cardiovascular, no cérebro, na pele, nos músculos e nas mucosas. Por isso, a menopausa não tratada pode aumentar o risco de osteoporose, doenças cardiovasculares e outras condições de saúde a longo prazo.",
    ],
    symptomGroups: [
      {
        title: "Sintomas vasomotores",
        items: ["Fogachos (ondas de calor repentinas)", "Sudorese noturna intensa", "Palpitações"],
      },
      {
        title: "Sintomas genitourinários",
        items: [
          "Ressecamento vaginal e desconforto nas relações",
          "Perda de libido",
          "Infecções urinárias frequentes",
          "Incontinência urinária",
        ],
      },
      {
        title: "Sintomas emocionais e cognitivos",
        items: [
          "Irritabilidade e oscilações de humor",
          "Ansiedade e episódios de tristeza",
          'Dificuldade de concentração e memória ("névoa mental")',
          "Insônia ou sono de má qualidade",
        ],
      },
      {
        title: "Sintomas físicos",
        items: [
          "Fadiga e cansaço sem explicação aparente",
          "Ganho de peso, especialmente na região abdominal",
          "Queda de cabelo e ressecamento da pele",
          "Dores nas articulações",
        ],
      },
    ],
    approach: [
      "Avaliação clínica e hormonal completa",
      "Reposição hormonal personalizada (sintética ou bioidentica, conforme indicação)",
      "Implantes hormonais para quem busca praticidade e estabilidade",
      "Tratamentos para sintomas genitourinários (laser, radiofrequência, lubrificação)",
      "Orientações de estilo de vida: alimentação, exercício, suplementação",
      "Acompanhamento contínuo e ajuste do tratamento conforme evolução",
    ],
    faq: [
      {
        q: "Menopausa precoce é diferente?",
        a: "Sim. A menopausa antes dos 40 anos — chamada de insuficiência ovariana prematura — merece atenção especial, pois os riscos à saúde óssea e cardiovascular são maiores. O tratamento é ainda mais importante nesses casos.",
      },
      {
        q: "Preciso de reposição hormonal para tratar a menopausa?",
        a: "Depende dos seus sintomas, histórico e preferências. A reposição hormonal é o tratamento mais eficaz para a maioria dos sintomas, mas existem alternativas para quem tem contraindicação. A Dra. Elaine avalia cada caso individualmente.",
      },
      {
        q: "Quanto tempo dura o climatério?",
        a: "Pode durar de poucos meses a mais de 10 anos. Com tratamento adequado, os sintomas são controlados e a qualidade de vida se mantém.",
      },
      {
        q: "A menopausa afeta o desejo sexual?",
        a: "Com muita frequência, sim. A queda do estrogênio e da testosterona afeta diretamente a libido, além de causar ressecamento vaginal que torna as relações desconfortáveis. Esses sintomas têm tratamento — e falar sobre eles é o primeiro passo.",
      },
      {
        q: "A partir de que idade devo me preocupar com a menopausa?",
        a: "O ideal é iniciar o acompanhamento ginecológico especializado já a partir dos 40 anos, antes mesmo do início dos sintomas. A prevenção e o monitoramento precoce fazem toda a diferença nos resultados.",
      },
    ],
  },
  {
    slug: "reposicao-hormonal",
    categorySlug: "saude-hormonal",
    order: 2,
    navLabel: "Reposição Hormonal",
    title: "Reposição Hormonal: viver bem em cada fase da vida",
    metaTitle: "Reposição Hormonal em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Reposição hormonal personalizada em Sorocaba com a Dra. Elaine Morch: mais energia, sono e bem-estar na menopausa.",
    eyebrow: "Saúde Hormonal",
    lead: "A terapia hormonal personalizada pode transformar a forma como você vive a menopausa e o climatério — com mais energia, disposição, qualidade de sono e bem-estar.",
    cardDescription: "Acompanhamento completo para climatério, menopausa e qualidade de vida.",
    image: reposicaoHormonalImg,
    indicatedFor: [
      "Tem fogachos (ondas de calor) frequentes que atrapalham seu dia a dia e o sono",
      "Sente irritabilidade, oscilações de humor ou ansiedade sem causa aparente",
      "Experimenta ressecamento vaginal, queda de libido ou dores nas relações",
      'Tem fadiga constante, dificuldade de concentração ou "névoa mental"',
      "Está no climatério ou na menopausa e quer cuidar da saúde óssea e cardiovascular a longo prazo",
    ],
    aboutIntro: [
      "A reposição hormonal repõe os hormônios — principalmente estrogênio e progesterona — que o organismo deixa de produzir com o envelhecimento. O tratamento é personalizado: doses, combinações e formas de administração são escolhidas de acordo com o seu perfil, seus sintomas e seus exames.",
    ],
    steps: [
      { title: "Consulta inicial", body: "Anamnese completa, histórico e sintomas." },
      { title: "Exames laboratoriais", body: "E, quando indicado, de imagem." },
      {
        title: "Prescrição do protocolo personalizado",
        body: "Comprimidos, géis, adesivos, implantes ou injetáveis.",
      },
      { title: "Acompanhamento periódico", body: "Para ajuste de doses conforme resposta." },
    ],
    results: [
      "Redução ou eliminação dos fogachos",
      "Melhora do sono, humor e energia",
      "Mais conforto e prazer nas relações sexuais",
      "Proteção da saúde óssea, cardiovascular e metabólica a longo prazo",
      "Sensação de bem-estar geral e qualidade de vida",
    ],
    faq: [
      {
        q: "A reposição hormonal tem riscos?",
        a: "Como qualquer tratamento médico, a reposição hormonal tem indicações e contraindicações. Quando prescrita corretamente, com acompanhamento especializado, os benefícios superam amplamente os riscos para a maioria das mulheres. A avaliação individualizada é o ponto de partida.",
      },
      {
        q: "Qual a diferença entre hormônios sintéticos e bioidenticos?",
        a: "Hormônios bioidenticos têm estrutura molecular idêntica aos hormônios produzidos pelo corpo, o que pode significar melhor tolerância e menos efeitos colaterais para algumas mulheres. A Dra. Elaine explica as diferenças e indica a melhor opção para o seu caso.",
      },
      {
        q: "Em que idade posso começar a reposição hormonal?",
        a: 'Não existe uma idade única. O ideal é começar assim que os sintomas aparecem e há indicação clínica. O "timing" do início faz diferença nos resultados — por isso a consulta não deve ser adiada.',
      },
    ],
  },
  {
    slug: "hormonios-bioidenticos",
    categorySlug: "saude-hormonal",
    order: 3,
    navLabel: "Hormônios Bioidenticos",
    title: "Hormônios Bioidenticos: reposição que respeita o seu corpo",
    metaTitle: "Hormônios Bioidenticos em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Hormônios bioidenticos em Sorocaba: reposição hormonal personalizada e natural com a Dra. Elaine Morch.",
    eyebrow: "Saúde Hormonal",
    lead: "Hormônios com a mesma estrutura dos produzidos pelo seu organismo — para uma reposição mais natural, personalizada e com melhor tolerância.",
    cardDescription: "Acompanhamento completo para climatério, menopausa e qualidade de vida.",
    image: hormoniosBioidenticosImg,
    indicatedFor: [
      "Mulheres em climatério ou menopausa com sintomas hormonais",
      "Quem não respondeu bem ou não tolerou hormônios sintéticos convencionais",
      "Mulheres que buscam uma abordagem mais personalizada e alinhada à medicina funcional",
      "Quem deseja otimizar saúde hormonal preventivamente",
    ],
    aboutIntro: [
      "Hormônios bioidenticos são substâncias cuja estrutura molecular é idêntica à dos hormônios produzidos naturalmente pelo corpo humano. Isso os diferencia dos hormônios sintéticos tradicionais, que têm estruturas modificadas.",
      'Por serem reconhecidos pelo organismo como "próprios", os hormônios bioidenticos podem oferecer melhor tolerância e menos efeitos colaterais para muitas mulheres — embora, como qualquer tratamento, precisem de avaliação e acompanhamento médico individualizado.',
    ],
    steps: [
      { title: "Consulta completa", body: "Histórico, sintomas, estilo de vida e objetivos." },
      { title: "Painel hormonal detalhado", body: "Exames laboratoriais específicos." },
      {
        title: "Prescrição individualizada",
        body: "Doses e formas de uso adaptadas ao seu perfil.",
      },
      {
        title: "Manipulação em farmácia especializada",
        body: "Cápsulas, géis, cremes ou implantes.",
      },
      { title: "Acompanhamento regular", body: "Para ajuste fino do protocolo." },
    ],
    results: [
      "Reposição hormonal individualizada e de melhor tolerância",
      "Menos efeitos colaterais para muitas mulheres",
      "Melhora progressiva dos sintomas em semanas",
      "Acompanhamento contínuo e ajuste fino do protocolo",
    ],
    faq: [
      {
        q: "Hormônios bioidenticos são mais seguros que os convencionais?",
        a: "A pesquisa científica ainda está em evolução, mas muitas mulheres relatam melhor tolerância com hormônios bioidenticos. O mais importante é a individualização do tratamento e o acompanhamento médico adequado — e nisso a Dra. Elaine tem experiência.",
      },
      {
        q: "Hormônios bioidenticos são manipulados?",
        a: "Sim, geralmente. Isso permite doses personalizadas, o que é uma das grandes vantagens dessa abordagem.",
      },
      {
        q: "Quanto tempo leva para sentir os efeitos?",
        a: "As primeiras melhorias costumam aparecer entre 4 e 8 semanas após o início do protocolo, com resultados progressivos ao longo dos meses.",
      },
    ],
  },
  {
    slug: "implantes-hormonais",
    categorySlug: "saude-hormonal",
    order: 4,
    navLabel: "Implantes Hormonais",
    title: "Implantes Hormonais: equilíbrio contínuo, sem preocupação com doses diárias",
    metaTitle: "Implantes Hormonais em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Implantes hormonais (pellets) em Sorocaba: praticidade e estabilidade com a Dra. Elaine Morch.",
    eyebrow: "Saúde Hormonal",
    lead: "Pequenos pellets implantados sob a pele que liberam hormônios de forma constante e controlada por meses — para quem quer praticidade e estabilidade no tratamento hormonal.",
    cardDescription: "Acompanhamento completo para climatério, menopausa e qualidade de vida.",
    image: implantesHormonaisImg,
    indicatedFor: [
      "Mulheres em menopausa ou climatério com sintomas hormonais",
      "Quem tem dificuldade ou incômodo com o uso diário de outros métodos (géis, comprimidos, adesivos)",
      "Mulheres que buscam estabilidade de níveis hormonais ao longo do tempo",
      "Quem já usa reposição hormonal e quer explorar alternativas mais convenientes",
    ],
    aboutIntro: [
      "Os implantes (ou pellets) são pequenas pastilhas do tamanho de um grão de arroz, compostas por hormônios bioidenticos comprimidos. São inseridos abaixo da pele — geralmente na região glútea ou do abdômen (na gordura) — por meio de um procedimento simples e ambulatorial.",
      "A grande vantagem é a liberação contínua e estável dos hormônios, sem os picos e quedas típicos de outras formas de administração. Não há necessidade de lembrar de tomar comprimido ou aplicar gel diariamente.",
    ],
    steps: [
      { title: "Consulta e avaliação hormonal", body: "Com exames." },
      {
        title: "Implante",
        body: "Procedimento ambulatorial com anestesia local, dura cerca de 15 minutos.",
      },
      { title: "Pequeno curativo", body: "No local de inserção — sem pontos." },
      {
        title: "Duração",
        body: "Os pellets liberam hormônios por 4 a 6 meses, dependendo do metabolismo.",
      },
      { title: "Renovação", body: "Novo procedimento quando os hormônios se esgotam." },
    ],
    results: [
      "Estabilidade de humor, energia e disposição ao longo do dia",
      "Redução ou eliminação dos fogachos",
      "Melhora do sono, libido e conforto vaginal",
      "Praticidade: sem doses diárias",
      "Proteção de longo prazo para ossos e sistema cardiovascular",
    ],
    faq: [
      {
        q: "O implante dói?",
        a: "O procedimento é feito com anestesia local e dura poucos minutos. O desconforto é mínimo e passageiro.",
      },
      {
        q: "E se eu quiser interromper o tratamento?",
        a: "Os pellets são absorvidos naturalmente pelo organismo ao longo dos meses. Se necessário, podem ser removidos, mas o mais comum é simplesmente não renovar na data prevista.",
      },
      {
        q: "Posso fazer o implante se já uso outro método de reposição?",
        a: "É possível fazer a transição entre métodos. A Dra. Elaine avaliará o seu caso e orientará sobre a melhor forma de fazer essa mudança.",
      },
    ],
  },
  {
    slug: "incontinencia-urinaria",
    categorySlug: "saude-hormonal",
    order: 5,
    navLabel: "Incontinência Urinária",
    title: "Incontinência Urinária: existe tratamento, e ele começa com uma conversa",
    metaTitle: "Incontinência Urinária em Sorocaba | Dra. Elaine Morch",
    metaDescription:
      "Tratamento para incontinência urinária feminina em Sorocaba com a Dra. Elaine Morch.",
    eyebrow: "Saúde Hormonal",
    lead: "A perda involuntária de urina afeta milhões de mulheres — e é muito mais tratável do que se imagina. Você não precisa conviver com isso.",
    cardDescription: "Acompanhamento completo para climatério, menopausa e qualidade de vida.",
    image: incontinenciaUrinariaImg,
    indicatedFor: [
      "Perde urina ao tossir, espirrar, rir ou durante exercícios físicos",
      "Sente urgência intensa e frequente de urinar",
      "Acorda várias vezes à noite para ir ao banheiro",
      "Já está evitando atividades físicas ou situações sociais por causa da incontinência",
      "Usa absorventes de proteção diária de forma rotineira",
    ],
    aboutIntro: [
      "O tratamento depende do tipo e da gravidade da incontinência. A Dra. Elaine oferece uma abordagem que pode incluir reposição hormonal (quando o fator hormonal é predominante), laser vaginal para fortalecimento dos tecidos de suporte, radiofrequência, orientações de fisioterapia pélvica e, quando necessário, encaminhamento para avaliação complementar.",
    ],
    steps: [
      {
        title: "Consulta detalhada",
        body: "Para identificar o tipo e as causas da incontinência.",
      },
      { title: "Exames complementares", body: "Quando necessário." },
      { title: "Definição do protocolo", body: "Individualizado." },
      { title: "Acompanhamento", body: "Da evolução do tratamento." },
    ],
    results: [
      "Redução significativa ou eliminação dos episódios de perda urinária",
      "Mais liberdade e confiança no dia a dia",
      "Retorno às atividades físicas sem preocupação",
      "Melhora da qualidade de vida e autoestima",
    ],
    faq: [
      {
        q: "Incontinência urinária tem cura?",
        a: "Muitos casos têm melhora expressiva ou resolução completa com o tratamento adequado. O tipo e a causa determinam o prognóstico — por isso a avaliação é o primeiro passo.",
      },
      {
        q: "Preciso fazer cirurgia?",
        a: "Não necessariamente. Existem muitas opções de tratamento não cirúrgico com ótimos resultados. A cirurgia é reservada para casos específicos e discutida apenas quando as outras abordagens não são suficientes.",
      },
      {
        q: "É normal ter incontinência após o parto?",
        a: "É comum, mas não é algo que você precisa aceitar como permanente. Quanto mais cedo for tratada, melhores os resultados.",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getTreatmentsByCategory(categorySlug: string) {
  return TREATMENTS.filter((t) => t.categorySlug === categorySlug).sort(
    (a, b) => a.order - b.order,
  );
}

export function getTreatment(categorySlug: string, slug: string) {
  return TREATMENTS.find((t) => t.categorySlug === categorySlug && t.slug === slug);
}

export const HOME_IMAGES = {
  hero: heroHomeImg,
  sobre: sobreDraElaineImg,
};
