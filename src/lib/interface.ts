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
  product_type: number;
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
  data: string;
  name: string;
}

export interface IReviewState {
  pending: boolean;
  review: IReview[];
}

export interface IProductState {
  pending: boolean;
  product: IProduct;
}

export interface ISubscribeListState {
  pending: boolean;
  subscribeList: IReview[];
}
