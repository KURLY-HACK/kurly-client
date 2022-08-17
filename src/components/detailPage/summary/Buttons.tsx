import React, { useState } from 'react';
import styled from 'styled-components';

const Buttons = () => {
  const [heart, setHeart] = useState(false);
  const [toast, setToast] = useState(false);

  const showToast = () => {
    new Promise((resolve) => {
      setToast(true);
      setTimeout(() => {
        resolve(setToast(false));
      }, 5000);
    });
  };

  return (
    <Container>
      <IconContainer onClick={() => setHeart(!heart)}>
        <img
          alt="heart"
          src={`/images/detailPage/heart-${heart ? 'active' : 'inactive'}.svg`}
        />
      </IconContainer>
      <IconContainer>
        <img alt="alarm" src={`/images/detailPage/alarm.svg`} />
      </IconContainer>
      <CartButton onClick={() => showToast()}>장바구니 담기</CartButton>
      {toast && <Toast>장바구니에 담겼습니다!</Toast>}
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
const Toast = styled.section`
  width: 150px;

  position: fixed;
  bottom: 50px;
  left: calc(50vw - 75px);

  background: rgba(51, 51, 51, 0.5);
  color: #ffffff;

  border-radius: 10px;

  padding: 15px 20px;
`;
