export interface Era {
    title: string;
    yearRange: string;
    technologies: string[];
    description: string;
    milestones?: string[];
    keyFigures?: string[];
  }
  
  export const eras: Era[] = [
    {
      title: 'Nascimento da Computação Moderna',
      yearRange: '1940 - 1959',
      technologies: ['ENIAC', 'Transistores', 'Linguagem Assembly', 'Válvulas'],
      description:
        'A computação moderna começou com máquinas gigantes como o ENIAC, o primeiro computador eletrônico de uso geral, construído em 1945. Essas máquinas, do tamanho de salas, usavam válvulas e eram programadas manualmente. Os transistores, inventados no final dos anos 1940, substituíram as válvulas, tornando os computadores menores e mais confiáveis. A linguagem assembly surgiu, permitindo programar com mais eficiência do que o código de máquina puro.',
      milestones: [
        '1945: ENIAC é concluído, realizando 5.000 adições por segundo.',
        '1947: Laboratórios Bell inventam o transistor, revolucionando a eletrônica.',
        '1951: UNIVAC I, o primeiro computador comercial, é lançado.',
        '1957: IBM lança o FORTRAN, uma linguagem de programação de alto nível.',
      ],
      keyFigures: ['John Presper Eckert', 'John Mauchly', 'John Bardeen', 'Grace Hopper'],
    },
    {
      title: 'Era dos Mainframes e Minicomputadores',
      yearRange: '1960 - 1969',
      technologies: ['Mainframes', 'Minicomputadores', 'Circuitos Integrados', 'COBOL', 'BASIC'],
      description:
        'Os anos 1960 popularizaram os computadores em empresas e universidades com mainframes como o IBM System/360. Os circuitos integrados, introduzidos em 1958, permitiram processadores mais rápidos e compactos. Minicomputadores, como o PDP-8, levaram a computação a organizações menores. Linguagens como COBOL e BASIC simplificaram a programação, enquanto o ARPANET (1969) lançou as bases da internet.',
      milestones: [
        '1964: IBM System/360 padroniza a computação em mainframes.',
        '1965: DEC PDP-8, o primeiro minicomputador de sucesso, é lançado.',
        '1969: ARPANET conecta UCLA e Stanford, iniciando a internet.',
      ],
      keyFigures: ['Gordon Moore', 'Robert Noyce', 'Ken Thompson', 'Dennis Ritchie'],
    },
    {
      title: 'Revolução dos Computadores Pessoais',
      yearRange: '1970 - 1979',
      technologies: ['Microprocessadores', 'Altair 8800', 'Apple II', 'CP/M', 'Disquetes'],
      description:
        'Os anos 1970 trouxeram os computadores pessoais. O microprocessador Intel 4004 (1971) tornou os computadores acessíveis e compactos. O Altair 8800 (1975) inspirou entusiastas, seguido por máquinas amigáveis como o Apple II (1977). Sistemas operacionais como CP/M padronizaram plataformas, e disquetes facilitaram o armazenamento. Protocolos como TCP/IP começaram a moldar a internet.',
      milestones: [
        '1971: Intel 4004, o primeiro microprocessador, é lançado.',
        '1975: Altair 8800 inicia o movimento de computadores caseiros.',
        '1977: Apple II introduz gráficos coloridos e facilidade de uso.',
        '1978: VisiCalc, a primeira planilha eletrônica, transforma negócios.',
      ],
      keyFigures: ['Steve Wozniak', 'Steve Jobs', 'Bill Gates', 'Paul Allen'],
    },
    {
      title: 'Domínio dos PCs e Redes Iniciais',
      yearRange: '1980 - 1989',
      technologies: ['IBM PC', 'MS-DOS', 'Interface Gráfica', 'Macintosh', 'TCP/IP', 'Ethernet'],
      description:
        'Os anos 1980 consolidaram os computadores pessoais. O IBM PC (1981), com processadores Intel e MS-DOS, definiu o padrão para PCs. O Macintosh da Apple (1984) popularizou interfaces gráficas (GUIs), tornando a computação intuitiva. Ethernet e TCP/IP padronizaram redes, enquanto Tim Berners-Lee concebeu a World Wide Web em 1989, preparando o terreno para a explosão da internet.',
      milestones: [
        '1981: IBM PC estabelece o padrão para computadores pessoais.',
        '1983: Microsoft Windows 1.0 introduz uma GUI para PCs.',
        '1984: Apple Macintosh populariza a interface gráfica.',
        '1989: Tim Berners-Lee propõe a World Wide Web.',
      ],
      keyFigures: ['Tim Berners-Lee', 'Alan Turing', 'Equipe Xerox PARC', 'Andy Grove'],
    },
    {
      title: 'Web 1.0 e Internet Estática',
      yearRange: '1990 - 1999',
      technologies: ['HTML', 'HTTP', 'Netscape', 'Apache', 'Processadores Pentium'],
      description:
        'Os anos 1990 levaram a internet às massas. A World Wide Web, lançada em 1991, usava HTML e HTTP para servir páginas estáticas. Navegadores como o Netscape Navigator tornaram a web acessível, e servidores como o Apache sustentaram o backend. Os processadores Pentium da Intel aumentaram o desempenho dos PCs, permitindo multimídia. Motores de busca como Yahoo! e Google organizaram a web crescente.',
      milestones: [
        '1991: CERN lança a World Wide Web publicamente.',
        '1994: Netscape Navigator domina como navegador.',
        '1995: Windows 95 revoluciona a usabilidade dos PCs.',
        '1998: Google Search é lançado, melhorando a navegação na web.',
      ],
      keyFigures: ['Marc Andreessen', 'Larry Page', 'Sergey Brin', 'Linus Torvalds'],
    },
    {
      title: 'Web 2.0 e Interatividade',
      yearRange: '2000 - 2009',
      technologies: ['CSS', 'JavaScript', 'AJAX', 'jQuery', 'MySQL', 'PHP'],
      description:
        'Os anos 2000 transformaram a web em uma plataforma interativa (Web 2.0). CSS e JavaScript permitiram estilização dinâmica e scripts no cliente, enquanto o AJAX possibilitou carregamento assíncrono, impulsionando sites como o Google Maps. O jQuery simplificou o JavaScript, e plataformas como WordPress (PHP/MySQL) democratizaram a criação de conteúdo. Redes sociais como Facebook e YouTube redefiniram a interação online.',
      milestones: [
        '2004: Facebook é lançado, redefinindo redes sociais.',
        '2005: YouTube introduz compartilhamento de vídeos.',
        '2006: jQuery facilita a programação em JavaScript.',
        '2008: Google Chrome estabelece novos padrões de desempenho.',
      ],
      keyFigures: ['Mark Zuckerberg', 'John Resig', 'Chad Hurley', 'Steve Chen'],
    },
    {
      title: 'Era Mobile e da Nuvem',
      yearRange: '2010 - 2019',
      technologies: ['React', 'TypeScript', 'AWS', 'Docker', 'CI/CD', 'Jest', 'Cypress'],
      description:
        'Os anos 2010 trouxeram a computação móvel e a infraestrutura em nuvem. Smartphones, com processadores ARM, tornaram a web onipresente. Aplicações de página única (SPAs) com React e TypeScript ofereceram experiências semelhantes a aplicativos. Plataformas de nuvem como AWS e pipelines CI/CD otimizaram o desenvolvimento, enquanto ferramentas como Jest e Cypress garantiram qualidade. O Node.js unificou o desenvolvimento web com JavaScript no servidor.',
      milestones: [
        '2010: iPhone 4 define o padrão para smartphones.',
        '2013: React é liberado como open-source pelo Facebook.',
        '2015: Docker populariza a conteinerização.',
        '2019: Redes 5G começam a ser implementadas, acelerando a conectividade móvel.',
      ],
      keyFigures: ['Jordan Walke', 'Jeff Bezos', 'Dan Abramov', 'Guido van Rossum'],
    },
    {
      title: 'Web3.0 e o Futuro Descentralizado',
      yearRange: '2020 - Atual',
      technologies: ['Blockchain', 'Web3.js', 'IPFS', 'IA', 'Computação Quântica', 'Rust'],
      description:
        'Os anos 2020 estão moldando a Web3.0, uma web descentralizada baseada em blockchain e contratos inteligentes. Tecnologias como Ethereum e IPFS permitem armazenamento de dados e aplicativos descentralizados (dApps). A inteligência artificial, com modelos como GPT, personaliza e automatiza experiências na web. A computação quântica, ainda em fase inicial, promete avanços em criptografia e cálculos. Rust e WebAssembly melhoram o desempenho de aplicações web de próxima geração.',
      milestones: [
        '2020: Ethereum 2.0 migra para prova de participação (proof-of-stake).',
        '2021: Boom dos NFTs destaca o impacto cultural do blockchain.',
        '2023: Chatbots de IA como ChatGPT são integrados a plataformas web.',
        '2025: Primeiros computadores quânticos resolvem problemas específicos.',
      ],
      keyFigures: ['Vitalik Buterin', 'Gavin Wood', 'Sam Altman', 'Elon Musk'],
    },
    {
      title: 'O Futuro da Computação',
      yearRange: '2030 - Além',
      technologies: ['Web Nativa de IA', 'Internet Quântica', 'Chips Neuromórficos', 'AR/VR'],
      description:
        'O futuro promete uma web nativa de IA, onde agentes inteligentes executam tarefas autonomamente. A internet quântica pode oferecer comunicação impossível de interceptar, enquanto chips neuromórficos, que imitam o cérebro, tornarão a IA mais eficiente. Realidade aumentada e virtual (AR/VR) criarão mundos digitais imersivos, e a computação biológica pode integrar biologia e tecnologia. A Web3.0 evoluirá para uma internet totalmente descentralizada e controlada pelos usuários.',
      milestones: [
        '2030: Protótipos de internet quântica surgem.',
        '2035: AR/VR substitui telas tradicionais em muitas aplicações.',
        '2040: Experimentos em computação biológica integram armazenamento em DNA.',
      ],
      keyFigures: ['Inovadores Desconhecidos', 'Pioneiros Futuros em IA'],
    },
  ];