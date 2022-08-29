export interface IReview {
  id: string;

  memberId: string;
  memberName: string;
  date: string;

  productId: string;
  productName: string;

  productType: number;
  rating: number;
  freshScore?: number;
  tasteScore?: number;
  deliveryScore?: number;
  content: string;
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
  type: number;
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

export interface ISubscribeUserState extends IReviewState {
  name: string;
}

export interface IPostReviewState {
  product_name: string;
  product_type: number;
  rating: number;
  fresh_score: number;
  taste_score: number;
  delivery_score: number;
  contents: string;
}

export interface IPostReviewProps {
  product_id: string;
  reviewData: IPostReviewState;
}

export interface IScoreState {
  date: string;
  rate: number;
}

export interface ICommonScore {
  pending: boolean;
  rating: IScoreState[];
}

export interface IFreshScore {
  pending: boolean;
  rating: IScoreState[];
  fresh_score: IScoreState[];
  taste_score: IScoreState[];
  delivery_score: IScoreState[];
}

export interface ISubscribeState {
  pending: boolean;
  subscribe: boolean;
}

export interface IKurlyview {
  name: string;
  member_id: string;
}

export interface IKurlyviewLists {
  pending: boolean;
  kurlyviews: IKurlyview[];
}
