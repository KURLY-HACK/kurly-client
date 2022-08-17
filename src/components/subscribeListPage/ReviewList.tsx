import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewComponent from '../detailPage/review/ReviewComponent';
import ReviewDetail from '../detailPage/review/ReviewDetail';

const ReviewList = ({
  review,
}: {
  review: {
    id: number;
    product: string;
    content: string;
    image: string;
    writer: string;
    date: string;
    help: number;
  }[];
}) => {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <ReviewBox>
        <ReviewColumns>
          <Column>번호</Column>
          <Column>내용</Column>
          <Column>작성자</Column>
          <Column>작성일</Column>
          <Column>도움</Column>
        </ReviewColumns>
        {review.map((data) => (
          <section key={data.id} onClick={() => setSelected(data.id)}>
            {selected === data.id ? (
              <ReviewDetail review={data} />
            ) : (
              <ReviewComponent review={data} />
            )}
          </section>
        ))}
      </ReviewBox>
    </Container>
  );
};

export default ReviewList;

const Container = styled.section`
  line-height: 120%;
`;
const ReviewBox = styled.section`
  margin-top: 15px;

  border-top: 2px solid #522772;
  border-bottom: 1px solid #522772;
`;
const ReviewColumns = styled.section`
  display: grid;
  grid-template-columns: 75px 640px 80px 120px 80px;
`;
const Column = styled.span`
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #666666;
  font-size: 12px;
  font-weight: 700;
`;
