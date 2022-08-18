import React, { useState } from 'react';
import styled from 'styled-components';
import Stars from './Stars';

const Rating = () => {
  const [fresh, setFresh] = useState(true);

  return (
    <Container>
      <StarBox>
        <Text>총점</Text>
        <Stars rate={1} />
        {fresh && (
          <>
            <Text>맛</Text>
            <Stars rate={2} />
            <Text>신선도</Text>
            <Stars rate={4} />
            <Text>배송상태</Text>
            <Stars rate={5} />
          </>
        )}
      </StarBox>
      <Writer>김*연</Writer>
    </Container>
  );
};

export default Rating;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;
const Text = styled.section`
  font-size: 12px;
  color: #666666;

  margin-right: 12px;
  margin-top: 2px;
`;
const StarBox = styled.section`
  display: flex;
`;
const Writer = styled.section`
  font-size: 14px;
  color: #333333;

  letter-spacing: 2px;
`;
