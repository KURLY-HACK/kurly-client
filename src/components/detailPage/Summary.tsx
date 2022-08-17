import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 54px;

  display: flex;
`;
const Image = styled.img`
  width: 430px;
  height: 552px;
`;
const Information = styled.section`
  width: 560px;

  margin-left: 70px;
`;
const Text = styled.section<{
  size: number;
  color: string;
  margin: number;
  strong: boolean;
}>`
  margin-top: ${({ margin }) => margin}px;
  font-size: ${({ size }) => size}px;
  color: #${({ color }) => color};
  font-weight: ${({ strong }) => strong && 500};
`;

const Summary = () => {
  return (
    <Container>
      <Image
        alt="product"
        src="https://img-cf.kurly.com/shop/data/goods/1637154205701l0.jpg"
      />
      <Information>
        <Text size={13} color="999999" margin={0} strong={false}>
          샛별배송
        </Text>
        <Text size={24} color="333333" margin={6} strong={true}>
          전용목장우유 900mL
        </Text>
        <section style={{ marginTop: 20, display: 'flex' }}>
          <Text size={28} color="333333" margin={0} strong={true}>
            2,070
          </Text>
          <Text size={20} color="333333" margin={9} strong={true}>
            &nbsp;원
          </Text>
        </section>
        <Text size={14} color="5f0080" margin={17} strong={false}>
          로그인 후, 적립 혜택이 제공됩니다.
        </Text>
      </Information>
    </Container>
  );
};

export default Summary;
