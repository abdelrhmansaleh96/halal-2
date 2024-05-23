import { ReactNode } from "react";
import "./mainContainer.scss";
interface Props {
  children: ReactNode;
  className?: string;
}

const MainContainer = ({ children, className }: Props) => {
  return (
    <div
      className={`max-w-[1920px] m-auto xxl:w-[85.20%] xl:w-[88%] lg:w-[90%] md:w-[93%] w-[96%] h-[100%] main-Container ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
