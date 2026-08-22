import { useState, useEffect } from 'react';
import { X, Calendar, Clock, Share2, Check, ArrowLeft, Lightbulb } from 'lucide-react';
import { Article } from '../types';
import { ArticleIllustration } from './ArticleIllustration';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  const [copied, setCopied] = useState(false);
  const [fontSizeClass, setFontSizeClass] = useState<'normal' | 'large'>('normal');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShareWhatsApp = () => {
    const text = `*${article.title}*\n${article.summary}\n\nLeia no Tech MZ: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="modal-artigo-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="modal-artigo-container"
        className="bg-white w-full max-w-2xl rounded-xl sm:rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
              {article.categoryLabel}
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Tech MZ
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Font size adjustment */}
            <div className="flex items-center bg-white border border-slate-200 rounded-md text-xs font-medium">
              <button
                id="btn-font-normal"
                onClick={() => setFontSizeClass('normal')}
                title="Tamanho normal de texto"
                className={`px-2 py-1 ${fontSizeClass === 'normal' ? 'bg-slate-100 font-bold text-slate-900' : 'text-slate-500'}`}
              >
                A
              </button>
              <button
                id="btn-font-large"
                onClick={() => setFontSizeClass('large')}
                title="Aumentar tamanho de texto"
                className={`px-2 py-1 ${fontSizeClass === 'large' ? 'bg-slate-100 font-bold text-slate-900' : 'text-slate-500'}`}
              >
                A+
              </button>
            </div>

            {/* Close button */}
            <button
              id="btn-modal-close"
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 sm:px-8 overflow-y-auto space-y-5 flex-1">
          {/* Header Illustration */}
          <ArticleIllustration
            articleId={article.id}
            size="modal"
            className="shadow-sm"
          />

          {/* Header Metadata */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-2">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Intro Text */}
          <div className={fontSizeClass === 'large' ? 'text-base sm:text-lg text-slate-700 leading-relaxed' : 'text-sm sm:text-base text-slate-700 leading-relaxed'}>
            <p className="font-medium text-slate-900 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
              {article.summary}
            </p>
          </div>

          {/* Detailed Content */}
          <div className={fontSizeClass === 'large' ? 'text-base sm:text-lg text-slate-700 leading-relaxed space-y-4' : 'text-sm sm:text-base text-slate-700 leading-relaxed space-y-4'}>
            <p>{article.content.intro}</p>

            {/* Steps Guide */}
            {article.content.steps && article.content.steps.length > 0 && (
              <div className="space-y-3 pt-2">
                {article.content.steps.map((step, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-3.5">
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Key points checklist */}
            {article.content.keyPoints && article.content.keyPoints.length > 0 && (
              <div className="bg-sky-50/70 border border-sky-100 rounded-lg p-4 my-4">
                <h4 className="font-bold text-sky-900 text-xs sm:text-sm uppercase tracking-wider mb-2">
                  Pontos Importantes a Lembrar:
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-sky-950">
                  {article.content.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sky-600 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mozambique local tip */}
            {article.content.mozambiqueTip && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-900">
                  {article.content.mozambiqueTip}
                </div>
              </div>
            )}

            {/* Conclusion */}
            <p className="text-slate-800 font-medium pt-2 border-t border-slate-100">
              {article.content.conclusion}
            </p>
          </div>
        </div>

        {/* Modal Footer & Fast Actions */}
        <div className="px-4 sm:px-6 py-3 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <button
              id="btn-share-whatsapp"
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Partilhar no WhatsApp</span>
            </button>

            <button
              id="btn-copy-link"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-medium transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Link copiado!</span>
                </>
              ) : (
                <>
                  <span>Copiar Link</span>
                </>
              )}
            </button>
          </div>

          <button
            id="btn-modal-back"
            onClick={onClose}
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-md hover:bg-slate-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar aos artigos</span>
          </button>

        </div>
      </div>
    </div>
  );
}
