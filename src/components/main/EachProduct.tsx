import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  image: string;
  name: string;
  price: string;
}
const EachProduct: FC<Props> = ({ image, name, price }) => {
  return (
    <Wrapper>
      <ProductImage>
        <img src={image} width={249} height={320} />
      </ProductImage>
      <ProductName>{name}</ProductName>
      <ProductcPrice>{price}</ProductcPrice>
    </Wrapper>
  );
};

export default EachProduct;

const Wrapper = styled.div`
  width: 249px;
  height: 390px;
  padding-right: 16px;
`;
const ProductImage = styled.div`
  width: 249px;
  height: 320px;
  overflow: hidden;
`;

const ProductName = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #333333;
  padding-top: 14px;
`;
const ProductcPrice = styled.div`
  padding-top: 8px;
  font-weight: 800;
  font-size: 16px;
  color: #333333;
`;
