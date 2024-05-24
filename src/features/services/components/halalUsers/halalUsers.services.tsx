import MainContainer from "@/shared/components/mainContainer/mainContainer";
import "./halalUsers.services.scss";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import { DescriptionTextAbout } from "@/features/about/shared";
import exporterImg from "@appImg/services/exporter.svg";
import importersImg from "@appImg/services/importers.svg";

import suppliersImg from "@appImg/services/suppliers.svg";
import { useTranslation } from "react-i18next";

export const HalalUsersServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" w-full xxl:py-[65px] xl:py-[60px] lg:py-[48px] md:py-[36px] py-[24px]  halal-Users-wrapper">
        <MainContainer>
          <div className="flex flex-col xxl:gap-[90px] xl:gap-[70px] lg:gap-[50px] md:gap-[30px] gap-[20px] -halal-Users-content">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-0">
              <SectionSubTitle
                className="max-w-[620px] --halal-Users-title"
                text={t("services.ISEGHalalUsers")}
              />
              <DescriptionTextAbout text={t("services.ISEGHalalParagraph")} />
            </div>
            <div className="flex xxl:gap-[90px] xl:gap-[70px] lg:gap-[50px] md:gap-[30px] gap-[20px]  ">
              <div className="max-w-[280px] max-h-[317px] w-full h-full --halal-Users-img-cover">
                <img
                  className="  ---halal-Users-img  "
                  src={exporterImg}
                  alt="exporter"
                />
              </div>
              <div className="flex flex-col justify-center xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px]">
                <SectionSubTitle
                  className=""
                  text={t("services.ISEGHalalUsers")}
                />
                <DescriptionTextAbout
                  text={t("services.ISEGHalalParagraphTwo")}
                />
              </div>
            </div>
            <div className="flex flex-row-reverse xxl:gap-[90px] xl:gap-[70px] lg:gap-[50px] md:gap-[30px] gap-[20px]  ">
              <div className="max-w-[280px] max-h-[317px] w-full h-full --halal-Users-img-cover">
                <img
                  className="  ---halal-Users-img  "
                  src={importersImg}
                  alt="exporter"
                />
              </div>
              <div className="flex flex-col  xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px]">
                <SectionSubTitle
                  className="max-w-[700px]"
                  text={t("services.importersTitle")}
                />
                <DescriptionTextAbout text={t("services.importersParagraph")} />
              </div>
            </div>
            <div className="flex xxl:gap-[90px] xl:gap-[70px] lg:gap-[50px] md:gap-[30px] gap-[20px]  ">
              <div className="max-w-[280px] max-h-[317px] w-full h-full --halal-Users-img-cover">
                <img
                  className="  ---halal-Users-img  "
                  src={suppliersImg}
                  alt="exporter"
                />
              </div>
              <div className="flex flex-col justify-around xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px]">
                <SectionSubTitle className="" text={t("services.suppliers")} />
                <DescriptionTextAbout text={t("services.suppliersParagraph")} />
              </div>
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
};
