import React from 'react';
import styled from 'styled-components';
import EachProduct from './EachProduct';

const ProductLists = () => {
  const productLists = [
    {
      id: 1,
      image: '/images/testProduct.png',
      name: '만두만두물만두',
      price: '6,750원',
    },
    {
      id: 2,
      image: '/images/testProduct.png',
      name: '만두만두물만두',
      price: '6,750원',
    },
    {
      id: 3,
      image: '/images/testProduct.png',
      name: '만두만두물만두',
      price: '6,750원',
    },
    {
      id: 4,
      image: '/images/testProduct.png',
      name: '만두만두물만두',
      price: '6,750원',
    },
    {
      id: 5,
      image: '/images/testProduct.png',
      name: '만두만두물만두',
      price: '6,750원',
    },
    {
      id: 7,
      image: '/images/testProduct.png',
      name: '만두만두물만두',
      price: '6,750원',
    },
  ];

  return (
    <ProductListsContainer>
      {productLists?.map((product) => {
        return (
          <>
            <EachProduct
              key={product.id + `${new Date()}`}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </>
        );
      })}
    </ProductListsContainer>
  );
};

export default ProductLists;

const ProductListsContainer = styled.div`
  margin: auto;
  display: flex;
  width: 1060px;
  height: 410px;
  overflow: auto;
`;
