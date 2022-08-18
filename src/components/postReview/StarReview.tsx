import React, { FC, useState } from 'react';
import styled from 'styled-components';

interface Props {
  category: string;
}
const StarReview: FC<Props> = (category) => {
  const [hovered, setHovered] = useState<number>(0);
  const [clicked, setClicked] = useState<number>(0);
  console.log(clicked);
  return (
    <Wrapper>
      <StarContainer>
        {[1, 2, 3, 4, 5].map((el) => (
          <Star
            onMouseEnter={() => setHovered(el)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setClicked(el)}
          >
            {clicked >= el || hovered >= el ? (
              <img src={'/images/detailPage/star-active.svg'} />
            ) : (
              <img src={'/images/detailPage/star-inactive.svg'} />
            )}
          </Star>
        ))}
      </StarContainer>
    </Wrapper>
  );
};

export default StarReview;

const Wrapper = styled.div`
  padding: 0 10px;
`;

const Star = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const StarContainer = styled.div`
  display: flex;
  text-align: center;
  border: none;
  background-color: white;
`;
