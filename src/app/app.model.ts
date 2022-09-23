export type AddressLines = [string, ...string[]];

export type UserDetail = {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  shippingAddress: AddressLines;
  billingAddress: AddressLines;
  paymentMethod: {
    type: string;
    number: string;
    expiry: string;
    owner: string;
  };
};

export type Order = {
  id: number;
  articles: {
    id: string;
    quantity: number;
  }[];
  user: number;
  createdAt: string;
};

export type Article = {
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

export type ArticleShort = {
  src: string;
  title: string;
  price: number;
  id: string | number;
};

export type BasketItem = {
  article: ArticleShort;
  articleCount: number;
};
