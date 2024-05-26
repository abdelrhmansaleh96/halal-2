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
import product5 from "../../../assets/product1.png";
import product6 from "../../../assets/product2.png";
import product7 from "../../../assets/product3.png";
import product8 from "../../../assets/product4.png";
import product9 from "../../../assets/product5.png";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const products: TProductCard[] = [
    { img: product0, title: "homeBenefits.pharmaceuticals" },
    { img: product1, title: "homeBenefits.agroFood​" },
    { img: product2, title: "homeBenefits.foodAdditives" },
    { img: product3, title: "homeBenefits.personalCare" },
    { img: product4, title: "homeBenefits.meatPacking" },
    { img: product5, title: "homeBenefits.product5" },
    { img: product6, title: "homeBenefits.product6" },
    { img: product7, title: "homeBenefits.product7" },
    { img: product8, title: "homeBenefits.product8" },
    { img: product9, title: "homeBenefits.product9" },
  ];

  return (
    <div
      className={`xxl:py-[62px] xl:py-[48px] lg:py-[36px] md:py-[24px] py-[16px] products-wrapper ${
        productsWrapperClassName && productsWrapperClassName
      } `}
    >
      <MainContainer className="xxl:pb-[34px] xl:pb-[28px] lg:pb-[20px] md:pb-[16px] pb-[12px]">
        {/* <CustomBreadcrumbs breadcrumbs={breadcrumbs} /> */}
        <SectionSubTitle
          text={t("homeBenefits.iseg")}
          className={` max-w-[48rem] ${sectionSubTitleClassName && sectionSubTitleClassName}`}
        />
      </MainContainer>
      <ProductsSlider>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            title={t(product.title)}
            productCardClassName={productCardClassName && productCardClassName}
            ProductTitleClassName={ProductTitleClassName && ProductTitleClassName}
          />
        ))}
      </ProductsSlider>
    </div>
  );
};

export default ProductsSection;
