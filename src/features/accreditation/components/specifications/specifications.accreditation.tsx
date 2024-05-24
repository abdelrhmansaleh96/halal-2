import MainContainer from "@/shared/components/mainContainer/mainContainer";
import "./specifications.accreditation.scss";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import { DescriptionTextAbout } from "@/features/about/shared";
import CardDescription from "@/shared/components/cardDescription/cardDescription";

export const SpecificationsAccreditation = () => {
  const generalRequirements = [
    "GSO 2055-4",
    "GSO 2055-1",
    "UAE.S 2055-4",
    "UAE.S 2055-1",
    "ES 7764",
    "OIC/SMIC-1",
    "GSO 2578",
    "SASO:2172",
    "GSO 2670",
    "MS 1500",
    "ES 8339",
    "ES 4249",
  ];
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
              <div className="flex flex-col xxl:gap-[40px] xl:gap-[36px] lg:gap-[28px] md:gap-[20px] gap-[16px]">
                <CardDescription
                  className="!font-bold !text-[#1E2124]"
                  text="Requirements for Slaughtering Animals According to Islamic Law"
                />
                <div className="flex gap-x-2 flex-wrap">
                  <DescriptionTextAbout
                    className="bg-[#F5F7F8] xxl:px-[66px] xl:px-[54px] lg:px-[48px] md:px-[32px] px-[24px] xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px]  "
                    text="GSO 993"
                  />
                  <DescriptionTextAbout
                    className="bg-[#F5F7F8] xxl:px-[66px] xl:px-[54px] lg:px-[48px] md:px-[32px] px-[24px] xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px]  "
                    text="UAE.S 993"
                  />
                  <DescriptionTextAbout
                    className="bg-[#F5F7F8] xxl:px-[66px] xl:px-[54px] lg:px-[48px] md:px-[32px] px-[24px] xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px]  "
                    text="ES 7729"
                  />
                </div>
              </div>
              <div className="flex flex-col xxl:gap-[40px] xl:gap-[36px] lg:gap-[28px] md:gap-[20px] gap-[16px]">
                <CardDescription
                  className="!font-bold !text-[#1E2124]"
                  text="General Requirements for Halal Foods &Halal Product According to Islamic Sharia"
                />
                <div className="grid grid-cols-3 gap-2 ">
                  {generalRequirements.map((generalRequirement) => (
                    <DescriptionTextAbout
                      className="bg-[#F5F7F8] text-center lg:rounded-[12px] rounded-[8px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px] !font-bold  "
                      text={generalRequirement}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
};
