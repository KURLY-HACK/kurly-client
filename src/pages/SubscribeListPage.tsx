import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import ReviewList from '../components/subscribeListPage/ReviewList';
import { getSubscribeListThunk } from '../store/slices/subscribe/getSubscribeListSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';

/*const review = [
  {
    review_id: '1',
    product_id: '1',
    product_type: 0,
    product_name: '전용목장우유 900mL',
    contents:
      '예전엔 우유가 이렇게 비싸단 생각은 안들었는데 브랜드 우유를 포함한 모든 생필품이 장난이 아닌 시대가 왔네요. 그럼에도 믿고 먹을 수 있는 연세우유를 2천원이 조금 안되는 금액으로 마실 수 있어 좋습니다.',

    member_id: '1',
    member_name: '작성자',
    date: '2022-08-18T00:00:00.000Z',

    rating: 2,
    photo: 'https://img-cf.kurly.com/shop/data/goods/1637154205701l0.jpg',
  },
  {
    review_id: '2',
    product_id: '2',
    product_type: 0,
    product_name: '전용목장우유 900mL',

    member_id: '2',
    member_name: '작성자',
    date: '2022-08-18T00:00:00.000Z',

    contents:
      '저는 주로 집에 있는 요거트메이커를 이용해서 그릭요거트를 만들어 먹어요. 그릭요거트에는 우유가 700ml 가까이 필요한데 시중에 있는 우유를 계속 사기엔 좀 비싸다는 생각이 들어서 비교적 가격이 저렴하고 좋습니다.',
    rating: 5,
    photo: '',
  },
  {
    review_id: '3',
    product_id: '3',
    product_type: 0,
    product_name: '전용목장우유 900mL',

    member_id: '3',
    member_name: '작성자',
    date: '2022-08-18T00:00:00.000Z',

    contents: '맛있어요~!',
    rating: 4,
    photo: 'https://img-cf.kurly.com/shop/data/goods/1637154205701l0.jpg',
  },
];*/

const SubscribeListPage = () => {
  const review = useAppSelector(
    (state: RootState) => state.subscribeList.subscribeList
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSubscribeListThunk());
  }, []);

  return (
    <Container>
      <Header />
      <ReviewBox>
        <Title>
          <Name>주효정님</Name>의 구독 리스트입니다
        </Title>
        <ReviewList review={review} />
      </ReviewBox>
    </Container>
  );
};

export default SubscribeListPage;

const Container = styled.section`
  margin-top: 106px;
  margin-bottom: 50px;

  min-width: 1060px;
`;
const Title = styled.section`
  font-size: 24px;
  font-weight: 500;

  color: #333333;

  margin-bottom: 45px;

  width: 1007px;
`;
const Name = styled.span`
  color: #5f0080;
  font-weight: 700;
`;
const ReviewBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px;
`;
