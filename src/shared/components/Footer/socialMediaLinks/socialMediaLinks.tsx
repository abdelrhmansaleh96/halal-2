import "./socialMediaLinks.scss";
import facebookIcon from "@appIcons/social-media/facebook.svg";
import twitterIcon from "@appIcons/social-media/twitter.svg";
import instagramIcon from "@appIcons/social-media/instagram.svg";
import linkedinIcon from "@appIcons/social-media/linkedin.svg";
import youtubeIcon from "@appIcons/social-media/youtube.svg";
import pinterestIcon from "@appIcons/social-media/pinterest.svg";

const links = [
  { src: facebookIcon, text: "facebook", href: "./" },
  { src: twitterIcon, text: "twitter", href: "./" },
  { src: instagramIcon, text: "instagram", href: "./" },
  { src: linkedinIcon, text: "linkedin", href: "./" },
  { src: youtubeIcon, text: "youtube", href: "./" },
  { src: pinterestIcon, text: "pinterest", href: "./" },
];
const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center xxl:gap-[70px] xl:gap-[58px] lg:gap-[42px] md:gap-[28px] gap-[16px] footer-links-wrapper">
      {links.map((item, index) => (
        <a
          className={"-footer-Nav-link"}
          key={index}
          href={item.href}
          target="_blank"
        >
          <img src={item.src} alt={item.text} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
