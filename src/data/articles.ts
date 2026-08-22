import { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'ia-estudantes-gratuitas',
    title: '5 ferramentas de Inteligência Artificial gratuitas que todo estudante deveria conhecer',
    slug: '5-ferramentas-ia-gratuitas-estudantes',
    category: 'ia',
    categoryLabel: 'Inteligência Artificial',
    categoryColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    summary: 'Descubra ferramentas de IA acessíveis e gratuitas que ajudam a resumir textos longos, resolver dúvidas de matemática e estruturar trabalhos escolares sem gastar muitos dados móveis.',
    date: '20 de Fevereiro, 2026',
    readTime: '4 min de leitura',
    featured: true,
    content: {
      intro: 'A Inteligência Artificial já não é um privilégio de quem tem computadores potentes. Hoje é possível utilizar ferramentas no próprio telemóvel para melhorar a produtividade académica, tirar dúvidas em tempo real e organizar relatórios.',
      steps: [
        {
          title: '1. Google Gemini (Gratuito & Rápido)',
          description: 'Excelente para explicar matérias difíceis em português simples, estruturar planos de estudo e resumir capítulos de livros em tópicos directos.'
        },
        {
          title: '2. Perplexity AI (Pesquisa com Fontes)',
          description: 'Ao contrário de chatbots normais, o Perplexity indica de onde tirou a informação com links directos para fontes académicas e notícias verificadas.'
        },
        {
          title: '3. Photomath & Socratic',
          description: 'Aplicações para celular que permitem tirar foto a uma equação ou problema de ciências e mostram o passo a passo da resolução sem rodeios.'
        },
        {
          title: '4. QuillBot (Reescrita e Gramática)',
          description: 'Ideal para melhorar a clareza de frases, corrigir pontuação e reformular ideias para evitar repetições no texto.'
        },
        {
          title: '5. Gamma App (Apresentações Rápidas)',
          description: 'Gera diapositivos e resumos visuais a partir de um simples esboço de texto, poupando horas de formatação no PowerPoint.'
        }
      ],
      keyPoints: [
        'Use a IA como tutor e assistente, nunca copie e cole textos sem ler e validar',
        'Economize dados acedendo às versões web leves sem necessidade de descarregar ficheiros pesados',
        'Formule perguntas claras indicando o nível de ensino (ex: "Explica a Lei da Gravidade como se eu estivesse na 10ª classe")'
      ],
      mozambiqueTip: 'Dica local: O Google Gemini e o Perplexity funcionam perfeitamente no navegador do celular (Chrome/Opera Mini) sem exigir subscrições pagas nem cartões internacionais.',
      conclusion: 'Aproveite estas soluções gratuitas para potenciar os seus estudos com eficiência e foco no aprendizado real.'
    }
  },
  {
    id: 'recuperar-conta-whatsapp',
    title: 'Como recuperar uma conta do WhatsApp com segurança e rapidez',
    slug: 'como-recuperar-conta-whatsapp',
    category: 'tutoriais',
    categoryLabel: 'Tutoriais',
    categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    summary: 'Passo a passo prático para recuperar o acesso ao seu WhatsApp se trocou de telemóvel, perdeu o cartão SIM ou foi vítima de clonagem de conta.',
    date: '18 de Fevereiro, 2026',
    readTime: '3 min de leitura',
    featured: false,
    content: {
      intro: 'O WhatsApp é o principal meio de comunicação em Moçambique para trabalho, estudo e família. Perder o acesso à conta pode gerar preocupação, mas o processo de recuperação oficial é direto e seguro.',
      steps: [
        {
          title: '1. Reative ou recupere o seu número na operadora',
          description: 'Se perdeu o cartão SIM, dirija-se a uma loja oficial da sua operadora (Vodacom, Movitel ou Tmcel) com o seu BI e registe uma 2ª via com o mesmo número.'
        },
        {
          title: '2. Desinstale e reinstale a aplicação oficial',
          description: 'Baixe o WhatsApp apenas pela Google Play Store ou App Store. Nunca utilize versões modificadas (como WhatsApp GB), pois elas bloqueiam a recuperação.'
        },
        {
          title: '3. Introduza o número e aguarde o código SMS',
          description: 'Digite o seu número com o indicativo +258. Insira o código de 6 dígitos recebido por SMS ou selecione a opção "Ligar-me".'
        },
        {
          title: '4. Ative imediatamente a Verificação em Duas Etapas',
          description: 'Após entrar, vá a Definições > Conta > Verificação em duas etapas e defina um código PIN pessoal de 6 dígitos que ninguém mais sabe.'
        }
      ],
      keyPoints: [
        'Nunca partilhe o código de 6 dígitos do SMS com ninguém por telefone ou mensagem',
        'Nenhum suporte do WhatsApp ou de bancos liga a pedir códigos de verificação',
        'Mantenha sempre um e-mail de recuperação associado à verificação de duas etapas'
      ],
      mozambiqueTip: 'Se a sua conta foi clonada, avisar imediatamente os seus contactos e grupos por chamada directa para que não enviem dinheiro a pedidos falsos.',
      conclusion: 'Com a verificação de duas etapas ativa, a sua conta fica 100% protegida contra tentativas futuras de invasão.'
    }
  },
  {
    id: 'libertar-espaco-celular',
    title: 'Como libertar espaço no celular sem apagar fotos importantes',
    slug: 'como-libertar-espaco-celular',
    category: 'celulares',
    categoryLabel: 'Celulares',
    categoryColor: 'bg-sky-50 text-sky-700 border-sky-200',
    summary: 'Aprenda truques simples no Android e iPhone para limpar gigabytes de lixo invisível, ficheiros duplicados e dados acumulados do WhatsApp.',
    date: '15 de Fevereiro, 2026',
    readTime: '3 min de leitura',
    featured: false,
    content: {
      intro: 'A mensagem "Armazenamento quase cheio" deixa o telemóvel lento e impede a receção de novas mensagens. Na maioria dos casos, não precisa de apagar as suas fotos de família para resolver o problema.',
      steps: [
        {
          title: '1. Limpe ficheiros pesados no WhatsApp',
          description: 'No WhatsApp, vá a Definições > Armazenamento e dados > Gerir armazenamento. Apague vídeos reencaminhados várias vezes e ficheiros maiores que 5MB.'
        },
        {
          title: '2. Limpe a cache das aplicações que mais usa',
          description: 'No Android: vá a Definições > Aplicações > Escolha o TikTok/Facebook/Chrome > Armazenamento > "Limpar Cache" (isso não apaga a sua conta).'
        },
        {
          title: '3. Use o Google Files (Files do Google)',
          description: 'Instale a app oficial gratuita Google Files. Ela identifica automaticamente fotos duplicadas, memes desnecessários e ficheiros temporários com um toque.'
        },
        {
          title: '4. Descarregue fotos para o Google Fotos ou Google Drive',
          description: 'Faça cópia de segurança em nuvem quando estiver ligado a uma rede Wi-Fi e use a função "Libertar espaço no dispositivo".'
        }
      ],
      keyPoints: [
        'Desative o descarregamento automático de vídeos em grupos do WhatsApp',
        'Desinstale aplicações que não abre há mais de 3 meses',
        'Evite usar aplicações de "limpeza milagrosa" cheias de anúncios que apenas gastam bateria'
      ],
      mozambiqueTip: 'Dica: No WhatsApp, defina "Download automático de mídia" apenas para Wi-Fi. Assim poupa armazenamento interno e os seus megabytes.',
      conclusion: 'Aplicando estes 4 passos, o seu celular fica instantaneamente mais rápido e com espaço livre para o dia a dia.'
    }
  },
  {
    id: 'proteger-conta-golpes',
    title: 'Como proteger a sua conta e carteiras móveis contra golpes digitais',
    slug: 'como-proteger-conta-contra-golpes',
    category: 'seguranca',
    categoryLabel: 'Segurança Digital',
    categoryColor: 'bg-rose-50 text-rose-700 border-rose-200',
    summary: 'Orientações fundamentais para identificar mensagens falsas, fraudes de carteira móvel e proteger as suas senhas pessoais.',
    date: '12 de Fevereiro, 2026',
    readTime: '4 min de leitura',
    featured: false,
    content: {
      intro: 'Os criminosos digitais usam cada vez mais técnicas de engenharia social para enganar utilizadores com falsas promessas de prémios, ofertas de emprego ou falsas mensagens de cancelamento de transferências.',
      steps: [
        {
          title: '1. O golpe do "enviei dinheiro por engano"',
          description: 'Se receber um SMS a dizer que recebeu uma transferência e depois alguém ligar a pedir devolução, verifique sempre o seu saldo real marcando o código oficial da sua operadora antes de qualquer ação.'
        },
        {
          title: '2. Nunca digite o seu PIN na presença de desconhecidos',
          description: 'O PIN da sua carteira móvel ou banco é estritamente pessoal. Agentes oficiais nunca solicitam o seu código secreto para resolver problemas de sistema.'
        },
        {
          title: '3. Cuidado com links de "Vagas de Emprego" e "Recargas Grátis"',
          description: 'Links que circulam em correntes de WhatsApp com promessas milagrosas são feitos para roubar dados ou instalar programas maliciosos.'
        },
        {
          title: '4. Crie senhas fortes e diferentes',
          description: 'Evite senhas como "1234", datas de nascimento ou o seu primeiro nome. Use combinações fáceis de memorizar para si, mas difíceis de adivinhar.'
        }
      ],
      keyPoints: [
        'Verifique sempre o número do remetente das mensagens oficiais',
        'Nenhum banco ou operadora liga a pedir código de confirmação por SMS',
        'Desconfie sempre de urgência excessiva ("faça agora antes que a sua conta seja bloqueada")'
      ],
      mozambiqueTip: 'Dica local: Lembre-se que as mensagens de confirmação de transação chegam sempre pelos canais oficiais da operadora, nunca por números de telemóvel normais de 9 dígitos.',
      conclusion: 'A melhor segurança é a desconfiança saudável. Em caso de dúvida, desligue a chamada e contacte a linha de apoio ao cliente da sua operadora.'
    }
  },
  {
    id: 'aplicativos-estudantes',
    title: 'Aplicativos leves e essenciais para estudantes em 2026',
    slug: 'aplicativos-leves-essenciais-estudantes',
    category: 'aplicacoes',
    categoryLabel: 'Aplicações',
    categoryColor: 'bg-amber-50 text-amber-700 border-amber-200',
    summary: 'Uma seleção de aplicações leves que funcionam offline e ajudam a ler PDFs, digitalizar documentos e fazer anotações sem consumir muita bateria.',
    date: '08 de Fevereiro, 2026',
    readTime: '3 min de leitura',
    featured: false,
    content: {
      intro: 'Nem todos os telemóveis têm 128GB de memória ou pacotes ilimitados de internet. Por isso, selecionámos aplicações que ocupam menos de 30MB e entregam ferramentas completas de estudo.',
      steps: [
        {
          title: '1. ReadEra (Leitor de Livros e PDFs Offline)',
          description: 'O melhor leitor de documentos para Android: não tem anúncios, não gasta internet, abre PDFs, Word e EPUB com navegação por capítulos fluida.'
        },
        {
          title: '2. vFlat Scan ou CamScanner Lite',
          description: 'Transforme o telemóvel num scanner de alta qualidade. Tira fotos direitas a páginas de cadernos e livros e converte em PDF leve para partilha.'
        },
        {
          title: '3. Google Keep (Notas e Lembretes Leves)',
          description: 'Perfeito para guardar apontamentos das aulas, listas de tarefas e ideias. Funciona perfeitamente offline e sincroniza quando tiver rede.'
        },
        {
          title: '4. Dicionário Priberam / Dicionário Offline de Português',
          description: 'Consulte definições gramaticais, sinónimos e conjugação de verbos sem necessidade de conexão ativa de internet.'
        }
      ],
      keyPoints: [
        'Dê preferência a apps com suporte offline nativo',
        'Evite manter 3 apps que fazem a mesma função (ex: múltiplos leitores de PDF)',
        'Organize os ficheiros por pastas de cadeiras/disciplinas para facilitar a revisão'
      ],
      mozambiqueTip: 'Baixe livros e apostilas quando estiver num ponto de acesso Wi-Fi para ler no ReadEra a qualquer momento sem gastar megas.',
      conclusion: 'Com as ferramentas certas no seu telemóvel, o estudo torna-se mais prático e organizado em qualquer lugar.'
    }
  },
  {
    id: 'poupar-dados-moveis',
    title: 'Como poupar megabytes e reduzir o consumo de internet no celular',
    slug: 'como-poupar-dados-moveis-internet',
    category: 'internet',
    categoryLabel: 'Internet',
    categoryColor: 'bg-teal-50 text-teal-700 border-teal-200',
    summary: 'Técnicas comprovadas para fazer os seus pacotes de dados durarem muito mais no Facebook, Instagram, YouTube e navegação geral.',
    date: '05 de Fevereiro, 2026',
    readTime: '3 min de leitura',
    featured: false,
    content: {
      intro: 'Os dados móveis são um recurso valioso. Pequenas configurações escondidas no telemóvel consomem megabytes em segundo plano sem que você perceba.',
      steps: [
        {
          title: '1. Ative a Economia de Dados nativa do telemóvel',
          description: 'No Android: Definições > Rede e Internet > Economizador de dados > Ativar. Isso impede que apps gastem internet quando você não as está a usar.'
        },
        {
          title: '2. Use versões Lite ou Web das redes sociais',
          description: 'Opte por Facebook Lite, Messenger Lite ou aceda diretamente pelo navegador Opera Mini / Chrome com compressão de dados ativada.'
        },
        {
          title: '3. Reduza a qualidade de vídeo no YouTube e TikTok',
          description: 'Altere a qualidade padrão dos vídeos para 360p ou 480p nas definições de reprodução. A imagem continuará nítida na tela do celular gastando 70% menos dados.'
        },
        {
          title: '4. Desative atualizações automáticas na Play Store',
          description: 'Na Play Store: toque na sua foto de perfil > Definições > Preferências de rede > Atualizar apps automaticamente > "Apenas através de Wi-Fi".'
        }
      ],
      keyPoints: [
        'Verifique regularmente qual aplicativo está no topo do consumo de dados nas definições',
        'Desative a reprodução automática de vídeos nos feeds de redes sociais',
        'Evite abrir vídeos longos em modo de dados normais'
      ],
      mozambiqueTip: 'Configurar a Play Store para atualizar só em Wi-Fi evita que uma atualização surpresa consuma todo o seu pacote diário ou semanal.',
      conclusion: 'Configurar estes limites garante que cada megabyte adquirido seja aproveitado exatamente no que você precisa.'
    }
  }
];
