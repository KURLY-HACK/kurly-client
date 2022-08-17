import React from 'react';
import styled from 'styled-components';

const QuestionDetail = ({
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
      <QuestionMark>Q</QuestionMark>
      <Description>{content}</Description>
    </Container>
  );
};

export default QuestionDetail;

const Container = styled.section`
  padding: 30px 0;

  color: #666666;
  background: #fafafa;

  display: flex;
  align-items: center;
`;
const QuestionMark = styled.section`
  margin-left: 20px;

  width: 30px;
  height: 30px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #bd76ff;

  color: #ffffff;
  font-weight: 700;
`;
const Description = styled.section`
  font-size: 13px;

  margin-left: 10px;
  margin-top: 6px;
`;
