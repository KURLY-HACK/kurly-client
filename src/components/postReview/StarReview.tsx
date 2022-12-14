import React, { useState } from 'react';
import styled from 'styled-components';
import { reviewScoreSlice } from '../../store/slices/review/reviewScoreSlice';
import { useAppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const StarReview = ({ category }: { category: string }) => {
  const [hovered, setHovered] = useState<number>(0);
  const [clicked, setClicked] = useState<number>(0);
  const dispatch = useAppDispatch();

  if (category === 'fresh') {
    dispatch(reviewScoreSlice.actions.setFreshReviewScore({ clicked }));
  }
  if (category === 'taste') {
    dispatch(reviewScoreSlice.actions.setTasteReviewScore({ clicked }));
  }
  if (category === 'deliver') {
    dispatch(reviewScoreSlice.actions.setDeliveryReviewScore({ clicked }));
  }
  if (category === 'total') {
    dispatch(reviewScoreSlice.actions.setTotalReviewScore({ clicked }));
  }
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
              <img
                width={22}
                height={22}
                src={'/images/detailPage/star-active.svg'}
              />
            ) : (
              <img
                width={22}
                height={22}
                src={'/images/detailPage/star-inactive.svg'}
              />
            )}
          </Star>
        ))}
      </StarContainer>
    </Wrapper>
  );
};

export default StarReview;

const Wrapper = styled.div`
  margin-top: 5px;
  padding: 0 10px;
  padding-left: 30px;
  height: 25px;
`;

const Star = styled.div`
  height: 25px;
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
