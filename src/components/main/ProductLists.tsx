import React, { useEffect } from 'react';
import styled from 'styled-components';
import EachProduct from './EachProduct';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import { getMainProductThunk } from '../../store/slices/main/getMainProductSlice';

const ProductLists = () => {
  const productLists = useAppSelector(
    (state: RootState) => state.mainproduct.products
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMainProductThunk());
  }, []);

  return (
    <Wrapper>
      <ProductListsContainer>
        <StyledSlider {...settings}>
          {productLists?.map((product) => {
            return (
              <EachProduct
                id={product.id}
                key={product.id + `${new Date()}`}
                image={product.photo}
                name={product.title}
                price={product.price}
              />
            );
          })}
        </StyledSlider>
      </ProductListsContainer>
    </Wrapper>
  );
};

export default ProductLists;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1050px;
    margin: 0 auto;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const ProductListsContainer = styled.div`
  padding: 0 30px;
  margin: auto;
  display: flex;
  width: 1050px;
  height: 410px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const NextScrollButton = styled.div`
  top: calc(50% - 50px);
  transform: translate(0%, -50%);
  width: 60px;
  height: 60px;
  overflow: visible;
  z-index: 2;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const PrevScrollButton = styled.div`
  top: calc(50% - 50px);
  transform: translate(-10%, -50%);
  width: 60px;
  height: 60px;
  overflow: visible;
  z-index: 2;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const settings = {
  dots: false,
  isFinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  prevArrow: (
    <PrevScrollButton>
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    </PrevScrollButton>
  ),
  nextArrow: (
    <NextScrollButton>
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    </NextScrollButton>
  ),
};
