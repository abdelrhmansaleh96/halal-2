// import styles from "./Header.module.scss";

import { DrawerContent } from "../drawer";
import { LanguageToggle } from "../language/language-toggle";
import NavLinks from "./nav_links";
import logo from "@appImg/logo.svg";

export const Header: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <header className="bg-secondary w-full h-[90px] lg:h-[120px] flex items-center py-3 px-7 md:px-16 lg:px-[70px] justify-between">
      <img src={logo} alt="logo" className="h-[60px] lg:h-[80px] w-48 sm:w-56 md:w-auto" />
      <div className="flex flex-col-reverse items-end justify-center h-full gap-4 xs:items-center sm:flex-row md:flex-col md:items-end xl:gap-6">
        <LanguageToggle />
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className="block md:hidden">
          <DrawerContent />
        </div>
      </div>
    </header>
  );
};

{
  /* <ModeToggle /> */
}
