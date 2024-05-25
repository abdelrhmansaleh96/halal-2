import "./halalEgypt.about.scss";

import AboutContainer from "@/shared/components/aboutContainer/aboutContainer";
import { CustomBreadcrumbs } from "@/shared/components/customBreadcrumbs/customBreadcrumbs";
import { DescriptionTextAbout } from "../../shared";
import MainContainer from "@/shared/components/mainContainer/mainContainer";
import banner from "@appImg/about/banner.svg";
import { useTranslation } from "react-i18next";

export const HalalEgyptAbout = () => {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: t("links.home"), path: "/" },
    { name: t("links.aboutUs"), path: "/about-us" },
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
            {t("aboutUs.ISEGHalal")} <br />
            {t("aboutUs.Egypt")}
          </h2>
          <DescriptionTextAbout
            text={t("aboutUs.ISEGHalalEgyptParagraphOne")}
          />
          <DescriptionTextAbout
            text={t("aboutUs.ISEGHalalEgyptParagraphTwo")}
          />
          <DescriptionTextAbout
            text={t("aboutUs.ISEGHalalEgyptParagraphThree")}
          />
        </div>
      </AboutContainer>
    </div>
  );
};
