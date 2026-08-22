export type CategoryId = 
  | 'todos'
  | 'celulares'
  | 'aplicacoes'
  | 'ia'
  | 'tutoriais'
  | 'seguranca'
  | 'computadores'
  | 'internet';

export interface ArticleStep {
  title: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: CategoryId;
  categoryLabel: string;
  categoryColor: string;
  summary: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: {
    intro: string;
    steps?: ArticleStep[];
    keyPoints?: string[];
    mozambiqueTip?: string;
    conclusion: string;
  };
}
