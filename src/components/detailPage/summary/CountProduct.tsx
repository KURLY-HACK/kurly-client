import React, { Dispatch } from 'react';
import styled from 'styled-components';

const CountProduct = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<number>;
}) => {
  return (
    <Container>
      <Title>구매수량</Title>
      <Buttons>
        <Button
          alt="minus"
          src={`/images/detailPage/minus-${
            count === 0 ? 'inactive' : 'active'
          }.svg`}
          onClick={() => count !== 0 && setCount(count - 1)}
        />
        <CountText>{count}</CountText>
        <Button
          alt="plus"
          src="/images/detailPage/plus.svg"
          onClick={() => setCount(count + 1)}
        />
      </Buttons>
    </Container>
  );
};

export default CountProduct;

const Container = styled.section`
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  padding: 17px 0;

  display: flex;
  align-items: center;
`;
const Title = styled.section`
  font-size: 15px;
  color: #666666;

  width: 128px;
`;
const Buttons = styled.section`
  border: 1px solid #dddfe1;
  border-radius: 3px;

  width: 88px;
  height: 30px;

  display: flex;
  align-items: center;
`;
const Button = styled.img`
  width: 28px;
  height: 28px;

  cursor: pointer;
`;
const CountText = styled.section`
  font-size: 14px;
  color: #333333;

  width: 32px;

  text-align: center;
`;
