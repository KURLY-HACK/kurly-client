import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import ReviewList from '../components/subscribeListPage/ReviewList';
import { review } from '../lib/review';

const SubscribeListPage = () => {
  return (
    <section>
      <Header />
      <Container>
        <Title>
          <Name>주효정님</Name>의 구독 리스트입니다
        </Title>
        <ReviewList review={review} />
      </Container>
    </section>
  );
};

export default SubscribeListPage;

const Container = styled.section`
  margin-top: 106px;
  margin-bottom: 50px;

  min-width: 1007px;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.section`
  font-size: 24px;
  font-weight: 500;

  color: #333333;

  margin-bottom: 45px;
`;
const Name = styled.span`
  color: #5f0080;
  font-weight: 700;
`;
