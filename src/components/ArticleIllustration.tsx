interface ArticleIllustrationProps {
  articleId: string;
  className?: string;
  size?: 'card' | 'featured' | 'modal';
}

export function ArticleIllustration({ articleId, className = '', size = 'card' }: ArticleIllustrationProps) {
  // Height and aspect ratio configuration based on placement
  const heightClass =
    size === 'featured'
      ? 'h-40 sm:h-52 md:h-60'
      : size === 'modal'
      ? 'h-36 sm:h-48'
      : 'h-32 sm:h-36';

  switch (articleId) {
    case 'ia-estudantes-gratuitas':
      // AI / Intelligence illustration: Neural nodes, brain spark, clean code chip
      return (
        <div className={`w-full ${heightClass} bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden select-none ${className}`}>
          {/* Subtle background tech grid */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 max-h-48 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="65" y="25" width="70" height="70" rx="16" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="100" cy="60" r="18" fill="#0284C7" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="2" />
            
            {/* Sparkle / AI core */}
            <path d="M100 48V72M88 60H112" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
            <circle cx="100" cy="60" r="4" fill="#38BDF8" />
            
            {/* Connected node links */}
            <line x1="30" y1="40" x2="65" y2="50" stroke="#818CF8" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="35" y1="80" x2="65" y2="70" stroke="#818CF8" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="135" y1="50" x2="165" y2="40" stroke="#818CF8" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="135" y1="70" x2="165" y2="85" stroke="#818CF8" strokeWidth="2" strokeDasharray="3 3" />

            {/* Satellite Nodes */}
            <circle cx="30" cy="40" r="8" fill="#4F46E5" stroke="#A5B4FC" strokeWidth="2" />
            <circle cx="35" cy="80" r="7" fill="#0284C7" stroke="#BAE6FD" strokeWidth="2" />
            <circle cx="165" cy="40" r="7" fill="#0284C7" stroke="#BAE6FD" strokeWidth="2" />
            <circle cx="165" cy="85" r="9" fill="#4F46E5" stroke="#A5B4FC" strokeWidth="2" />

            {/* Badge pill */}
            <rect x="74" y="80" width="52" height="12" rx="6" fill="#0369A1" />
            <text x="100" y="89" fill="#E0F2FE" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">IA GRÁTIS</text>
          </svg>
        </div>
      );

    case 'recuperar-conta-whatsapp':
      // WhatsApp Recovery illustration: Chat bubble, verified shield & phone
      return (
        <div className={`w-full ${heightClass} bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden select-none ${className}`}>
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px]" />

          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 max-h-48 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Phone Base */}
            <rect x="45" y="18" width="55" height="84" rx="10" fill="#1E293B" stroke="#059669" strokeWidth="2" />
            <rect x="52" y="26" width="41" height="60" rx="4" fill="#0F172A" />
            
            {/* Chat Bubble in Phone */}
            <rect x="56" y="32" width="33" height="18" rx="5" fill="#059669" />
            <path d="M60 50L56 54V50H60Z" fill="#059669" />
            <circle cx="64" cy="41" r="2" fill="#FFFFFF" />
            <circle cx="72" cy="41" r="2" fill="#FFFFFF" />
            <circle cx="80" cy="41" r="2" fill="#FFFFFF" />

            {/* Recovery Arrow & Security Shield */}
            <circle cx="135" cy="55" r="26" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
            
            {/* Checkmark in shield */}
            <path d="M125 55L132 62L145 47" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* SIM Card Graphic */}
            <rect x="120" y="86" width="30" height="20" rx="3" fill="#047857" stroke="#6EE7B7" strokeWidth="1.5" />
            <polygon points="120,86 126,86 120,92" fill="#0F172A" />
            <text x="135" y="99" fill="#ECFDF5" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SIM +258</text>
          </svg>
        </div>
      );

    case 'libertar-espaco-celular':
      // Free storage illustration: Memory clean, progress bar, files cleaned
      return (
        <div className={`w-full ${heightClass} bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden select-none ${className}`}>
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 max-h-48 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SD / Storage Card shape */}
            <rect x="40" y="25" width="50" height="70" rx="8" fill="#1E293B" stroke="#0284C7" strokeWidth="2" />
            <rect x="48" y="32" width="6" height="12" rx="2" fill="#38BDF8" />
            <rect x="58" y="32" width="6" height="12" rx="2" fill="#38BDF8" />
            <rect x="68" y="32" width="6" height="12" rx="2" fill="#38BDF8" />
            <rect x="76" y="32" width="6" height="12" rx="2" fill="#38BDF8" />

            <circle cx="65" cy="65" r="14" fill="#0369A1" />
            <text x="65" y="69" fill="#FFFFFF" fontSize="9" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">GB</text>

            {/* Broom / Sparkle Clean Gauge */}
            <g transform="translate(105, 25)">
              <rect width="65" height="70" rx="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
              <text x="32" y="20" fill="#E2E8F0" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ESPAÇO LIVRE</text>
              
              {/* Progress gauge */}
              <rect x="10" y="28" width="45" height="8" rx="4" fill="#334155" />
              <rect x="10" y="28" width="34" height="8" rx="4" fill="#0EA5E9" />
              
              {/* Sparkles of clean */}
              <circle cx="20" cy="52" r="3" fill="#38BDF8" />
              <circle cx="45" cy="48" r="4" fill="#7DD3FC" />
              <circle cx="32" cy="58" r="2" fill="#BAE6FD" />
              <text x="32" y="63" fill="#38BDF8" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">100% LIMPO</text>
            </g>
          </svg>
        </div>
      );

    case 'proteger-conta-golpes':
      // Security / Shield & Lock against scam illustration
      return (
        <div className={`w-full ${heightClass} bg-gradient-to-br from-rose-950 via-slate-900 to-slate-950 rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden select-none ${className}`}>
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fb7185_1px,transparent_1px)] [background-size:16px_16px]" />

          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 max-h-48 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Big Shield */}
            <path d="M100 20L145 35V65C145 90 100 105 100 105C100 105 55 90 55 65V35L100 20Z" fill="#1E293B" stroke="#E11D48" strokeWidth="2.5" />
            
            {/* Inner Shield Accent */}
            <path d="M100 28L135 40V63C135 83 100 95 100 95C100 95 65 83 65 63V40L100 28Z" fill="#881337" fillOpacity="0.4" />

            {/* Padlock */}
            <rect x="88" y="55" width="24" height="22" rx="4" fill="#FB7185" />
            <path d="M92 55V47C92 42.58 95.58 39 100 39C104.42 39 108 42.58 108 47V55" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="100" cy="65" r="3" fill="#881337" />
            <path d="M100 68V72" stroke="#881337" strokeWidth="2" />

            {/* Anti-fraud banner */}
            <rect x="70" y="85" width="60" height="11" rx="5" fill="#4C0519" stroke="#FB7185" strokeWidth="1" />
            <text x="100" y="93" fill="#FFE4E6" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PIN PROTEGIDO</text>
          </svg>
        </div>
      );

    case 'aplicacoes-estudantes':
      // Student Apps illustration: Tablet/Phone with Study Apps & Books
      return (
        <div className={`w-full ${heightClass} bg-gradient-to-br from-amber-950 via-slate-900 to-indigo-950 rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden select-none ${className}`}>
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />

          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 max-h-48 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Tablet Display */}
            <rect x="60" y="18" width="80" height="84" rx="8" fill="#1E293B" stroke="#D97706" strokeWidth="2" />
            <rect x="66" y="24" width="68" height="72" rx="4" fill="#0F172A" />

            {/* App Grid on Screen */}
            {/* App 1: PDF/Reader */}
            <rect x="72" y="30" width="24" height="24" rx="5" fill="#DC2626" />
            <path d="M78 38H90M78 42H86" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <text x="84" y="50" fill="#FEF2F2" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PDF</text>

            {/* App 2: Notes / Keep */}
            <rect x="104" y="30" width="24" height="24" rx="5" fill="#D97706" />
            <circle cx="116" cy="40" r="4" fill="#FEF3C7" />
            <text x="116" y="50" fill="#FFFBEB" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">NOTAS</text>

            {/* App 3: Scanner */}
            <rect x="72" y="60" width="24" height="24" rx="5" fill="#2563EB" />
            <rect x="77" y="65" width="14" height="12" rx="2" stroke="#BFDBFE" strokeWidth="1.5" />
            <text x="84" y="80" fill="#EFF6FF" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SCAN</text>

            {/* App 4: Dictionary */}
            <rect x="104" y="60" width="24" height="24" rx="5" fill="#059669" />
            <text x="116" y="73" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">A-Z</text>
            <text x="116" y="80" fill="#ECFDF5" fontSize="4.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DICIONÁRIO</text>
          </svg>
        </div>
      );

    case 'poupar-dados-moveis':
    default:
      // Data Saver / Internet Optimizer illustration
      return (
        <div className={`w-full ${heightClass} bg-gradient-to-br from-teal-950 via-slate-900 to-sky-950 rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden select-none ${className}`}>
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px]" />

          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 max-h-48 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Signal waves / Globe */}
            <circle cx="100" cy="60" r="38" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="100" cy="60" r="26" fill="#115E59" stroke="#14B8A6" strokeWidth="2" />

            {/* Data save leaf / lightning */}
            <path d="M100 46V74M86 60H114" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" />
            <circle cx="100" cy="60" r="6" fill="#2DD4BF" />

            {/* Left Signal Tower */}
            <path d="M40 75L50 45L60 75" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" />
            <line x1="45" y1="63" x2="55" y2="63" stroke="#5EEAD4" strokeWidth="2" />
            <circle cx="50" cy="42" r="3" fill="#2DD4BF" />

            {/* Right Speed Meter */}
            <rect x="140" y="45" width="28" height="30" rx="6" fill="#134E4A" stroke="#2DD4BF" strokeWidth="1.5" />
            <text x="154" y="60" fill="#CCFBF1" fontSize="7" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">-70%</text>
            <text x="154" y="69" fill="#5EEAD4" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">MEGAS</text>

            <rect x="75" y="86" width="50" height="12" rx="6" fill="#042F2E" stroke="#14B8A6" strokeWidth="1" />
            <text x="100" y="95" fill="#E6FFFA" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DADOS POUPADOS</text>
          </svg>
        </div>
      );
  }
}
