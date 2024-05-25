import { useTranslation } from "react-i18next";
import "./halalStandardsTitle.scss";
type Props = {
  text: string;
  className?: string;
};
export const HalalStandardsTitle = ({ text, className }: Props) => {
  const { t } = useTranslation();
  return (
    <h5
      className={`font-semibold text-white  halal-standards-title ${
        className && className
      }`}
    >
      {t(text)}
    </h5>
  );
};
