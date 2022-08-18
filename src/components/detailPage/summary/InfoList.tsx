import React from 'react';
import styled from 'styled-components';

const InfoList = ({
  info: { title, description },
}: {
  info: { title: string; description: string };
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default InfoList;

const Container = styled.section`
  border-top: 1px solid #f4f4f4;
  padding: 17px 0;

  display: flex;

  white-space: pre-line;
`;
const Title = styled.section`
  font-size: 15px;
  color: #666666;

  width: 128px;
`;
const Description = styled.section`
  font-size: 13px;
  color: #666666;

  width: 350px;

  line-height: 140%;
`;
