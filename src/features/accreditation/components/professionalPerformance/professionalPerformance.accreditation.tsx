import { DescriptionTextAbout } from "@/features/about/shared";
import "./professionalPerformance.accreditation.scss";

import AboutContainer from "@/shared/components/aboutContainer/aboutContainer";
import { CustomBreadcrumbs } from "@/shared/components/customBreadcrumbs/customBreadcrumbs";
import MainContainer from "@/shared/components/mainContainer/mainContainer";
import banner from "@appImg/accreditation/banner.png";
import { useTranslation } from "react-i18next";

export const ProfessionalPerformanceAccreditation = () => {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: t("links.home"), path: "/" },
    { name: t("links.accreditation"), path: "/accreditation" },
  ];
  return (
    <div className="bg-[#F5F7F8] w-full py-[28px] flex flex-col xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] professional-performance">
      <MainContainer>
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />

        <div className="max-w-[1636px] -professional-performance-img-cover">
          <img src={banner} alt="--about-img" />
        </div>
      </MainContainer>
      <AboutContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] -professional-performance-content-wrapper">
          <h2 className="font-bold --professional-performance-title">
            {t("accreditationAndSpecifications.professionalPerformance")}
          </h2>
          <div className="flex flex-col xxl:gap-[27px] xl:gap-[22px] lg:gap-[18px] md:gap-[16px] gap-[12px]">
            <DescriptionTextAbout text="accreditationAndSpecifications.professionalPerformanceParagraphOne" />
            <ul className="ps-4 list-disc  ---professional-performance-list-wrapper">
              <li className="">
                <DescriptionTextAbout text="accreditationAndSpecifications.professionalPerformanceParagraphTwo" />
              </li>
              <li className="">
                <DescriptionTextAbout text="accreditationAndSpecifications.professionalPerformanceParagraphThree" />
              </li>
              <li className="">
                <DescriptionTextAbout text="accreditationAndSpecifications.professionalPerformanceParagraphFour" />
              </li>
            </ul>
          </div>
        </div>
      </AboutContainer>
    </div>
  );
};
