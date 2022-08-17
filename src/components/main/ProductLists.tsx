import React, { useState } from 'react';
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

  const [isLeftScrollButtonHover, setIsLeftScrollButtonHover] = useState(false);
  const [isRightScrollButtonHover, setIsRightScrollButtonHover] =
    useState(false);

  //   const handleScrollButton=()

  return (
    <Wrapper>
      <LeftScrollButton
        onMouseOver={() => setIsLeftScrollButtonHover(true)}
        onMouseOut={() => setIsLeftScrollButtonHover(false)}
      >
        {isLeftScrollButtonHover ? (
          <img
            src="/images/scroll/activeLeftScroll.svg"
            width={60}
            height={60}
          />
        ) : (
          <img
            src="images/scroll/inactiveLeftScroll.svg"
            width={60}
            height={60}
          />
        )}
      </LeftScrollButton>
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
      <RightScrollButton
        onMouseOver={() => setIsRightScrollButtonHover(true)}
        onMouseOut={() => setIsRightScrollButtonHover(false)}
      >
        {isRightScrollButtonHover ? (
          <img
            src="/images/scroll/activeRightScroll.svg"
            width={60}
            height={60}
          />
        ) : (
          <img
            src="images/scroll/inactiveRightScroll.svg"
            width={60}
            height={60}
          />
        )}
      </RightScrollButton>
    </Wrapper>
  );
};

export default ProductLists;

const Wrapper = styled.div`
  display: flex;
`;

const ProductListsContainer = styled.div`
  margin: auto;
  display: flex;
  width: 1050px;
  height: 410px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const LeftScrollButton = styled.button`
  margin-top: 130px;
  margin-left: 120px;
  margin-right: 10px;
  width: 60px;
  height: 60px;
  z-index: 1;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const RightScrollButton = styled.button`
  margin-top: 130px;
  margin-right: 140px;
  width: 60px;
  height: 60px;
  z-index: 1;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
