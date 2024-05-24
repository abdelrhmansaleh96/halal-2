import MainContainer from "@/shared/components/mainContainer/mainContainer";
import "./specifications.accreditation.scss";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import { DescriptionTextAbout } from "@/features/about/shared";
import CardDescription from "@/shared/components/cardDescription/cardDescription";

export const SpecificationsAccreditation = () => {
  return (
    <>
      <div className="w-full xxl:py-[65px] xl:py-[60px] lg:py-[48px] md:py-[36px] py-[24px]  specifications-wrapper">
        <MainContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 -specifications-contents">
            <div className="flex flex-col xxl:gap-[52px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px] --specifications-content">
              <div>
                <SectionSubTitle
                  className="max-w-[400px]"
                  text="ISEG HALA Specifications "
                />
                <DescriptionTextAbout text="ISEG HALAL is to issuing HALAL certificates to various entities and its products according to the following specifications:" />
              </div>
              <CardDescription
                className="!font-bold !text-[#1E2124]"
                text="Requirements for Slaughtering Animals According to Islamic Law"
              />
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
};
