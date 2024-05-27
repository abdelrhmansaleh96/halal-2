import "./benefitsIssuingCertificates.scss";
import SectionSubTitle from "../sectionSubTitle/sectionSubTitle";
import CardDescription from "../cardDescription/cardDescription";
import { useTranslation } from "react-i18next";
const BenefitsIssuingCertificates = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col  benefits-issuing-certificates xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px] ">
      <SectionSubTitle
        text={t("homeBenefits.certificates")}
        className="max-w-[750px]"
      />
      <div className="grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-3 ">
        <CardDescription
          className="xxl:w-[386px] w-[280px] "
          text={t("homeBenefits.paragraphOne")}
        />
        <CardDescription
          className="xxl:w-[386px] w-[280px]"
          text={t("homeBenefits.paragraphTwo")}
        />
        <CardDescription
          className="xxl:w-[386px]  w-[280px]"
          text={t("homeBenefits.paragraphThree")}
        />
      </div>
    </div>
  );
};

export default BenefitsIssuingCertificates;
