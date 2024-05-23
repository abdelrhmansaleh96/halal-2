import "./descriptionText.about.scss";
type Props = {
  text: string;
  className?: string;
};

export const DescriptionTextAbout = ({ text, className }: Props) => {
  return (
    <p className={`font-normal description-text ${className && className}`}>
      {text}
    </p>
  );
};
