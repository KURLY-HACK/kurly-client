import React from 'react';
import { FC } from 'react';

interface Props {
  image: string;
  name: string;
  price: string;
}
const EachProduct: FC<Props> = ({ image, name, price }) => {
  return (
    <>
      <>
        <img src={image} />
      </>
      <>{name}</>
      <>{price}</>
    </>
  );
};

export default EachProduct;
