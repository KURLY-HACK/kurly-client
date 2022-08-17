import React from 'react';
import styled from 'styled-components';
import ReviewList from '../../subscribeListPage/ReviewList';

const Review = ({
  review,
}: {
  review: {
    id: number;
    product: string;
    content: string;
    image: string;
    writer: string;
    date: string;
    help: number;
  }[];
}) => {
  return (
    <Container>
      <Title>PRODUCT REVIEW</Title>
      <Description>
        상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은
        사전동의 없이 담당 게시판으로 이동될 수 있습니다.
      </Description>
      <Description>
        배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1
        문의에 남겨주세요.
      </Description>
      <ReviewList review={review} />
      <WriteButton>후기쓰기</WriteButton>
    </Container>
  );
};

export default Review;

const Container = styled.section`
  margin-top: 70px;
  margin-bottom: 50px;

  line-height: 120%;
`;
const Title = styled.section`
  font-size: 13px;
  font-weight: 700;

  color: #333333;
`;
const Description = styled.section`
  font-size: 12px;
  font-weight: 700;

  color: #666666;
`;
const WriteButton = styled.section`
  background: #795b8f;
  border: 1px solid #5f0080;

  font-size: 13px;
  font-weight: 500;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;

  float: right;

  width: 130px;
  height: 32px;

  cursor: pointer;

  :hover {
    background: #ffffff;
    border: 1px solid #5f0080;

    color: #5f0080;
  }
`;
