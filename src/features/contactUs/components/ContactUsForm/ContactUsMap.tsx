import "./contactUsMap.scss";

import { MapItem } from "./mapItem";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import brMd from "@appImg/icons/br-md.svg";
import duMd from "@appImg/icons/du-md.svg";
import egMd from "@appImg/icons/eg-md.svg";
import inMd from "@appImg/icons/in-md.svg";
import map from "@appImg/map.png";
import mapBg from "@appImg/map-bg.png";
import nzMd from "@appImg/icons/nz-md.svg";
import usMd from "@appImg/icons/us-md.svg";
import uyMd from "@appImg/icons/uy-md.svg";

export const ContactUsMap: React.FC = () => {
  const flags = [
    {
      icon: egMd,
      title: "Egypt",
      className: "eg-flag",
    },
    {
      icon: duMd,
      title: "German",
      className: "du-flag",
    },
    {
      icon: nzMd,
      title: "New Zealand",
      className: "nz-flag",
    },
    {
      icon: brMd,
      title: "Brazil",
      className: "br-flag",
    },
    {
      icon: usMd,
      title: "United States",
      className: "us-flag",
    },
    {
      icon: uyMd,
      title: "Uruguay",
      className: "uy-flag",
    },
    {
      icon: inMd,
      title: "India",
      className: "in-flag",
    },
  ];

  return (
    <div className="contact-map">
      <div className="title">
        <SectionSubTitle text="Explore our Locations" className="text-white" />
      </div>
      <div className="map">
        <img src={map} alt="map" />
        <div className="map-overlay">
          <div className="map-overlay--content">
            {flags.map((flag, index) => (
              <MapItem key={index} icon={flag.icon} title={flag.title} className={flag.className} />
            ))}
          </div>
          <img src={mapBg} alt="map-bg" className="bg-image" />
        </div>
      </div>
    </div>
  );
};
