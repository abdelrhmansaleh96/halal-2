import "./styles.scss";

import { MainContainer } from "@appSharedComponents/main-container/MainContainer";
import { MainSliderCard } from "../MainSliderCard/MainSliderCard";
import Slider from "react-slick";
import firstImage from "@appImg/meat.png";
import secondImage from "@appImg/blue-person.png";
import thirdImage from "@appImg/doctor.png";
import { useTranslation } from "react-i18next";

export const HomeMainSlider: React.FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
  };
  const { t } = useTranslation();
  const sliderItems = [
    {
      img: firstImage,
      title: t("mainSlider.firstItem.title"),
      description: t("mainSlider.firstItem.description"),
    },
    {
      img: secondImage,
      title: t("mainSlider.secondItem.title"),
      description: t("mainSlider.secondItem.description"),
    },
    {
      img: thirdImage,
      title: t("mainSlider.thirdItem.title"),
      description: t("mainSlider.thirdItem.description"),
    },
  ];
  const matches = window.matchMedia("(max-width: 768px)").matches;
  return (
    <MainContainer oneSide={!matches}>
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <MainSliderCard
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </Slider>
    </MainContainer>
  );
};
