import React from 'react';
import styled from 'styled-components';
import Summary from '../components/detailPage/summary/Summary';
import Tabs from '../components/detailPage/Tabs';
import Header from '../components/header/Header';

const product = {
  id: '1',
  title: '[연세우유 x 마켓컬리] 전용목장우유 900mL',
  price: 2070,
  photo: 'https://img-cf.kurly.com/shop/data/goods/1637154205701l0.jpg',
  h1: '가격, 퀄리티 모두 만족스러운 1A등급 우유',
  details: [
    { title: '배송', content: '샛별배송' },
    { title: '판매자', content: '컬리' },
    { title: '포장타입', content: '냉장(종이포장)' },
    { title: '판매단위', content: '1팩' },
    { title: '중량/용량', content: '900ml' },
    {
      title: '알레르기정보',
      content:
        '-우유함유 \n -본 제품은 대두,땅콩,알류,밀,복숭아,토마토,호두,메밀,아황산류,잣을 사용한 제품과 같은 시설에서 제조하고 있습니다',
    },
    {
      title: '유통기한정보',
      content: '수령일 포함 최소 6일 이상 남은 상품을 발송드립니다',
    },
  ],
  product_photo: 'https://img-cf.kurly.com/shop/data/goods/1637154205701l0.jpg',
  detailed_photo:
    'https://img-cf.kurly.com/shop/data/goods/1637154205701l0.jpg',
};

const DetailPage = () => {
  return (
    <section>
      <Header />
      <Container>
        <Summary product={product} />
        <Tabs
          product_photo={product.product_photo}
          detailed_photo={product.detailed_photo}
          id={product.id}
        />
      </Container>
    </section>
  );
};

export default DetailPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 1060px;
  padding: 0 20px;
`;
