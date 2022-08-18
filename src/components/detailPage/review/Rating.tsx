import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Stars from './Stars';

const Rating = ({
  rate,
  name,
  id,
}: {
  rate: number[];
  name: string;
  id: string;
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <StarBox>
        <Text>총점</Text>
        <Stars rate={rate[0]} />
        {rate.length === 4 && (
          <>
            <Text>맛</Text>
            <Stars rate={rate[1]} />
            <Text>신선도</Text>
            <Stars rate={rate[2]} />
            <Text>배송상태</Text>
            <Stars rate={rate[3]} />
          </>
        )}
      </StarBox>
      <Writer onClick={() => navigate(`/subscribe/${id}`)}>
        {name.slice(0, 1)}*{name.slice(2)}
      </Writer>
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

  cursor: pointer;
`;
