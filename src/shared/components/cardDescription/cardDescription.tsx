import "./cardDescription.scss";
interface Props {
  text: string;
  className?: string;
}

const CardDescription = ({ className, text }: Props) => {
  return (
    <h4
      className={`font-normal text-[#AEAEAE]  card-description ${
        className && className
      }`}
    >
      {text}
    </h4>
  );
};

export default CardDescription;
