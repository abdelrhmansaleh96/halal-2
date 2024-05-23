import { Button } from "@/shadcn/components/ui/button";
import { MoveRight } from "lucide-react";
import meatImage from "@appImg/meat.png";
import { useTranslation } from "react-i18next";

export const MainSliderCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className=" h-[calc(100vh-120px)] grid grid-cols-[1fr_1.67fr] items-center gap-44">
      <div className="flex flex-col gap-9 max-w">
        <h2 className="text-[4rem] text-white leading-[76px]">Discover Everything that is Halal</h2>
        <p className="text-[2rem] text-popover">
          Halal food refers to what is permissible or lawful in traditional Islamic law
        </p>
        <Button className="font-normal text-white bg-primary w-fit rounded-2xl">
          {t("learn")}
          <MoveRight size={24} className="w-5 ml-6 " />
        </Button>
      </div>
      <img className="h-full w-full object-cover flex rounded-tl-[3rem]" src={meatImage} alt="meat-img" />
    </div>
  );
};
