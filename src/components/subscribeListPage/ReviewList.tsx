import React, { useState } from 'react';
import styled from 'styled-components';
import { IReview } from '../../lib/interface';
import ReviewComponent from '../detailPage/review/ReviewComponent';
import ReviewDetail from '../detailPage/review/ReviewDetail';

const ReviewList = ({
  review,
  kurlyviewName,
}: {
  review: IReview[];
  kurlyviewName: string;
}) => {
  const [selected, setSelected] = useState('0');

  console.log(kurlyviewName);
  function reviewLists() {
    if (kurlyviewName === '') {
      return (
        <div>
          {review &&
            review.map((data, idx) => (
              <section key={data.id} onClick={() => setSelected(data.id)}>
                {selected === data.id ? (
                  <ReviewDetail review={data} />
                ) : (
                  <ReviewComponent review={data} idx={idx} />
                )}
              </section>
            ))}
        </div>
      );
    }
    if (kurlyviewName !== '') {
      return review
        .filter((data) => data.memberName === kurlyviewName)
        .map((data, idx) => (
          <section key={data.id} onClick={() => setSelected(data.id)}>
            {selected === data.id ? (
              <ReviewDetail review={data} />
            ) : (
              <ReviewComponent review={data} idx={idx} />
            )}
          </section>
        ));
    }
  }

  console.log(reviewLists());

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
        {reviewLists()}
      </ReviewBox>
    </Container>
  );
};

export default ReviewList;

const Container = styled.section`
  line-height: 120%;

  width: 1007px;
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
