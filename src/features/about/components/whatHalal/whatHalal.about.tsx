import "./whatHalal.about.scss";

import AboutContainer from "@/shared/components/aboutContainer/aboutContainer";
import CardDescription from "@/shared/components/cardDescription/cardDescription";
import CardTitle from "@/shared/components/cardTitle/cardTitle";
import { DescriptionTextAbout } from "../../shared";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";

export const WhatHalalAbout = () => {
  return (
    <div className="w-full xxl:py-[86px] xl:py-[72px] lg:py-[58px] md:py-[36px]  py-[24px] what-halal">
      <AboutContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] -what-halal-content-wrapper">
          <div className="flex flex-col xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px] --what-halal-about">
            <SectionSubTitle text="What is Halal?" />
            <DescriptionTextAbout text="Halal food refers to what is permissible or lawful in traditional Islamic law. It encompasses various aspects beyond just the ingredients, including how the food is prepared and processed." />
            <DescriptionTextAbout text="Halal food must be free from prohibited ingredients (such as pork and alcohol), and the slaughter process follows specific rules." />
            <DescriptionTextAbout text="Additionally, Halal living extends to behavior, ethics, dress code, and financial transactions. Trust, integrity, and adherence to Islamic principles form the core of Halal practice." />
          </div>

          <div className="flex flex-col xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] justify-center xxl:ps-[74px] xl:ps-[58px] lg:ps-[36px] ps-[0px] --what-halal-mission-vision-wrapper">
            <div
              className={`flex flex-col xxl:gap-[36px] xl:gap-[28px] lg:gap-[20px] md:gap-[14px] gap-[10px] ---what-halal-mission-vision`}
            >
              <CardTitle text="Mission" />
              <CardDescription text="IS EG Halal’s mission is to work diligently with companies and Slaughters across the globe through the certification process of fresh Halal products." />
              <CardDescription text="we ensure that each step obeys all religious regulations, providing peace of mind to Muslim communities worldwide." />
            </div>
            <div className="flex flex-col xxl:gap-[36px] xl:gap-[28px] lg:gap-[20px] md:gap-[14px] gap-[10px] ---what-halal-mission-vision">
              <CardTitle text="Vision" />
              <CardDescription text="IS EG Halal’s vision is to provide unparalleled Halal Certification Services to All Industries." />
              <CardDescription text="They aim to lead in serving the global demand for Halal Certification services through excellence in integrity, knowledge, and service" />
            </div>
          </div>
        </div>
      </AboutContainer>
    </div>
  );
};
