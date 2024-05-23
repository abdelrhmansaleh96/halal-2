import "./sectionSubTitle.scss";

interface Props {
  text: string | React.ReactNode;
  className?: string;
}

const SectionSubTitle = ({ className, text }: Props) => {
  return (
    <h4
      className={`font-bold text-[#1E2124] leading-[4.5rem]  section-Sub-Title ${
        className && className
      }`}
    >
      {text}
    </h4>
  );
};

export default SectionSubTitle;
