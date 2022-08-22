import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IReview } from '../../../lib/interface';

const ReviewComponent = ({
  review: {
    id,
    productId,
    productName,
    memberId,
    memberName,
    date,
    contents,
    photo,
  },
  idx,
}: {
  review: IReview;
  idx: number;
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Text>{idx + 1}</Text>
      <ContentWrapper>
        {photo && <img alt="preview" src={photo} width={150} height={150} />}
        <Contents image={photo}>
          <Title onClick={() => navigate(`/detail/${productId}`)}>
            {productName}
          </Title>
          <Description>{contents}</Description>
        </Contents>
      </ContentWrapper>
      <Text onClick={() => navigate(`/subscribe/${memberId}`)}>
        {memberName.slice(0, 1)}*{memberName.slice(2)}
      </Text>
      <Text>{date.slice(0, 10)}</Text>
      <Text>1</Text>
    </Container>
  );
};

export default ReviewComponent;

const Container = styled.section`
  display: grid;
  grid-template-columns: 75px 640px 80px 120px 80px;

  padding: 30px 0;
  border-top: 1px solid #f4f4f4;

  color: #666666;

  cursor: pointer;
`;
const Text = styled.section`
  font-size: 12px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled.section`
  display: flex;
`;
const Contents = styled.section<{ image: string }>`
  margin-left: ${({ image }) => image && 35}px;

  width: 450px;
`;
const Title = styled.section`
  font-size: 15px;
`;
const Description = styled.section`
  font-size: 12px;
  margin-top: 20px;

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
