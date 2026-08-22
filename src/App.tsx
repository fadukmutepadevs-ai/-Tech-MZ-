import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FeaturedArticle } from './components/FeaturedArticle';
import { CategoryTabs } from './components/CategoryTabs';
import { ArticleCard } from './components/ArticleCard';
import { ArticleModal } from './components/ArticleModal';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { RefreshBannerButton } from './components/RefreshBannerButton';
import { ARTICLES } from './data/articles';
import { Article, CategoryId } from './types';
import { Newspaper, Sparkles } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Quick refresh handler
  const handleFastRefresh = () => {
    setActiveCategory('todos');
    setSearchQuery('');
    setSelectedArticle(null);
    setRefreshKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Featured article (always the top AI article requested in prompt)
  const featuredArticle = useMemo(() => {
    return ARTICLES.find((a) => a.featured) || ARTICLES[0];
  }, []);

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Category match
      const matchCategory =
        activeCategory === 'todos' || article.category === activeCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.categoryLabel.toLowerCase().includes(query);

      return matchCategory && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  // Counts by category
  const articleCountByCategory = useMemo(() => {
    const counts: Record<string, number> = {
      todos: ARTICLES.length,
    };
    ARTICLES.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      
      {/* 1. Header / Cabeçalho */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main id="inicio" className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-4">
        
        {/* Botão de Atualização Rápida com a imagem/logótipo Tech MZ */}
        <RefreshBannerButton onRefresh={handleFastRefresh} />

        {/* 2. Artigo em Destaque (posicionado abaixo do botão de atualizar) */}
        {activeCategory === 'todos' && !searchQuery && (
          <FeaturedArticle
            article={featuredArticle}
            onReadArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {/* 3. Section: Últimos Artigos */}
        <section id="ultimos-artigos" className="py-6 scroll-mt-20">
          
          {/* Section Header with Category Tabs and Fast Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-sky-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Últimos Artigos
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Dicas práticas, guias rápidos e novidades de tecnologia
              </p>
            </div>

            {/* Instant Filter Search */}
            <SearchBar
              query={searchQuery}
              onQueryChange={setSearchQuery}
              resultCount={filteredArticles.length}
            />
          </div>

          {/* Category Tabs Filter */}
          <div className="my-4">
            <CategoryTabs
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              articleCountByCategory={articleCountByCategory}
            />
          </div>

          {/* Articles Grid (Cards) */}
          {filteredArticles.length > 0 ? (
            <div
              id="articles-grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4"
            >
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onReadMore={(art) => setSelectedArticle(art)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center my-6">
              <Sparkles className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 text-base mb-1">
                Nenhum artigo encontrado
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Não encontramos artigos para "{searchQuery}". Tente pesquisar por outros termos como WhatsApp, IA ou Celulares.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800"
              >
                Ver todos os artigos
              </button>
            </div>
          )}

        </section>

        {/* 5. Sobre o Tech MZ */}
        <AboutSection />

      </main>

      {/* 6. Rodapé */}
      <Footer />

      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
}
