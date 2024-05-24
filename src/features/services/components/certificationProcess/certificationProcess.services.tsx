import MainContainer from "@/shared/components/mainContainer/mainContainer";
import "./certificationProcess.services.scss";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import ProcessCard from "@/shared/components/processCard/processCard";
import { ShiftArrowLeft } from "@/shared/components/icons/Icons";
import { useTranslation } from "react-i18next";

export const CertificationProcessServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" w-full xxl:py-[65px] xl:py-[60px] lg:py-[48px] md:py-[36px] py-[24px]  certification-process-wrapper">
        <MainContainer>
          <div className="flex flex-col xxl:gap-[32px] xl:gap-[28px] lg:gap-[22px] md:gap-[16px] gap-[10px] certification-process-content">
            <SectionSubTitle
              className="text-center"
              text={t("services.certificationProcess")}
            />
            <div>
              <div className="flex justify-between items-center">
                <ProcessCard
                  title={t("services.fulfillment")}
                  backgroundColor="#DDFBD2"
                />
                <ShiftArrowLeft />
                <ProcessCard
                  title={t("services.auditing")}
                  backgroundColor="#D2EFFB"
                />
                <ShiftArrowLeft />
                <ProcessCard
                  title={t("services.approvalCertification")}
                  backgroundColor="#FBEBD2"
                />
                <ShiftArrowLeft />
                <ProcessCard
                  title={t("services.obtainingCertificate")}
                  backgroundColor="#FBD2F7"
                />
              </div>
            </div>
          </div>
        </MainContainer>
      </div>
      <MainContainer>
        <hr className="self-end" />
      </MainContainer>
    </>
  );
};
