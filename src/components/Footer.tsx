import { MessageCircle, Facebook, Send, Twitter, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-main" className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
          
          {/* Brand & Mission Statement */}
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-bold text-lg text-white tracking-tight">
                Tech <span className="text-sky-400">MZ</span>
              </span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                2026
              </span>
            </div>
            <p className="text-sm text-slate-300 italic">
              “Tecnologia simples para todos.”
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              id="social-link-whatsapp"
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
              title="Canal WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              id="social-link-facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              id="social-link-telegram"
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Telegram"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>

            <a
              id="social-link-twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors"
              aria-label="X (Twitter)"
              title="X"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p id="copyright-text">
            Tech MZ © 2026. Todos os direitos reservados.
          </p>

          <button
            id="btn-back-to-top"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
