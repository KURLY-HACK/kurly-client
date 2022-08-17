import React from 'react';
import styled from 'styled-components';
import Summary from '../components/detailPage/summary/Summary';
import Tabs from '../components/detailPage/Tabs';
import Header from '../components/header/Header';

const DetailPage = () => {
  return (
    <section>
      <Header />
      <Container>
        <Summary />
        <Tabs />
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
`;
