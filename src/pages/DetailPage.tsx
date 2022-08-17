import React from 'react';
import styled from 'styled-components';
import Summary from '../components/detailPage/Summary';
import Header from '../components/header/Header';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 1060px;
`;

const DetailPage = () => {
  return (
    <section>
      <Header />
      <Container>
        <Summary />
        detail
      </Container>
    </section>
  );
};

export default DetailPage;
