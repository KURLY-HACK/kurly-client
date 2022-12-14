import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionComponent from './QuestionComponent';
import QuestionDetail from './QuestionDetail';

const questions = [
  {
    id: 1,
    title: '주문 관련',
    content: '주문했는데 너무 늦게 도착하네요',
    writer: '주*정',
    date: '2022-08-15',
    resolve: 1,
  },
  {
    id: 2,
    title: '우유 터짐',
    content: '포장에 신경 써주세요',
    writer: '김*연',
    date: '2022-08-14',
    resolve: 0,
  },
  {
    id: 3,
    title: '유통기한이 너무 짧아요',
    content: '',
    writer: '김*림',
    date: '2022-08-13',
    resolve: 1,
  },
];

const Question = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <Title>PRODUCT Q&A</Title>
      <Description>
        배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1
        문의에 남겨주세요.
      </Description>
      <QuestionBox>
        <QuestionColumns>
          <Column>제목</Column>
          <Column>작성자</Column>
          <Column>작성일</Column>
          <Column>상태</Column>
        </QuestionColumns>
        {questions.map((data) => (
          <section key={data.id} onClick={() => setSelected(data.id)}>
            <QuestionComponent question={data} />
            {selected === data.id && <QuestionDetail question={data.content} />}
          </section>
        ))}
      </QuestionBox>
      <WriteButton>문의하기</WriteButton>
    </Container>
  );
};

export default Question;

const Container = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;

  line-height: 120%;
`;
const Title = styled.section`
  font-size: 13px;
  font-weight: 700;

  color: #333333;
`;
const Description = styled.section`
  font-size: 12px;
  font-weight: 700;

  color: #666666;
`;
const QuestionBox = styled.section`
  margin-top: 15px;

  border-top: 2px solid #522772;
  border-bottom: 1px solid #522772;
`;
const QuestionColumns = styled.section`
  display: grid;
  grid-template-columns: 715px 80px 120px 80px;
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
const WriteButton = styled.section`
  background: #795b8f;
  border: 1px solid #5f0080;

  font-size: 13px;
  font-weight: 500;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;

  float: right;

  width: 130px;
  height: 32px;

  cursor: pointer;

  :hover {
    background: #ffffff;
    border: 1px solid #5f0080;

    color: #5f0080;
  }
`;
