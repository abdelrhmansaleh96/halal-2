import { FadingAnimation } from "@/shared/components";
import { HalalStandardsProducts } from "@/features/products/components/halalStandards/halalStandards.products";
import ProductsSection from "@/shared/components/productsSection/productsSection";
import { WhoClientsProducts } from "@/features/products/components";

export const ProductsHOC = () => {
  return (
    <FadingAnimation>
      <section id="Products">
        <ProductsSection productsWrapperClassName="bg-[#F5F7F8]" />
        <HalalStandardsProducts />
        <WhoClientsProducts />
      </section>
    </FadingAnimation>
  );
};
