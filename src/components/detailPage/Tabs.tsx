import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { getReviewThunk } from '../../store/slices/review/getReviewSlice';
import { RootState, useAppSelector, useAppDispatch } from '../../store/store';
import Question from './question/Question';
import Review from './review/Review';

const Tabs = ({
  product_photo,
  detailed_photo,
  id,
}: {
  product_photo: string;
  detailed_photo: string;
  id: string;
}) => {
  const [selected, setSelected] = useState(1);
  const review = useAppSelector((state: RootState) => state.review.review);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getReviewThunk(id));
  }, []);

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
          <img alt="contents" src={product_photo} width={1007} />
        </Contents>
      )}
      {selected === 2 && (
        <Contents>
          <img alt="information" src={detailed_photo} width={1007} />
        </Contents>
      )}
      {selected === 3 && <Review review={review} id={id} />}
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
