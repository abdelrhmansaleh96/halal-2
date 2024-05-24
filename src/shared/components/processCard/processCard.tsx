import "./processCard.scss";

export type Props = {
  title: string;
  processCardClassName?: string; // use this prop to add ClassNames to add the card shadows and any other styles for product-card-wrapper
  processTitleClassName?: string;
  backgroundColor: string;
};

const ProcessCard = ({
  processCardClassName,
  title,
  processTitleClassName,
  backgroundColor,
}: Props) => {
  return (
    <div
      className={`bg-cover  rounded-full product-card-wrapper lg:p-2 p-1  process-card-wrapper  ${
        processCardClassName && processCardClassName
      }`}
    >
      <div
        style={{ backgroundColor }}
        className="rounded-full h-full w-full  flex justify-center items-center -process-card-title-wrapper"
      >
        <h5
          className={`text-[#1E2124] text-center --process-card-title  ${
            processTitleClassName && processTitleClassName
          } `}
        >
          {title}
        </h5>
      </div>
    </div>
  );
};

export default ProcessCard;
