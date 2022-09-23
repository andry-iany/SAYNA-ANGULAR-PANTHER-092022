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

type AddressLines = [string, ...string[]];

type PaymentMethod = {
  type: string;
  number: string;
  expiry: string;
  owner: string;
};

export type UserDetailLong = {
  billingAddress: AddressLines;
  shippingAddress: AddressLines;
  paymentMethod: PaymentMethod;
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
