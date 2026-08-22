import { CategoryId } from '../types';

interface CategoryTabsProps {
  activeCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  articleCountByCategory: Record<string, number>;
}

const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: 'todos', label: 'Todos os Artigos' },
  { id: 'celulares', label: '📱 Celulares' },
  { id: 'ia', label: '🤖 Inteligência Artificial' },
  { id: 'tutoriais', label: '🛠️ Tutoriais' },
  { id: 'seguranca', label: '🔐 Segurança' },
  { id: 'aplicacoes', label: '📲 Aplicações' },
  { id: 'internet', label: '🌐 Internet e Dados' },
];

export function CategoryTabs({ activeCategory, onSelectCategory, articleCountByCategory }: CategoryTabsProps) {
  return (
    <div id="category-filter-tabs" className="py-2 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-1.5 min-w-max pb-1">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = articleCountByCategory[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              id={`tab-category-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors border ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span>{cat.label}</span>
              {count > 0 && (
                <span
                  className={`ml-1.5 text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-slate-700 text-slate-200' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
