import MainContainer from "@/shared/components/mainContainer/mainContainer";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import { HalalStandardsTitle } from "../../shared";
import CardTitle from "@/shared/components/cardTitle/cardTitle";
import "./halalStandards.products.scss";
export const HalalStandardsProducts = () => {
  return (
    <div className="bg-[#C09300] xxl:py-[76px] xl:py-[64px] lg:py-[48px] md:py-[36px] py-[24px]  halal-standards">
      <MainContainer>
        <div className="flex flex-col xxl:gap-[86px] xl:gap-[72px] lg:gap-[58px] md:gap-[36px] gap-[24px]">
          <SectionSubTitle
            text="Halal Standards, Regulations
Guidelines and Practices"
            className="text-white "
          />

          <div className="grid lg:grid-cols-12 grid-cols-1 xxl:gap-[52px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px]">
            <div className="col-span-5 flex flex-col xxl:gap-[40px] xl:gap-[32px] lg:gap-[20px] md:gap-[16px] gap-[10px]  ">
              <HalalStandardsTitle text="Halal Standards and regulations:" />
              <div className="grid grid-cols-2 xxl:gap-[30px] xl:gap-[24px] lg:gap-[18px] md:gap-[14px] gap-[8px] ">
                <CardTitle
                  text="IAF"
                  className="xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] bg-[#B68B00] text-white w-fit xxl:px-[66px] xl:px-[48px] lg:px-[36px] md:px-[24px] px-[14px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px] -standards-code"
                />
                <CardTitle
                  text="IHAF"
                  className="xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] bg-[#B68B00] text-white w-fit xxl:px-[66px] xl:px-[48px] lg:px-[36px] md:px-[24px] px-[14px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px] -standards-code"
                />
              </div>
            </div>
            <div className="col-span-7 flex flex-col xxl:gap-[40px] xl:gap-[32px] lg:gap-[20px] md:gap-[16px] gap-[10px]">
              <HalalStandardsTitle text="ISEG HALAL applies Halal standards according to the relevant international specifications:" />
              <div className="grid grid-cols-2 xxl:gap-[30px] xl:gap-[24px] lg:gap-[18px] md:gap-[14px] gap-[8px] ">
                <CardTitle
                  text="SMIC – OIK 1 :2019"
                  className="xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] bg-[#B68B00] text-white w-fit xxl:px-[66px] xl:px-[48px] lg:px-[36px] md:px-[24px] px-[14px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px] -standards-code"
                />
                <CardTitle
                  text="MS 9001"
                  className="xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] bg-[#B68B00] text-white w-fit xxl:px-[66px] xl:px-[48px] lg:px-[36px] md:px-[24px] px-[14px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px] -standards-code"
                />
                <CardTitle
                  text="ES 4249: 2023"
                  className="xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] bg-[#B68B00] text-white w-fit xxl:px-[66px] xl:px-[48px] lg:px-[36px] md:px-[24px] px-[14px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px] -standards-code"
                />
                <CardTitle
                  text="GSO : 2015"
                  className="xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] bg-[#B68B00] text-white w-fit xxl:px-[66px] xl:px-[48px] lg:px-[36px] md:px-[24px] px-[14px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px] -standards-code"
                />
                <CardTitle
                  text="UAE: 2015"
                  className="xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] bg-[#B68B00] text-white w-fit xxl:px-[66px] xl:px-[48px] lg:px-[36px] md:px-[24px] px-[14px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px] -standards-code"
                />
                <CardTitle
                  text="SASO"
                  className="xxl:rounded-[16px] lg:rounded-[12px] rounded-[8px] bg-[#B68B00] text-white w-fit xxl:px-[66px] xl:px-[48px] lg:px-[36px] md:px-[24px] px-[14px] xxl:py-[16px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[8px] -standards-code"
                />
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};
