import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IReview } from '../../../lib/interface';
import { RootState, useAppSelector } from '../../../store/store';
import FreshLineChart from '../../chart/FreshLineChart';
import ReviewLineChart from '../../chart/ReviewLineChart';
import ReviewList from '../../subscribeListPage/ReviewList';

const Review = ({ review, id }: { review: IReview[]; id: string }) => {
  const navigate = useNavigate();
  const [isFreshFood, setIsFreshFood] = useState(false);

  const product = useAppSelector((state: RootState) => state.product.product);
  const productType = product.type;

  return (
    <Container>
      {isFreshFood ? (
        <>
          <ChangeGraphButton
            onClick={() => {
              setIsFreshFood(false);
            }}
          >
            월별 총 별점
          </ChangeGraphButton>
          <GraphContainer>
            {productType === 1 ? (
              <FreshLineChart id={id} />
            ) : (
              <DescriptionText>
                신선 식품이 아니므로 주간 상세 별점이 제공되지 않습니다.{' '}
              </DescriptionText>
            )}
          </GraphContainer>
        </>
      ) : (
        <>
          <ChangeGraphButton
            onClick={() => {
              setIsFreshFood(true);
            }}
          >
            주간 상세 별점
          </ChangeGraphButton>
          <GraphContainer>
            <ReviewLineChart id={id} />
          </GraphContainer>
        </>
      )}
      <Title>PRODUCT REVIEW</Title>
      <Description>
        상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은
        사전동의 없이 담당 게시판으로 이동될 수 있습니다.
      </Description>
      <Description>
        배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1
        문의에 남겨주세요.
      </Description>
      <ReviewList review={review} kurlyviewName="" />
      <WriteButton onClick={() => navigate(`/post/${id}`)}>
        후기쓰기
      </WriteButton>
    </Container>
  );
};

export default Review;

const Container = styled.section`
  margin-top: 30px;
  margin-bottom: 50px;

  line-height: 120%;
`;
const Title = styled.section`
  font-size: 13px;
  font-weight: 700;
  color: #333333;

  margin-top: 50px;
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

const GraphContainer = styled.div`
  margin: 20px 0;
`;
const ChangeGraphButton = styled.div`
  width: 130px;
  height: 32px;
  background: #795b8f;
  border: 1px solid #5f0080;
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  display: flex;
  float: right;
  z-index: 1;
  &:hover {
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #5f0080;
    color: #5f0080;
  }
`;

const DescriptionText = styled.div`
  width: 1007px;
  padding-left: 70px;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
  height: 200px;
  line-height: 200px;
`;
