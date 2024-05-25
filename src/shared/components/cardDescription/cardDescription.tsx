import { useTranslation } from "react-i18next";
import "./cardDescription.scss";
interface Props {
  text: string;
  className?: string;
}

const CardDescription = ({ className, text }: Props) => {
  const { t } = useTranslation();

  return (
    <h4
      className={`font-normal text-[#AEAEAE]  card-description ${
        className && className
      }`}
    >
      {t(text)}
    </h4>
  );
};

export default CardDescription;
