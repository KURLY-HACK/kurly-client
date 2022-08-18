import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: string;
  image: string;
  name: string;
  price: number;
}
const EachProduct: FC<Props> = ({ id, image, name, price }) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/detail/${id}`)}>
      <ProductImage>
        <img src={image} width={249} height={320} />
      </ProductImage>
      <ProductName>{name}</ProductName>
      <ProductcPrice>{price}원</ProductcPrice>
    </Wrapper>
  );
};

export default EachProduct;

const Wrapper = styled.div`
  width: 249px;
  height: 390px;
  padding-right: 16px;
  &:hover {
    cursor: pointer;
  }
`;
const ProductImage = styled.div`
  width: 249px;
  height: 320px;
  overflow: hidden;
`;

const ProductName = styled.div`
  width: 249px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
