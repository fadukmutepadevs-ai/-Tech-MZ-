import { Search, X } from 'lucide-react';

interface SearchBarProps {
  query: string;
  onQueryChange: (q: string) => void;
  resultCount: number;
}

export function SearchBar({ query, onQueryChange, resultCount }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
        <input
          id="input-search-articles"
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Pesquisar dica ou tutorial (ex: WhatsApp, IA, bateria)..."
          className="w-full pl-9.5 pr-8 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
        />
        {query && (
          <button
            id="btn-clear-search"
            onClick={() => onQueryChange('')}
            className="absolute right-2.5 p-1 text-slate-400 hover:text-slate-600 focus:outline-none"
            aria-label="Limpar pesquisa"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {query && (
        <div className="absolute top-full left-0 mt-1 text-[11px] text-slate-500 bg-white/95 px-2 py-0.5 rounded shadow-xs border border-slate-100 z-10">
          {resultCount} {resultCount === 1 ? 'artigo encontrado' : 'artigos encontrados'} para "{query}"
        </div>
      )}
    </div>
  );
}
