import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { reviewScoreSlice } from '../../store/slices/review/reviewScoreSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import StarReview from './StarReview';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { postReview } from '../../store/slices/postReview/postReviewThunk';

const AddReview = ({ product_type }: { product_type: number }) => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [fresh_score, setFreshScore] = useState(0);
  const [taste_score, setTasteScore] = useState(0);
  const [delivery_score, setDeliveryScore] = useState(0);

  const product = useAppSelector((state: RootState) => state.product.product);
  const product_id = product.id;
  const product_name = product.title;

  const freshStar = useAppSelector(
    (state: RootState) => state.reviewscore.freshScore
  );
  const taseStar = useAppSelector(
    (state: RootState) => state.reviewscore.tasteScroe
  );
  const deliveryStar = useAppSelector(
    (state: RootState) => state.reviewscore.deliveryScore
  );
  const rating = useAppSelector(
    (state: RootState) => state.reviewscore.totalScore
  );

  useEffect(() => {
    if (product_type === 1) {
      setFreshScore(freshStar);
      setTasteScore(taseStar);
      setDeliveryScore(deliveryStar);
    }
  }, [freshStar, taseStar, deliveryStar]);

  useEffect(() => {
    if (product_type !== 1) {
      setFreshScore(-1);
      setTasteScore(-1);
      setDeliveryScore(-1);
    }
  }, []);

  const onSubmit = async (e: React.SyntheticEvent) => {
    setTitle('');
    setContents('');
    dispatch(reviewScoreSlice.actions.resetReviewScore());
    navigate(`/detail/${params.id}`);

    dispatch(
      postReview({
        product_id,
        reviewData: {
          product_name,
          product_type,
          rating,
          fresh_score,
          taste_score,
          delivery_score,
          contents,
        },
      })
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;
    setTitle(value);
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const {
      target: { value },
    } = e;
    setContents(value);
  };

  return (
    <Wrapper>
      <TitleArea>
        <Title>??????</Title>
        <TitleInput
          type="text"
          placeholder="????????? ??????????????????."
          onChange={handleInputChange}
          value={title}
        />
      </TitleArea>
      <ReviewArea>
        <Review>????????????</Review>
        <ReviewInput
          value={contents}
          onChange={handleTextAreaChange}
          placeholder="????????? ????????? ?????? ????????? ????????? ?????? ????????? ??????,&#13;
??????????????? ???????????? ?????? ?????? ????????? ????????? ?????? ????????? ?????? ??? ?????? ??? ????????? ????????? ??? ????????????. &#13;
??????/?????? ????????? 1:1????????? ???????????????.  "
        />
      </ReviewArea>
      <ImgArea>
        <Img>????????????</Img>
      </ImgArea>
      <StarArea>
        <Star>????????????</Star>
        <StarReviewContainer>
          {product_type === 1 ? (
            <>
              {' '}
              <StarContainer>
                <StarTitle>?????????</StarTitle>
                <StarReview category="fresh" />
              </StarContainer>
              <StarContainer>
                <StarTitle>???</StarTitle>
                <StarReview category="taste" />
              </StarContainer>
              <StarContainer>
                <StarTitle>????????????</StarTitle>
                <StarReview category="deliver" />
              </StarContainer>
              <TotalStarContainer>
                <StarTitle>??????</StarTitle>
                <StarReview category="total" />
              </TotalStarContainer>
            </>
          ) : (
            <CommonProductStar>
              <CommonStarTitle>??????</CommonStarTitle>
              <StarReview category="total" />
            </CommonProductStar>
          )}
        </StarReviewContainer>
      </StarArea>
      <Submit onClick={onSubmit}>???????????? </Submit>
    </Wrapper>
  );
};

export default AddReview;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleArea = styled.div`
  height: 55px;
  width: 1007px;
  border-bottom: 1px solid #dddfe1;
  display: flex;
`;
const Title = styled.div`
  width: 110px;
  height: 55px;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 55px;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
`;
const TitleInput = styled.input`
  padding-left: 10px;
  width: 888px;
  height: 34px;
  margin-top: 8px;
  margin-left: 10px;
  border: 1px solid #dddfe1;

  :focus {
    outline: none;
    border: 1px solid #333333;
  }
`;
const ReviewArea = styled.div`
  height: 261px;
  width: 1007px;
  border-bottom: 1px solid #dddfe1;
  display: flex;
`;

const Review = styled.div`
  width: 110px;
  height: 261px;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 260px;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
`;

const ReviewInput = styled.textarea`
  margin-top: 8px;
  margin-left: 10px;
  padding-left: 10px;
  padding-top: 8px;
  width: 888px;
  height: 232px;
  border: 1px solid #dddfe1;
  resize: none;

  :focus {
    outline: none;
    border: 1px solid #333333;
  }
`;
const ImgArea = styled.div`
  width: 1007px;
  height: 150px;
  border-bottom: 1px solid #dddfe1;
  display: flex;
`;

const Img = styled.div`
  width: 110px;
  height: 150px;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 150px;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
`;

const StarArea = styled.div`
  width: 1007px;
  height: 160px;
  border-bottom: 1px solid #dddfe1;
  display: flex;
  margin-bottom: 50px;
`;

const Star = styled.div`
  width: 110px;
  height: 160px;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 165px;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
`;

const Submit = styled.button`
  font-size: 14px;
  font-weight: 600;
  border: none;
  color: #ffffff;
  background-color: #5f0080;
  width: 200px;
  height: 50px;
  margin: auto;
  margin-bottom: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const StarTitle = styled.div`
  width: 110px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  color: #999999;
  border-right: 1px solid #dddfe1;
`;

const StarContainer = styled.div`
  display: flex;
  height: 40px;
  line-height: 40px;
`;

const StarReviewContainer = styled.div``;

const TotalStarContainer = styled.div`
  display: flex;
  height: 40px;
  line-height: 40px;
  width: 888px;
  border-top: 1px solid #dddfe1;
`;

const CommonProductStar = styled.div`
  display: flex;
  height: 160px;
  line-height: 160px;
`;

const CommonStarTitle = styled.div`
  width: 110px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 160px;
  color: #999999;
  border-right: 1px solid #dddfe1;
`;
