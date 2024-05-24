import NavLinkItem from "./nav_link_item";
import { useTranslation } from "react-i18next";

const NavLinks: React.FC = () => {
  const { t } = useTranslation();
  const links = [
    {
      to: "/",
      text: t("links.home"),
    },
    {
      to: "/services",
      text: t("links.services"),
    },
    {
      to: "/certified-products",
      text: t("links.certifiedProducts"),
    },
    {
      to: "/about-us",
      text: t("links.aboutUs"),
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 xl:gap-16">
      {links.map((link, index) => (
        <NavLinkItem key={index} to={link.to} text={link.text} />
      ))}
    </div>
  );
};

export default NavLinks;
