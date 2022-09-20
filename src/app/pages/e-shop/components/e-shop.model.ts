export type Article = {
  src: string;
  title: string;
  price: number;
  id: string | number;
};

export type BasketItem = {
  article: Article;
  articleCount: number;
};

export type TArticle = {
  id: string;
  src: string;
  description: string;
  name: string;
  category: string;
  price: number;
  size?: string;
  color?: string;
  weight?: string;
  capacity?: string;
  quantity?: string;
  material?: string;
};

export const articles: TArticle[] = [
  {
    category: 'cat',
    description: 'some description',
    id: '2',
    name: 'the name of the article',
    price: 23,
    src: '/article_1.png',
  },
];
