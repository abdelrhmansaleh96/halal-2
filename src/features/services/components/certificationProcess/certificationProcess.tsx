import MainContainer from "@/shared/components/mainContainer/mainContainer";
import "./certificationProcess.services.scss";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import ProcessCard from "@/shared/components/processCard/processCard";
import { ShiftArrowLeft } from "@/shared/components/icons/Icons";

export const CertificationProcessServices = () => {
  return (
    <>
      <div className=" w-full xxl:py-[65px] xl:py-[60px] lg:py-[48px] md:py-[36px] py-[24px]  certification-process-wrapper">
        <MainContainer>
          <div className="flex flex-col xxl:gap-[32px] xl:gap-[28px] lg:gap-[22px] md:gap-[16px] gap-[10px] certification-process-content">
            <SectionSubTitle
              className="text-center"
              text="Certification Process"
            />
            <div>
              <div className="flex justify-between items-center">
                <ProcessCard
                  title="Fulfillment the required"
                  backgroundColor="#DDFBD2"
                />
                <ShiftArrowLeft />
                <ProcessCard
                  title="Inspection and  verification (Auditing)"
                  backgroundColor="#D2EFFB"
                />
                <ShiftArrowLeft />
                <ProcessCard
                  title="Approval committee of certification"
                  backgroundColor="#FBEBD2"
                />
                <ShiftArrowLeft />
                <ProcessCard
                  title="Obtaining (Issuing) of Halal certificate"
                  backgroundColor="#FBD2F7"
                />
              </div>
            </div>
          </div>
          <hr className="self-end" />
        </MainContainer>
      </div>
    </>
  );
};
