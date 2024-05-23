import { NavLink } from "react-router-dom";
import "./footerLinks.scss";
const links = [
  { text: "Home", to: "./" },
  { text: "Services", to: "./services" },
  { text: "Certified Products", to: "./certified-products" },
  { text: "About Us", to: "./about-us" },
  { text: "contact Us", to: "./contact-us" },
];
const FooterLinks = () => {
  return (
    <div className="flex justify-center xxl:gap-[70px] xl:gap-[58px] lg:gap-[42px] md:gap-[28px] gap-[16px] footer-links-wrapper">
      {links.map((item, index) => (
        <NavLink className={"-footer-Nav-link"} key={index} to={item.to}>
          {item.text}
        </NavLink>
      ))}
    </div>
  );
};

export default FooterLinks;
