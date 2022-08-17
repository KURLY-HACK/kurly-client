import React from 'react';
import styled from 'styled-components';

const ReviewComponent = ({
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
      <Text>{id}</Text>
      <ContentWrapper>
        {image && <img alt="preview" src={image} width={150} height={150} />}
        <Contents image={image}>
          <Title>{product}</Title>
          <Description>{content}</Description>
        </Contents>
      </ContentWrapper>
      <Text>{writer}</Text>
      <Text>{date}</Text>
      <Text>{help}</Text>
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
`;
const Title = styled.section`
  font-size: 15px;
`;
const Description = styled.section`
  font-size: 12px;
  margin-top: 20px;
`;
