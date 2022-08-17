import React from 'react';
import { useState } from 'react';

const NextArrow = (props: { className: any; style: any; onClick: any }) => {
  const { className, style, onClick } = props;

  const [isRightScrollButtonHover, setIsRightScrollButtonHover] =
    useState(false);
  return (
    <div
      onClick={onClick}
      onMouseOver={() => setIsRightScrollButtonHover(true)}
      onMouseOut={() => setIsRightScrollButtonHover(false)}
    >
      {isRightScrollButtonHover ? (
        <img
          src="/images/scroll/activeRightScroll.svg"
          width={60}
          height={60}
        />
      ) : (
        <img
          src="images/scroll/inactiveRightScroll.svg"
          width={60}
          height={60}
        />
      )}
    </div>
  );
};

export default NextArrow;
