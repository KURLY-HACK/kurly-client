import React, { useState } from 'react';
import styled from 'styled-components';
import { IProduct } from '../../../lib/interface';
import Buttons from './Buttons';
import CountProduct from './CountProduct';
import InfoList from './InfoList';
import ProductPrice from './ProductPrice';

const Summary = ({
  product: { title, price, photo, h1, details },
}: {
  product: IProduct;
}) => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Image alt="product" src={photo} />
      <Information>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text size={25} color="333333" margin={3} strong={true}>
            {title}
          </Text>
          <ShareButton>
            <img alt="share" src="/images/detailPage/share.svg" />
          </ShareButton>
        </section>
        <Text size={14} color="b5b5b5" margin={7} strong={false}>
          {h1}
        </Text>
        <section style={{ marginTop: 20, display: 'flex' }}>
          <Text size={28} color="333333" margin={0} strong={true}>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
          <Text size={20} color="333333" margin={7} strong={true}>
            &nbsp;원
          </Text>
        </section>
        <InfoListBox>
          {details.map((info, idx) => (
            <InfoList key={idx} info={info} />
          ))}
        </InfoListBox>
        <CountProduct count={count} setCount={setCount} />
        <ProductPrice count={count} price={2070} />
        <Description>로그인 후, 적립 혜택 제공</Description>
        <Buttons />
      </Information>
    </Container>
  );
};

export default Summary;

const Container = styled.section`
  margin-top: 110px;

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
const InfoListBox = styled.section`
  margin-top: 20px;
`;
const Description = styled.section`
  font-size: 13px;
  color: #666666;

  display: flex;
  justify-content: flex-end;

  margin-top: 10px;
`;
const ShareButton = styled.section`
  cursor: pointer;
`;
