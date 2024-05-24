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
            <SectionSubTitle text="Why should we choose Halal?" />

            <DescriptionTextAbout
              text="Halal food refer to what is permissible or Lawful in Islamic Law.
The concept of Halal food is not exclusive to fulfillment of slaughtering practices and the type of animal only, but other things that may cause hazard for people’s health and their life as God AL might says:"
            />
            <DescriptionTextAbout text="“And makes lawful for them the good things and prohibits for the evils” Al- A’raf 157" />
            <DescriptionTextAbout text="Food safety is one of the fundamental requirements for human health as a great value that Muslims and other religious denominations are keen on." />
          </div>

          <div className="flex flex-col xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] justify-center xxl:ps-[74px] xl:ps-[58px] lg:ps-[36px] ps-[0px] --what-halal-mission-vision-wrapper">
            <div
              className={`flex flex-col xxl:gap-[36px] xl:gap-[28px] lg:gap-[20px] md:gap-[14px] gap-[10px] ---what-halal-mission-vision`}
            >
              <CardTitle text="Mission" />
              <CardDescription text="ISEG HALAL'S mission is to work diligently with companies and slaughterhouses across the globe through the certification process of fresh halal products." />
              <CardDescription text="We ensure that each step obeys all religious regulations and international standards for Halal food providing peace of mind to Muslim communities worldwide." />
              <CardDescription text="The opportunity to provide not only people from the Islamic word but also consumers of different backgrounds with healthier and religiously acceptable Halal products is a goal that we here at ISEGHALAL take with the utmost sincerity." />
            </div>
            <div className="flex flex-col xxl:gap-[36px] xl:gap-[28px] lg:gap-[20px] md:gap-[14px] gap-[10px] ---what-halal-mission-vision">
              <CardTitle text="Vision" />
              <CardDescription text="ISEG HALAL'S vision is to provide unparalleled Halal certification Services to All Industries." />
              <CardDescription text="We aim to lead in serving the global demand Halal Certification Services through excellence in integrity, Knowledge, and service." />
            </div>
          </div>
        </div>
      </AboutContainer>
    </div>
  );
};
