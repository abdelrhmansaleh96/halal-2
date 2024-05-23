import "./cardTitle.scss";
interface Props {
  text: string;
  className?: string;
}

const CardTitle = ({ className, text }: Props) => {
  return (
    <h4
      className={`font-normal text-[#1E2124]  card-title ${
        className && className
      }`}
    >
      {text}
    </h4>
  );
};

export default CardTitle;
