import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/header/Header';
import ReviewList from '../components/subscribeListPage/ReviewList';
import { getSubscribeKurlyviewsThunk } from '../store/slices/subscribe/getSubscribeKurlyviewsSlice';
import { getSubscribeListThunk } from '../store/slices/subscribe/getSubscribeListSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';

const SubscribeListPage = () => {
  const review = useAppSelector(
    (state: RootState) => state.subscribeList.subscribeList
  );
  const { name } = useAppSelector((state: RootState) => state.login);
  const kurlyviews = useAppSelector(
    (state: RootState) => state.subscribeKurlyviews.kurlyviews
  );
  const [clickedKurlyview, setClickedKurlyview] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSubscribeListThunk());
    dispatch(getSubscribeKurlyviewsThunk());
  }, []);

  return (
    <Container>
      <Header />
      <ReviewBox>
        <Title>
          <Name>{name}님</Name>의 구독 리스트입니다
          <KurlyviewLists>
            {kurlyviews?.map((kurlyview) => {
              return (
                <Kurlyview
                  onClick={() =>
                    clickedKurlyview === kurlyview.name
                      ? setClickedKurlyview('')
                      : setClickedKurlyview(kurlyview.name)
                  }
                  selected={clickedKurlyview === kurlyview.name}
                >
                  {kurlyview.name}
                </Kurlyview>
              );
            })}
          </KurlyviewLists>
        </Title>
        <ReviewList review={review} kurlyviewName={clickedKurlyview} />
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

const KurlyviewLists = styled.div`
  display: flex;
  padding-top: 50px;
`;

const Kurlyview = styled.div<{ selected: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 20px;

  text-align: center;
  line-height: 100px;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;

  cursor: pointer;

  ${({ selected }) =>
    selected
      ? css`
          color: #5f0080;
          background-color: #ffffff;
          border: 1px solid #5f0080;
        `
      : css`
          background-color: #5f0080;
          color: #ffffff;
        `}

  &:hover {
    ${({ selected }) =>
      !selected &&
      css`
        color: #5f0080;
        background-color: #ffffff;
        border: 1px solid #5f0080;
      `}
  }
`;
