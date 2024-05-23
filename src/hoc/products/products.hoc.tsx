import { WhoClientsProducts } from "@/features/products/components";
import { HalalStandardsProducts } from "@/features/products/components/halalStandards/halalStandards.products";
import ProductsSection from "@/shared/components/productsSection/productsSection";

export const ProductsHOC = () => {
  return (
    <section id="Products">
      <ProductsSection productsWrapperClassName="bg-[#F5F7F8]" />
      <HalalStandardsProducts />
      <WhoClientsProducts />
    </section>
  );
};
