import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Question from './question/Question';
import Review from './review/Review';

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

const Tabs = () => {
  const [selected, setSelected] = useState(1);

  return (
    <Container>
      <TabBox>
        <Tab selected={selected} curIndex={1} onClick={() => setSelected(1)}>
          상품설명
        </Tab>
        <Tab selected={selected} curIndex={2} onClick={() => setSelected(2)}>
          상세정보
        </Tab>
        <Tab selected={selected} curIndex={3} onClick={() => setSelected(3)}>
          후기
          <Description selected={selected} curIndex={3}>
            &nbsp;({review.length})
          </Description>
        </Tab>
        <Tab selected={selected} curIndex={4} onClick={() => setSelected(4)}>
          문의
        </Tab>
      </TabBox>
      {selected === 1 && (
        <Contents>
          <img alt="contents" src="" width={1007} />
        </Contents>
      )}
      {selected === 2 && (
        <Contents>
          <img alt="information" src="" width={1007} />
        </Contents>
      )}
      {selected === 3 && <Review review={review} />}
      {selected === 4 && <Question />}
    </Container>
  );
};

export default Tabs;

const Container = styled.section`
  width: 1007px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TabBox = styled.section`
  margin-top: 56px;

  display: flex;
`;
const Tab = styled.section<{ selected: number; curIndex: number }>`
  width: 252px;
  height: 60px;

  font-size: 16px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #eeeeee;

  ${({ selected, curIndex }) =>
    selected === curIndex
      ? css`
          background: #ffffff;
          color: #5f0080;
          border-bottom: 1px solid #ffffff;
        `
      : css`
          background: #fafafa;
          color: #666666;
        `}

  cursor: pointer;
`;
const Contents = styled.section`
  margin: 50px 0;
`;
const Description = styled.section<{ selected: number; curIndex: number }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ selected, curIndex }) =>
    selected === curIndex ? '#5f0080' : '#999999'};
`;
