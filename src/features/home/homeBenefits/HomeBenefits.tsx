import { BenefitsCard } from "./BenefitsCard";
import { MainContainer } from "@appSharedComponents/main-container/MainContainer";
import SectionSubTitle from "@appSharedComponents/sectionSubTitle/sectionSubTitle";
import iconOne from "@appImg/quality.svg";
import { useTranslation } from "react-i18next";

export const HomeBenefits: React.FC = () => {
  const { t } = useTranslation();
  const benefits: {
    title: string;
    description: string;
    icon: string;
  }[] = [
    {
      title: "Quality Assurance",
      description:
        "Halal certification signifies adherence to high standards, including sourcing, production, and handling. Consumers associate it with quality and reliability.",
      icon: iconOne,
    },
    {
      title: "Quality Assurance",
      description:
        "Halal certification signifies adherence to high standards, including sourcing, production, and handling. Consumers associate it with quality and reliability.",
      icon: iconOne,
    },
    {
      title: "Quality Assurance",
      description:
        "Halal certification signifies adherence to high standards, including sourcing, production, and handling. Consumers associate it with quality and reliability.",
      icon: iconOne,
    },
  ];
  return (
    <MainContainer>
      <div className="flex flex-col gap-12 py-20 sm:gap-16 md:gap-18 lg:gap-20 xxl:gap-24">
        <SectionSubTitle
          text={t("homeBenefits.title")}
          className="max-w-[48rem]"
        />
        <div className="grid justify-between w-full grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitsCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};
