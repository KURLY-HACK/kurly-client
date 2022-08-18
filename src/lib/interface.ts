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
