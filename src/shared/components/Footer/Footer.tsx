import "./Footer.scss";
import FooterLinks from "./footerLinks/footerLinks";
import SocialMediaLinks from "./socialMediaLinks/socialMediaLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="xxl:py-[58px] xl:py-[48px] lg:py-[32px] md:py-[28px] py-[24px] flex flex-col xxl:gap-[68px] xl:gap-[48px] lg:gap-[32px] md:gap-[24px] gap-[16px] links-wrapper ">
        <SocialMediaLinks />
        <FooterLinks />
      </div>
      <div className="bg-[#1E2124] xxl:py-[20px] xl:py-[18px] lg:py-[16px] md:py-[14px] py-[12px] -copyright-wrapper">
        <p className="text-[#FFFFFF] font-normal text-center --copyright-text">
          © {currentYear} IS EG Halal Egypt All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
