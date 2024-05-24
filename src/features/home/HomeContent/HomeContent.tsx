import "./HomeContent.scss";

import { ContactUsSection } from "../contactUsSection/ContactUsSsection";
import { FadingAnimation } from "@appSharedComponents/fadingAnimation/FadingAnimation";
import { HomeBenefits } from "../homeBenefits/HomeBenefits";
import { HomeHero } from "../HomeHero/HomeHero";
import ProductsSection from "../../../shared/components/productsSection/productsSection";
import { useTranslation } from "react-i18next";

export const HomeContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <FadingAnimation>
      <div id="home" className="flex flex-col">
        <HomeHero />
        <HomeBenefits />
        <ProductsSection
          productsWrapperClassName="bg-[#C09300]"
          sectionSubTitleClassName="text-white"
          productCardClassName="home-product-card"
          ProductTitleClassName="home-product-title"
        />
        <ContactUsSection
          title="services.needCertificates"
          description="Subscribe to get the benefits of IS EG Halal certification around the world"
          btnText={t("contact")}
        />
      </div>
    </FadingAnimation>
  );
};
