import "./halalStandardsTitle.scss";
type Props = {
  text: string;
  className?: string;
};
export const HalalStandardsTitle = ({ text, className }: Props) => {
  return (
    <h5
      className={`font-semibold text-white  halal-standards-title ${
        className && className
      }`}
    >
      {text}
    </h5>
  );
};
