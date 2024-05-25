import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import "./certificationProvider.services.scss";
import AboutContainer from "@/shared/components/aboutContainer/aboutContainer";
import certificationPproviderImg from "@appImg/services/certification-provider.png";
import { DescriptionTextAbout } from "@/features/about/shared";
import { useTranslation } from "react-i18next";

type Props = {};
export const CertificationProvider = ({}: Props) => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#C09300] xxl:py-[36px] xl:py-[28px] lg:py-[22px] md:py-[18px]  py-[14px] halal-team">
      <AboutContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] -halal-team-content-wrapper">
          <div className="flex flex-col xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px] justify-center --halal-team-about">
            <SectionSubTitle
              text={t("services.certificationServiceprovider")}
              className="text-[#FFFFFF] font-normal max-w-[462px]"
            />
            <DescriptionTextAbout
              text={t("services.providerParagraphOne")}
              className="text-[#FFFFFF]"
            />
            <DescriptionTextAbout
              text={t("services.providerParagraphTwo")}
              className="text-[#FFFFFF]"
            />
          </div>

          <div className="flex justify-center --halal-team-avatar-wrapper">
            <img
              src={certificationPproviderImg}
              alt="halal-team"
              className="rounded-[50%] object-cover ---halal-team-avatar-img"
            />
          </div>
        </div>
      </AboutContainer>
    </div>
  );
};
