type Props = {
  className?: string;
};
export const ShiftArrowLeft = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="36"
      viewBox="0 0 39 36"
      fill="none"
      className={`xxl:w-[35px] xl:w-[30px] lg:w-[25px] md:w-[20px] w-[15px]  ${
        className && className
      }`}
    >
      <path
        d="M0.898891 10.1345L16.6299 10.1345L16.6299 0.302627L38.26 18L16.6299 35.6974L16.6299 25.8655L0.89889 25.8655L0.898891 10.1345Z"
        fill="#AEAEAE"
      />
    </svg>
  );
};
