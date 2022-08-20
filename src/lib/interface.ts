export interface IReview {
  review_id: string;

  member_id: string;
  member_name: string;
  date: string;

  product_id: string;
  product_name: string;

  product_type: number;
  rating: number;
  fresh_score?: number;
  taste_score?: number;
  delivery_score?: number;
  contents: string;
  photo: string;
}

export interface IProduct {
  id: string;
  title: string;
  price: number;
  photo: string;
  h1: string;
  details: { title: string; content: string }[];
  product_photo: string;
  detailed_photo: string;
}

export interface IMainProduct {
  id: string;
  title: string;
  price: number;
  photo: string;
}

export interface IMainProductLists {
  pending: boolean;
  products: IMainProduct[];
}

export interface ILogin {
  id: string;
  password: string;
}

export interface ILoginState {
  pending: boolean;
  success: boolean;
  message: null;
  errors: null;
  data: string;
}
