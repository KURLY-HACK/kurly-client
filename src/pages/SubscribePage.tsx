import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/header/Header';
import ReviewList from '../components/subscribeListPage/ReviewList';
import { getSubscribeUserThunk } from '../store/slices/subscribe/getSubscribeUserSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';

const review = [
  {
    review_id: '1',
    product_id: '1',
    product_type: 0,
    product_name: '전용목장우유 900mL',
    contents:
      '예전엔 우유가 이렇게 비싸단 생각은 안들었는데 브랜드 우유를 포함한 모든 생필품이 장난이 아닌 시대가 왔네요. 그럼에도 믿고 먹을 수 있는 연세우유를 2천원이 조금 안되는 금액으로 마실 수 있어 다행입니다.',

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
];

const SubscribePage = () => {
  const [selected, setSelected] = useState(false);
  const review = useAppSelector((state: RootState) => state.subscribe.review);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSubscribeUserThunk());
  }, []);

  return (
    <Container>
      <Header />
      <ReviewBox>
        <Profile>
          <Info>
            <img
              alt="profile"
              src="/images/subscribePage/profile.svg"
              width={200}
              height={220}
            />
            <Title>
              <Name>김*림</Name> 컬리뷰
            </Title>
          </Info>
          <SubscribeButton
            onClick={() => setSelected(!selected)}
            selected={selected}
          >
            {selected ? '리뷰 구독 해제하기' : '리뷰 구독하기'}
          </SubscribeButton>
        </Profile>
        <ReviewList review={review} />
      </ReviewBox>
    </Container>
  );
};

export default SubscribePage;

const Container = styled.section`
  margin-top: 106px;
  margin-bottom: 50px;

  min-width: 1060px;
`;
const Profile = styled.section`
  width: 1007px;
  margin-bottom: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Info = styled.section`
  display: flex;
  align-items: center;
`;
const Title = styled.section`
  font-size: 24px;
  font-weight: 600;

  color: #333333;

  margin-bottom: 20px;
  margin-left: 50px;
`;
const Name = styled.span`
  color: #5f0080;
  letter-spacing: 2px;
`;
const ReviewBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px;
`;
const SubscribeButton = styled.section<{ selected: boolean }>`
  width: 260px;
  height: 56px;

  border: 1px solid #5f0080;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ selected }) =>
    selected
      ? css`
          background: #5f0080;
          color: #ffffff;
        `
      : css`
          background: #ffffff;
          color: #5f0080;
        `}

  cursor: pointer;
`;
