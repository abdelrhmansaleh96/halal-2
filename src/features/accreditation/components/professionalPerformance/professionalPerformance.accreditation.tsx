import { DescriptionTextAbout } from "@/features/about/shared";
import "./professionalPerformance.accreditation.scss";

import AboutContainer from "@/shared/components/aboutContainer/aboutContainer";
import { CustomBreadcrumbs } from "@/shared/components/customBreadcrumbs/customBreadcrumbs";
import MainContainer from "@/shared/components/mainContainer/mainContainer";
import banner from "@appImg/about/banner.svg";
import { useTranslation } from "react-i18next";

export const ProfessionalPerformanceAccreditation = () => {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: t("links.home"), path: "/" },
    { name: t("links.accreditation"), path: "/accreditation" },
  ];
  return (
    <div className="bg-[#F5F7F8] w-full py-[28px] flex flex-col xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] halal-egypt">
      <MainContainer>
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />

        <div className="max-w-[1636px] -halal-egypt-img-cover">
          <img src={banner} alt="--about-img" />
        </div>
      </MainContainer>
      <AboutContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] -halal-egypt-content-wrapper">
          <h2 className="font-bold --halal-egypt-title">
            IS EG Halal <br />
            Egypt
          </h2>
          <DescriptionTextAbout
            text="Our expert team, comprising Islamic scholars and veterinary experts
            assigned by the Egyptian Ministry of Religious Endowments and the
            Veterinary Services Authority ,ensures that the certification
            process adheres to global standards and Islamic rules."
          />
          <DescriptionTextAbout text="We are the exclusive authority authorized by the Egyptian Government to certify Halal exports worldwide." />
          <DescriptionTextAbout
            text="We operate with transparency, accuracy, and strict adherence to
            international regulations. Our commitment extends beyond
            certification; it contributes significantly to Egypt’s reputation in
            the global market"
          />
        </div>
      </AboutContainer>
    </div>
  );
};
