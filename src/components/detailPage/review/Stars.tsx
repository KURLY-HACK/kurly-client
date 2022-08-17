import React from 'react';
import styled from 'styled-components';

const Stars = ({ rate }: { rate: number }) => {
  return (
    <Container>
      <img
        alt="star"
        src={`/images/detailPage/star-${rate >= 1 ? 'active' : 'inactive'}.svg`}
      />
      <img
        alt="star"
        src={`/images/detailPage/star-${rate >= 2 ? 'active' : 'inactive'}.svg`}
      />
      <img
        alt="star"
        src={`/images/detailPage/star-${rate >= 3 ? 'active' : 'inactive'}.svg`}
      />
      <img
        alt="star"
        src={`/images/detailPage/star-${rate >= 4 ? 'active' : 'inactive'}.svg`}
      />
      <img
        alt="star"
        src={`/images/detailPage/star-${rate >= 5 ? 'active' : 'inactive'}.svg`}
      />
    </Container>
  );
};

export default Stars;

const Container = styled.section`
  margin-right: 54px;
`;
