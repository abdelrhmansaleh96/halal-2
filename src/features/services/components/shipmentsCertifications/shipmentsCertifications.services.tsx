import MainContainer from "@/shared/components/mainContainer/mainContainer";
import "./shipmentsCertifications.services.scss";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import exportShipmentImg from "@appImg/services/export-shipment.svg";
import importShipmentImg from "@appImg/services/import-shipment.svg";

import { DescriptionTextAbout } from "@/features/about/shared";
import { useTranslation } from "react-i18next";
export const ShipmentsCertificationsServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" w-full xxl:py-[65px] xl:py-[60px] lg:py-[48px] md:py-[36px] py-[24px]  shipments-certifications-wrapper">
        <MainContainer>
          <div className="flex flex-col xxl:gap-[90px] xl:gap-[70px] lg:gap-[50px] md:gap-[30px] gap-[20px] -shipments-certifications-content">
            <SectionSubTitle
              className="max-w-[1110px] --shipments-certifications-title"
              text={t("services.shipmentsCertifications")}
            />
            <div className="flex xxl:gap-[90px] xl:gap-[70px] lg:gap-[50px] md:gap-[30px] gap-[20px]  ">
              <div className="max-w-[280px] max-h-[317px] w-full h-full --halal-Users-img-cover">
                <img
                  className="  ---halal-Users-img  "
                  src={exportShipmentImg}
                  alt="exporter"
                />
              </div>
              <div className="flex flex-col  xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px]">
                <SectionSubTitle
                  className="max-w-[700px]"
                  text={t("services.certificationExportShipment")}
                />
                <DescriptionTextAbout
                  text={t("services.ISEGSuppliersParagraph")}
                />
              </div>
            </div>
            <div className="flex flex-row-reverse xxl:gap-[90px] xl:gap-[70px] lg:gap-[50px] md:gap-[30px] gap-[20px]  ">
              <div className="max-w-[280px] max-h-[317px] w-full h-full --halal-Users-img-cover">
                <img
                  className="  ---halal-Users-img  "
                  src={importShipmentImg}
                  alt="exporter"
                />
              </div>
              <div className="flex flex-col  xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px]">
                <SectionSubTitle
                  className="max-w-[700px]"
                  text="services.certificationImportShipment"
                />
                <DescriptionTextAbout text="services.certificationImportShipmentParagraph" />
              </div>
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
};
