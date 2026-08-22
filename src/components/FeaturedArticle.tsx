import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Article } from '../types';
import { ArticleIllustration } from './ArticleIllustration';

interface FeaturedArticleProps {
  article: Article;
  onReadArticle: (article: Article) => void;
}

export function FeaturedArticle({ article, onReadArticle }: FeaturedArticleProps) {
  return (
    <section id="artigo-destaque" className="py-4 sm:py-6">
      <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-xs hover:border-slate-300 transition-colors">
        
        {/* Layout: Responsive 2-column or stacked */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
          
          {/* Text content (7 cols on desktop) */}
          <div className="md:col-span-7 flex flex-col justify-between order-2 md:order-1">
            
            {/* Category & Badge */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800">
                <Sparkles className="w-3 h-3 text-sky-600" />
                Destaque
              </span>
              <span className="text-xs font-medium text-slate-500">
                {article.categoryLabel}
              </span>
            </div>

            {/* Title */}
            <h1 
              id="featured-article-title"
              className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight mb-2.5 hover:text-sky-900 cursor-pointer"
              onClick={() => onReadArticle(article)}
            >
              {article.title}
            </h1>

            {/* Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 sm:line-clamp-none">
              {article.summary}
            </p>

            {/* Meta info & Action Button */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <button
                id="btn-ler-artigo-destaque"
                onClick={() => onReadArticle(article)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm transition-colors focus:ring-2 focus:ring-slate-400 focus:outline-none cursor-pointer"
              >
                <span>Ler artigo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Illustration Container (5 cols on desktop) */}
          <div 
            className="md:col-span-5 order-1 md:order-2 cursor-pointer"
            onClick={() => onReadArticle(article)}
          >
            <ArticleIllustration
              articleId={article.id}
              size="featured"
              className="shadow-inner hover:opacity-95 transition-opacity"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
