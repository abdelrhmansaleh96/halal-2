import MainContainer from "@/shared/components/mainContainer/mainContainer";
import "./whoClients.products.scss";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import { DescriptionTextAbout } from "@/features/about/shared";
export const WhoClientsProducts = () => {
  return (
    <div className="bg-[#1E2124] xxl:py-[55px] xl:py-[48px] lg:py-[36px] md:py-[24px] py-[16px]  who-clients">
      <MainContainer>
        <div className="grid lg:grid-cols-12 grid-cols-1 xxl:gap-[52px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px]">
          <div className="col-span-5 flex flex-col xxl:gap-[40px] xl:gap-[32px] lg:gap-[20px] md:gap-[16px] gap-[10px]  ">
            <SectionSubTitle
              text="Who are our clients?"
              className="max-w-[500px] text-white"
            />
          </div>
          <div className="col-span-7 flex flex-col xxl:gap-[24px] xl:gap-[20px] lg:gap-[18px] md:gap-[14px] gap-[10px]">
            <DescriptionTextAbout
              text="Any entity worldwide interested in exporting foods and other products to Egypt and the Muslim world."
              className=" text-white"
            />
            <DescriptionTextAbout
              text="We strive to prosper with companies of all calibers, guiding them through the Halal Certification process."
              className=" text-white"
            />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};
