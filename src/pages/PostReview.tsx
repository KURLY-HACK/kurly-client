import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import AddReview from '../components/postReview/AddReview';
import ProductInfo from '../components/postReview/ProductInfo';
import { RootState, useAppSelector } from '../store/store';

const PostReview = () => {
  const product = useAppSelector((state: RootState) => state.product.product);

  return (
    <Wrapper>
      <Header />
      <ReviewContainer>
        <PageTitle>후기작성</PageTitle>
        <ProductInfo
          image={product.product_photo}
          productName={product.title}
        />
        <AddReview />
      </ReviewContainer>
    </Wrapper>
  );
};

export default PostReview;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewContainer = styled.div`
  padding-top: 166px;
  width: 1007px;
  margin: auto;
`;

const PageTitle = styled.div`
  color: #333333;
  font-size: 24px;
  font-weight: 600;
  width: 1007px;
  height: 36px;
  padding-bottom: 34px;
  border-bottom: 2px solid #522772;
`;
