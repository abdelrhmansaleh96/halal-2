import "./HomeContent.scss";

import { ContactUsSection } from "../contactUsSection/ContactUsSsection";
import { FadingAnimation } from "@/shared/components";
import { HomeBenefits } from "../homeBenefits/HomeBenefits";
import { HomeHero } from "../HomeHero/HomeHero";
import ProductsSection from "../../../shared/components/productsSection/productsSection";

export const HomeContent: React.FC = () => {
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
        <ContactUsSection />
      </div>
    </FadingAnimation>
  );
};
