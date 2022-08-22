import React from 'react';
import Header from '../components/header/Header';
import ProductLists from '../components/main/ProductLists';
import styled from 'styled-components';
import RecommendLists from '../components/main/RecommendLists';
import { RootState, useAppSelector } from '../store/store';

const MainPage = () => {
  const isLoginned = useAppSelector((state: RootState) => state.login.success);

  return (
    <div>
      <Header />
      {isLoginned ? (
        <>
          <MainText>구독 중인 컬리뷰가 추천하는 상품</MainText>
          <RecommendLists />
        </>
      ) : (
        <MainText>로그인 후에 컬리뷰의 추천 상품을 확인해보세요!</MainText>
      )}
      <MainText>신상품</MainText>
      <ProductLists />
    </div>
  );
};

export default MainPage;

const MainText = styled.div`
  margin-top: 110px;
  margin-bottom: 27px;
  height: 49px;
  font-size: 28px;
  text-align: center;
  color: #333333;
  font-weight: 500;
`;
