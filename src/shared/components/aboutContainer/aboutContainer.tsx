import { ReactNode } from "react";
import "./aboutContainer.scss";
interface Props {
  children: ReactNode;
  className?: string;
}

const AboutContainer = ({ children, className }: Props) => {
  return (
    <div
      className={`max-w-[1920px] m-auto xxl:w-[78.95%] xl:w-[86%] lg:w-[88%] md:w-[90%] w-[94%] h-[100%] about-Container ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};

export default AboutContainer;
