import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Review from './Review';

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
            &nbsp;(1234)
          </Description>
        </Tab>
        <Tab selected={selected} curIndex={4} onClick={() => setSelected(4)}>
          문의
        </Tab>
      </TabBox>
      {selected === 3 ? <Review /> : <Contents></Contents>}
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
        `
      : css`
          background: #fafafa;
          color: #666666;
        `}

  cursor: pointer;
`;
const Description = styled.section<{ selected: number; curIndex: number }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ selected, curIndex }) =>
    selected === curIndex ? '#5f0080' : '#999999'};
`;
const Contents = styled.section``;
