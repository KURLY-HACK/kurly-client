import React from 'react';
import styled from 'styled-components';
import { IReview } from '../../../lib/interface';
import Rating from './Rating';

const ReviewDetail = ({
  review: {
    product_name,
    contents,
    rating,
    fresh_score,
    taste_score,
    delivery_score,
    member_name,
    photo,
  },
}: {
  review: IReview;
}) => {
  return (
    <Container>
      {photo && (
        <Image>
          <img alt="preview" src={photo} width={560} />
        </Image>
      )}
      <Contents>
        <Rating
          rate={
            fresh_score && taste_score && delivery_score
              ? [rating, taste_score, fresh_score, delivery_score]
              : [rating]
          }
          name={member_name}
        />
        <Title>{product_name}</Title>
        <Description>{contents}</Description>
      </Contents>
      <ButtonBox>
        <HelpButton>도움이 돼요 1</HelpButton>
      </ButtonBox>
    </Container>
  );
};

export default ReviewDetail;

const Container = styled.section`
  padding-bottom: 30px;
  border-top: 1px solid #f4f4f4;

  color: #666666;
`;
const Image = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 30px;
`;
const Contents = styled.section`
  margin: 30px 110px 0 70px;
`;
const Title = styled.section`
  font-size: 15px;
  margin-top: 15px;
`;
const Description = styled.section`
  font-size: 12px;
  margin-top: 15px;
`;
const ButtonBox = styled.section`
  display: flex;
  justify-content: flex-end;

  margin-right: 30px;
  margin-top: 30px;
`;
const HelpButton = styled.section`
  width: 100px;
  height: 32px;

  background: #ffffff;
  border: 1px solid #5f0080;
  color: #5f0080;

  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
