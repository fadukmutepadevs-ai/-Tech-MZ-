import { useState } from 'react';
import { Menu, X, Smartphone, Sparkles, BookOpen, Info, ShieldCheck, Zap } from 'lucide-react';
import { CategoryId } from '../types';

interface HeaderProps {
  activeCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  onNavigateSection: (sectionId: string) => void;
}

export function Header({ activeCategory, onSelectCategory, onNavigateSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string, category?: CategoryId) => {
    if (category) {
      onSelectCategory(category);
    }
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header id="header-main" className="sticky top-0 z-40 bg-slate-900 text-white shadow-sm border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <a 
          href="#inicio" 
          id="btn-brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('inicio', 'todos');
          }}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            T
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-white leading-none">
              Tech <span className="text-sky-400">MZ</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide">
              Tecnologia Acessível
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="nav-desktop" className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
          <button
            id="nav-link-inicio"
            onClick={() => handleNavClick('inicio', 'todos')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === 'todos' ? 'text-sky-400 bg-slate-800' : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            Início
          </button>
          
          <button
            id="nav-link-tecnologia"
            onClick={() => handleNavClick('ultimos-artigos', 'celulares')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === 'celulares' || activeCategory === 'ia' || activeCategory === 'aplicacoes' 
                ? 'text-sky-400 bg-slate-800' 
                : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            Tecnologia
          </button>

          <button
            id="nav-link-tutoriais"
            onClick={() => handleNavClick('ultimos-artigos', 'tutoriais')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === 'tutoriais' ? 'text-sky-400 bg-slate-800' : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            Tutoriais
          </button>

          <button
            id="nav-link-sobre"
            onClick={() => handleNavClick('sobre')}
            className="px-3 py-1.5 rounded-md text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors"
          >
            Sobre
          </button>
        </nav>

        {/* Data Saver Indicator (Visual badge) */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full">
          <Zap className="w-3.5 h-3.5" />
          <span>Modo Ultra Rápido</span>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="btn-mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="nav-mobile-drawer" className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-emerald-400">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> Página leve para poupança de dados
            </span>
          </div>

          <button
            id="mobile-nav-inicio"
            onClick={() => handleNavClick('inicio', 'todos')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 flex items-center justify-between"
          >
            <span>Início</span>
          </button>

          <button
            id="mobile-nav-celulares"
            onClick={() => handleNavClick('ultimos-artigos', 'celulares')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-sky-400" /> Celulares e Dicas
            </span>
          </button>

          <button
            id="mobile-nav-ia"
            onClick={() => handleNavClick('ultimos-artigos', 'ia')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" /> Inteligência Artificial
            </span>
          </button>

          <button
            id="mobile-nav-tutoriais"
            onClick={() => handleNavClick('ultimos-artigos', 'tutoriais')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" /> Tutoriais Passo a Passo
            </span>
          </button>

          <button
            id="mobile-nav-seguranca"
            onClick={() => handleNavClick('ultimos-artigos', 'seguranca')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-400" /> Segurança Digital
            </span>
          </button>

          <button
            id="mobile-nav-sobre"
            onClick={() => handleNavClick('sobre')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Info className="w-4 h-4 text-slate-400" /> Sobre o Tech MZ
            </span>
          </button>
        </div>
      )}
    </header>
  );
}
