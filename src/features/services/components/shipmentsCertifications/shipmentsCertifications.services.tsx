import MainContainer from "@/shared/components/mainContainer/mainContainer";
import "./shipmentsCertifications.services.scss";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import exportShipmentImg from "@appImg/services/export-shipment.svg";
import importShipmentImg from "@appImg/services/import-shipment.svg";

import { DescriptionTextAbout } from "@/features/about/shared";
export const ShipmentsCertificationsServices = () => {
  return (
    <>
      <div className=" w-full xxl:py-[65px] xl:py-[60px] lg:py-[48px] md:py-[36px] py-[24px]  shipments-certifications-wrapper">
        <MainContainer>
          <div className="flex flex-col xxl:gap-[90px] xl:gap-[70px] lg:gap-[50px] md:gap-[30px] gap-[20px] -shipments-certifications-content">
            <SectionSubTitle
              className="max-w-[1110px] --shipments-certifications-title"
              text="ISEG HALAL Shipments Certifications "
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
                  text="Halal Certification for 
Export Shipment"
                />
                <DescriptionTextAbout text="ISEG Suppliers refer to companies or slaughterhouses located outside Egypt that seek to supply their products to Egypt and are requesting Halal Egypt accreditation." />
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
                  text="Halal Certification for 
                  Import Shipment"
                />
                <DescriptionTextAbout text="ISEG issues Halal certificates for exported shipments, our expert team ensures rigorous validation and inspection. We verify that the goods adhere to Islamic guidelines and meet international health standards. Simply submit the necessary shipment documents, and our team will handle the entire process within Egypt—from production to issuing the required Halal certificate and facilitating export. Trust ISEG for accurate and efficient Halal certification." />
              </div>
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
};
