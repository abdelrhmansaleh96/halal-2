import React from "react";
import logo from "@appImg/logo.svg";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
};

export const Drawer: React.FC<Props> = ({ isOpen, setIsOpen, children }) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0 "
          : " transition-all delay-500 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          " w-screen max-w-80 right-0 absolute bg-secondary h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  py-8" +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-80 pb-10 flex flex-col space-y-6 h-full gap-9">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="h-[60px] lg:h-[80px] w-auto" />
          </div>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};
