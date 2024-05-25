import "./productCard.scss";

export type Props = {
  title: string;
  productCardClassName?: string; // use this prop to add ClassNames to add the card shadows and any other styles for product-card-wrapper
  ProductTitleClassName?: string;
  img: string;
};

const ProductCard = ({
  productCardClassName,
  title,
  img,
  ProductTitleClassName,
}: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`bg-cover rounded-[8px] xxl:py-[20px]  xxl:h-[496px] xl:h-[400px] lg:h-[320px] md:h-[280px] h-[200px] product-card-wrapper flex items-end mx-3  ${
        productCardClassName && productCardClassName
      }`}
    >
      <h5
        className={`font-semibold text-center text-white  w-full xl:py-[18px] lg:py-[16px] md:py-[14px] py-[12px] -product-card-title  ${
          ProductTitleClassName && ProductTitleClassName
        } `}
      >
        {title}
      </h5>
    </div>
  );
};

export default ProductCard;
