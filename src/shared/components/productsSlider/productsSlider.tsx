import { MainContainer } from "../main-container/MainContainer";
import Slider from "react-slick";

type Props = {
  children: React.ReactNode;
};

export const ProductsSlider: React.FC<Props> = ({ children }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4.5,
    initialSlide: 0,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <MainContainer oneSide>
      <Slider {...settings}>{children}</Slider>
    </MainContainer>
  );
};
