import React from 'react';
import styled from 'styled-components';
import Rating from './Rating';

const ReviewDetail = ({
  review: { id, product, content, image, writer, date, help },
}: {
  review: {
    id: number;
    product: string;
    content: string;
    image: string;
    writer: string;
    date: string;
    help: number;
  };
}) => {
  return (
    <Container>
      {image && (
        <Image>
          {' '}
          <img alt="preview" src={image} width={560} />
        </Image>
      )}
      <Contents>
        <Rating />
        <Title>{product}</Title>
        <Description>{content}</Description>
      </Contents>
      <ButtonBox>
        <HelpButton>도움이 돼요 {help}</HelpButton>
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
