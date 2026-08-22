import { Calendar, ChevronRight } from 'lucide-react';
import { Article } from '../types';
import { ArticleIllustration } from './ArticleIllustration';

interface ArticleCardProps {
  key?: string | number;
  article: Article;
  onReadMore: (article: Article) => void;
}

export function ArticleCard({ article, onReadMore }: ArticleCardProps) {
  return (
    <article
      id={`article-card-${article.id}`}
      className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs group"
    >
      <div>
        {/* Illustrative Image Top Header */}
        <div 
          className="mb-3.5 cursor-pointer overflow-hidden rounded-lg"
          onClick={() => onReadMore(article)}
        >
          <ArticleIllustration 
            articleId={article.id} 
            size="card"
            className="group-hover:scale-[1.02] transition-transform duration-200" 
          />
        </div>

        {/* Category Label */}
        <div className="mb-2">
          <span className="text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-md">
            {article.categoryLabel}
          </span>
        </div>

        {/* Article Title */}
        <h3
          id={`article-title-${article.id}`}
          onClick={() => onReadMore(article)}
          className="text-base font-bold text-slate-900 leading-snug mb-2 hover:text-sky-900 cursor-pointer"
        >
          {article.title}
        </h3>

        {/* Small Summary */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          {article.summary}
        </p>
      </div>

      {/* Footer: Date & "Ler mais" */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
        <span className="flex items-center gap-1 text-xs text-slate-500">
          <Calendar className="w-3 h-3" />
          {article.date}
        </span>

        <button
          id={`btn-ler-mais-${article.id}`}
          onClick={() => onReadMore(article)}
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-900 hover:text-sky-600 focus:outline-none transition-colors cursor-pointer"
        >
          <span>Ler mais</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
}
