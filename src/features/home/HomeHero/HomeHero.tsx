import { HomeMainSlider } from "../HomeMainSlider/HomeMainSlider";
import bg from "@appImg/homeHeroBg.svg";

export const HomeHero: React.FC = () => {
  return (
    <div className="relative h-auto md:h-[calc(100vh-120px)] w-full overflow-hidden py-12 md:py-0">
      <img src={bg} alt="bg" className="w-full h-full object-cover absolute top-0 left-0 z-[-1]" />
      <HomeMainSlider />
    </div>
  );
};
