import React from 'react';
import styled from 'styled-components';

const ProductPrice = ({ count, price }: { count: number; price: number }) => {
  return (
    <Container>
      <Title>총 상품금액 :</Title>
      <Price>
        {(price * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </Price>
      <Unit>원</Unit>
    </Container>
  );
};

export default ProductPrice;

const Container = styled.section`
  margin-top: 28px;
  color: #333333;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Title = styled.span`
  font-size: 13px;
  font-weight: 500;

  margin-right: 13px;
  margin-bottom: 5px;
`;
const Price = styled.span`
  font-size: 32px;
  font-weight: 600;
`;
const Unit = styled.span`
  font-size: 20px;
  font-weight: 600;

  margin-left: 5px;
  margin-bottom: 5px;
`;
