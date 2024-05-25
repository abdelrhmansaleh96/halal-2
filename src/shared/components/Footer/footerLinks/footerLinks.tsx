import { NavLink } from "react-router-dom";
import "./footerLinks.scss";
import { useTranslation } from "react-i18next";
const links = [
  { text: "links.home", to: "./" },
  { text: "links.services", to: "./services" },
  { text: "links.certifiedProducts", to: "./certified-products" },
  { text: "links.accreditation", to: "./accreditation" },
  { text: "links.aboutUs", to: "./about-us" },
  { text: "contact", to: "./contact-us" },
];
const FooterLinks = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center xxl:gap-[70px] xl:gap-[58px] lg:gap-[42px] md:gap-[28px] gap-[16px] footer-links-wrapper">
      {links.map((item, index) => (
        <NavLink className={"-footer-Nav-link"} key={index} to={item.to}>
          {t(item.text)}
        </NavLink>
      ))}
    </div>
  );
};

export default FooterLinks;
