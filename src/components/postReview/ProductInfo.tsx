import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  image: string;
  productName: string;
}

const ProductInfo: FC<Props> = ({ image, productName }) => {
  return (
    <Wrapper>
      <img src={image} width={80} height={103} />
      <ProductNameContainer>
        <SubProductName>{productName}</SubProductName>
        <ProductName>{productName}</ProductName>
      </ProductNameContainer>
    </Wrapper>
  );
};

export default ProductInfo;

const Wrapper = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 15px;
  display: flex;
  border-bottom: 1px solid #dddfe1;
`;
const ProductNameContainer = styled.div`
  padding-left: 26px;
  padding-top: 33px;
`;
const SubProductName = styled.div`
  font-size: 12px;
  color: #666666;
  padding-bottom: 7px;
`;
const ProductName = styled.div`
  font-size: 16px;
  color: #333333;
`;
