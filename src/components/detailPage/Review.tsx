import React, { useState } from 'react';
import styled from 'styled-components';
import FreshLineChart from '../chart/FreshLineChart';
import ReviewComponent from './ReviewComponent';
import ReviewDetail from './ReviewDetail';
import ReviewLineChart from '../chart/ReviewLineChart';

const review = [
  {
    id: 1,
    product: '전용목장우유 900mL',
    content:
      '예전엔 우유가 이렇게 비싸단 생각은 안들었는데 브랜드 우유를 포함한 모든 생필품이 장난이 아닌 시대가 왔네요. 그럼에도 믿고 먹을 수 있는 연세우유를 2천원이 조금 안되는 금액으로 마실 수 있어...',
    writer: '주*정',
    date: '2022-08-15',
    image: 'https://img-cf.kurly.com/shop/data/goods/1637154205701l0.jpg',
    help: 1,
  },
  {
    id: 2,
    product: '전용목장우유 900mL',
    content:
      '저는 주로 집에 있는 요거트메이커를 이용해서 그릭요거트를 만들어 먹어요. 그릭요거트에는 우유가 700ml 가까이 필요한데 시중에 있는 우유를 계속 사기엔 좀 비싸다는 생각이 들어서 비교적 가격이 저렴..',
    writer: '김*연',
    date: '2022-08-14',
    image: '',
    help: 0,
  },
  {
    id: 3,
    product: '전용목장우유 900mL',
    content: '맛있어요~!',
    writer: '김*림',
    date: '2022-08-13',
    image: 'https://img-cf.kurly.com/shop/data/goods/1637154205701l0.jpg',
    help: 1,
  },
];

const Review = () => {
  const [selected, setSelected] = useState(0);
  const [isFreshFood, setIsFreshFood] = useState(false);

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
            <FreshLineChart />
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
            <ReviewLineChart />
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
      <ReviewBox>
        <ReviewColumns>
          <Column>번호</Column>
          <Column>내용</Column>
          <Column>작성자</Column>
          <Column>작성일</Column>
          <Column>도움</Column>
        </ReviewColumns>
        {review.map((data) => (
          <section key={data.id} onClick={() => setSelected(data.id)}>
            {selected === data.id ? (
              <ReviewDetail review={data} />
            ) : (
              <ReviewComponent review={data} />
            )}
          </section>
        ))}
      </ReviewBox>
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
const ReviewBox = styled.section`
  margin-top: 15px;

  border-top: 2px solid #522772;
  border-bottom: 1px solid #522772;
`;
const ReviewColumns = styled.section`
  display: grid;
  grid-template-columns: 75px 640px 80px 120px 80px;
`;
const Column = styled.span`
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #666666;
  font-size: 12px;
  font-weight: 700;
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
