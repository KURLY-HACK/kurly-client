import React, { useState } from 'react';

const PrevArrow = (props: { className: any; style: any; onClick: any }) => {
  const { className, style, onClick } = props;
  const [isLeftScrollButtonHover, setIsLeftScrollButtonHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseOver={() => setIsLeftScrollButtonHover(true)}
      onMouseOut={() => setIsLeftScrollButtonHover(false)}
    >
      {isLeftScrollButtonHover ? (
        <img src="/images/scroll/activeLeftScroll.svg" width={60} height={60} />
      ) : (
        <img
          src="images/scroll/inactiveLeftScroll.svg"
          width={60}
          height={60}
        />
      )}
    </div>
  );
};

export default PrevArrow;
