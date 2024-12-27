// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import styled from "styled-components";

import { Autoplay } from "swiper/modules";

const Paddinger = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const Slider = ({
  loop = true,
  items,
  render,
  auto = true,
  autoOpt,
  ...props
}) => {
  return (
    <Paddinger>
      <Swiper
        loop={loop}
        autoplay={
          auto
            ? autoOpt
              ? autoOpt
              : {
                  delay: 1250,
                  disableOnInteraction: false,
                }
            : {}
        }
        modules={auto ? [Autoplay] : {}}
        {...props}
      >
        {items.map(render)}
      </Swiper>
    </Paddinger>
  );
};

export default Slider;
