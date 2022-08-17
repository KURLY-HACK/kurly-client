import React from 'react';
import styled from 'styled-components';

const QuestionComponent = ({
  question: { id, title, content, writer, date, resolve },
}: {
  question: {
    id: number;
    title: string;
    content: string;
    writer: string;
    date: string;
    resolve: number;
  };
}) => {
  return (
    <Container>
      <ContentWrapper>
        <Title>{title}</Title>
      </ContentWrapper>
      <Text>{writer}</Text>
      <Text>{date}</Text>
      <Text>{resolve === 1 ? '답변완료' : '답변대기'}</Text>
    </Container>
  );
};

export default QuestionComponent;

const Container = styled.section`
  display: grid;
  grid-template-columns: 715px 80px 120px 80px;

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
const Title = styled.section`
  font-size: 14px;
  margin-left: 20px;
`;
