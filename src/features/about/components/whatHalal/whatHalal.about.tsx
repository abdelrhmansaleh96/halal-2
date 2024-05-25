import "./whatHalal.about.scss";

import AboutContainer from "@/shared/components/aboutContainer/aboutContainer";
import CardDescription from "@/shared/components/cardDescription/cardDescription";
import CardTitle from "@/shared/components/cardTitle/cardTitle";
import { DescriptionTextAbout } from "../../shared";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import { useTranslation } from "react-i18next";

export const WhatHalalAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full xxl:py-[86px] xl:py-[72px] lg:py-[58px] md:py-[36px]  py-[24px] what-halal">
      <AboutContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] -what-halal-content-wrapper">
          <div className="flex flex-col xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px] --what-halal-about">
            <SectionSubTitle text={t("aboutUs.whyHalal")} />

            <DescriptionTextAbout text={t("aboutUs.whyHalalParagraphOne")} />
            <DescriptionTextAbout text={t("aboutUs.whyHalalParagraphTwo")} />
            <DescriptionTextAbout text={t("aboutUs.whyHalalParagraphThree")} />
          </div>

          <div className="flex flex-col xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] justify-center xxl:ps-[74px] xl:ps-[58px] lg:ps-[36px] ps-[0px] --what-halal-mission-vision-wrapper">
            <div
              className={`flex flex-col xxl:gap-[36px] xl:gap-[28px] lg:gap-[20px] md:gap-[14px] gap-[10px] ---what-halal-mission-vision`}
            >
              <CardTitle text={t("aboutUs.mission")} />
              <CardDescription text={t("aboutUs.whyHalalParagraphOne")} />
              <CardDescription text={t("aboutUs.whyHalalParagraphTwo")} />
              <CardDescription text={t("aboutUs.whyHalalParagraphThree")} />
            </div>
            <div className="flex flex-col xxl:gap-[36px] xl:gap-[28px] lg:gap-[20px] md:gap-[14px] gap-[10px] ---what-halal-mission-vision">
              <CardTitle text={t("aboutUs.vision")} />
              <CardDescription text={t("aboutUs.visionParagraphOne")} />
              <CardDescription text={t("aboutUs.visionParagraphTwo")} />
            </div>
          </div>
        </div>
      </AboutContainer>
    </div>
  );
};
