import "./styles.scss";

import { MainContainer } from "@appSharedComponents/main-container/MainContainer";
import { MainSliderCard } from "../MainSliderCard/MainSliderCard";
import Slider from "react-slick";

export const HomeMainSlider: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
  };
  return (
    <MainContainer oneSide>
      <Slider {...settings}>
        <MainSliderCard />
        <MainSliderCard />
        <MainSliderCard />
      </Slider>
    </MainContainer>
  );
};
