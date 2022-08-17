import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/header/Header';
import ReviewList from '../components/subscribeListPage/ReviewList';
import { review } from '../lib/review';

const SubscribePage = () => {
  const [selected, setSelected] = useState(false);

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
