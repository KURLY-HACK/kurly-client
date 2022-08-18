import React, { useState } from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';
import CountProduct from './CountProduct';
import InfoList from './InfoList';
import ProductPrice from './ProductPrice';

const infoList = [
  {
    title: '배송',
    description:
      '샛별배송\n23시 전 주문 시 내일 아침 7시 전 도착\n(대구·부산·울산 샛별배송 운영시간 별도 확인)',
  },
  {
    title: '판매자',
    description: '컬리',
  },
  {
    title: '포장타입',
    description:
      '냉장 (종이포장)\n택배배송은 에코 포장이 스티로폼으로 대체됩니다.',
  },
  {
    title: '중량/용량',
    description: '900mL',
  },
  {
    title: '알레르기정보',
    description:
      '- 우유함유\n- 본 제품은 대두, 땅콩, 알류, 밀, 복숭아, 토마토, 호두, 메밀, 아황산류, 잣을 사용한 제품과 같은 시설에서 제조하고 있습니다',
  },
];

const Summary = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Image
        alt="product"
        src="https://img-cf.kurly.com/shop/data/goods/1637154205701l0.jpg"
      />
      <Information>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text size={25} color="333333" margin={3} strong={true}>
            전용목장우유 900mL
          </Text>
          <ShareButton>
            <img alt="share" src="/images/detailPage/share.svg" />
          </ShareButton>
        </section>
        <Text size={14} color="b5b5b5" margin={7} strong={false}>
          가격, 퀄리티 모두 만족스러운 1A등급 우유
        </Text>
        <section style={{ marginTop: 20, display: 'flex' }}>
          <Text size={28} color="333333" margin={0} strong={true}>
            2,070
          </Text>
          <Text size={20} color="333333" margin={7} strong={true}>
            &nbsp;원
          </Text>
        </section>
        <InfoListBox>
          {infoList.map((info, idx) => (
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
