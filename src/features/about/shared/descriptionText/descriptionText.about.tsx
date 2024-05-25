import { useTranslation } from "react-i18next";
import "./descriptionText.about.scss";
type Props = {
  text: string;
  className?: string;
};

export const DescriptionTextAbout = ({ text, className }: Props) => {
  const { t } = useTranslation();
  return (
    <p className={`font-normal description-text ${className && className}`}>
      {t(text)}
    </p>
  );
};
