import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Summary from '../components/detailPage/summary/Summary';
import Tabs from '../components/detailPage/Tabs';
import Header from '../components/header/Header';
import { getProductThunk } from '../store/slices/product/getProductSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';

const DetailPage = () => {
  const product = useAppSelector((state: RootState) => state.product.product);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getProductThunk(pathname.split('/').slice(-1)[0]));
  }, []);

  return (
    <section>
      <Header />
      <Container>
        {product && (
          <>
            <Summary product={product} />
            <Tabs
              product_photo={product.product_photo}
              detailed_photo={product.detailed_photo}
              id={pathname.split('/').slice(-1)[0]}
            />
          </>
        )}
      </Container>
    </section>
  );
};

export default DetailPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 1060px;
  padding: 0 20px;
`;
