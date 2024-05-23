import "./productsSection.scss";

import MainContainer from "@appSharedComponents/mainContainer/mainContainer";
import ProductCard from "@/shared/components/productCard/productCard";
import { ProductsSlider } from "../productsSlider/productsSlider";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import { TProductCard } from "@/shared/models";
import product0 from "@appImg/products/product0.png";
import product1 from "@appImg/products/product1.png";
import product2 from "@appImg/products/product2.png";
import product3 from "@appImg/products/product3.png";
import product4 from "@appImg/products/product4.png";

type Props = {
  productsWrapperClassName?: string;
  sectionSubTitleClassName?: string;
  productCardClassName?: string;
  ProductTitleClassName?: string;
};
const ProductsSection = ({
  productsWrapperClassName,
  sectionSubTitleClassName,
  productCardClassName,
  ProductTitleClassName,
}: Props) => {
  const products: TProductCard[] = [
    { img: product0, title: "Pharmaceuticals" },
    { img: product1, title: "Agro food​ ​" },
    { img: product2, title: "Food Additives" },
    { img: product3, title: "Personal care" },
    { img: product4, title: "Meat packing" },
  ];
  return (
    <div
      className={`xxl:py-[62px] xl:py-[48px] lg:py-[36px] md:py-[24px] py-[16px] products-wrapper ${
        productsWrapperClassName && productsWrapperClassName
      } `}
    >
      <MainContainer className="xxl:pb-[34px] xl:pb-[28px] lg:pb-[20px] md:pb-[16px] pb-[12px]">
        <SectionSubTitle
          text="Certified Products from
IS EG Halal"
          className={` max-w-[48rem] ${sectionSubTitleClassName && sectionSubTitleClassName}`}
        />
      </MainContainer>
      <ProductsSlider>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            title={product.title}
            productCardClassName={productCardClassName && productCardClassName}
            ProductTitleClassName={ProductTitleClassName && ProductTitleClassName}
          />
        ))}
      </ProductsSlider>
    </div>
  );
};

export default ProductsSection;
