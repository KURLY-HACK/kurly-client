import React from 'react';
import styled from 'styled-components';
import Summary from '../components/detailPage/Summary';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 1060px;
`;

const DetailPage = () => {
  return (
    <Container>
      <Summary />
      detail
    </Container>
  );
};

export default DetailPage;
