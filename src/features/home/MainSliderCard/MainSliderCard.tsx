import "./styles.scss";

import { Button } from "@/shadcn/components/ui/button";
import { MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";

type Props = {
  img: string;
  title: string;
  description: string;
};

export const MainSliderCard: React.FC<Props> = ({ img, title, description }) => {
  const { t, i18n } = useTranslation();
  const rtl = i18n.dir() === "rtl";
  return (
    <div
      className={`h-auto lg:h-[calc(100vh-120px)] grid grid-cols-1 md:grid-cols-[1fr_1.67fr] items-center gap-12 md:gap-44  ${
        rtl ? "rtl-direction" : ""
      }`}
    >
      <div className="flex flex-col gap-4 md:gap-9 max-w">
        <h2 className="text-[2rem] md:text-[4rem] text-white leading-[48px] md:leading-[76px]">{title}</h2>
        <p className="text-[1rem] md:text-[2rem] text-popover">{description}</p>
        <Button className="font-normal text-white bg-primary w-fit rounded-2xl">
          {t("learn")}
          <MoveRight size={24} className="w-5 ml-6" />
        </Button>
      </div>
      <img
        className={`h-full w-full object-cover flex  main-card ${rtl && "rtl"} w-96 md:w-auto`}
        src={img}
        alt="meat-img"
      />
    </div>
  );
};
