import MainContainer from "@/shared/components/mainContainer/mainContainer";
import "./halalBenefits.services.scss";
import banner from "@appImg/services/banner.png";
import BenefitsIssuingCertificates from "@/shared/components/benefitsIssuingCertificates/benefitsIssuingCertificates";
import { useTranslation } from "react-i18next";
import { CustomBreadcrumbs } from "@/shared/components/customBreadcrumbs/customBreadcrumbs";

export const HalalBenefitsServices = () => {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: t("links.home"), path: "/" },
    { name: t("links.services"), path: "/services" },
  ];
  return (
    <div className="bg-[#F5F7F8] w-full py-[28px]  halal-Benefits-services">
      <MainContainer>
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />

        <div className="flex flex-col xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px]">
          <div className="max-w-[1636px] -halal-Benefits-services">
            <img src={banner} alt="--about-img" className="w-full" />
          </div>
          <BenefitsIssuingCertificates />
        </div>
      </MainContainer>
    </div>
  );
};
