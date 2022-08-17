import React from 'react';
import styled from 'styled-components';

const Buttons = () => {
  return (
    <Container>
      <IconContainer>
        <img alt="heart" src={`/images/detailPage/heart-inactive.svg`} />
      </IconContainer>
      <IconContainer>
        <img alt="alarm" src={`/images/detailPage/alarm.svg`} />
      </IconContainer>
      <CartButton>장바구니 담기</CartButton>
    </Container>
  );
};

export default Buttons;

const Container = styled.section`
  margin-top: 20px;
  display: flex;
`;
const IconContainer = styled.section`
  border: 1px solid #dddddd;
  border-radius: 3px;

  width: 56px;
  height: 56px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-left: 8px;
  }
`;
const CartButton = styled.section`
  width: 432px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #5f0080;
  color: #ffffff;
  border-radius: 3px;

  margin-left: 8px;

  cursor: pointer;
`;
