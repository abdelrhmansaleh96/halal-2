import { useTranslation } from "react-i18next";
import "./sectionSubTitle.scss";

interface Props {
  className?: string;
  text: string | any;
}

const SectionSubTitle = ({ className, text }: Props) => {
  const { t } = useTranslation();
  return (
    <h4
      className={`font-bold text-[#1E2124] leading-[4.5rem]  section-Sub-Title ${
        className && className
      }`}
    >
      {t(text)}
    </h4>
  );
};

export default SectionSubTitle;
