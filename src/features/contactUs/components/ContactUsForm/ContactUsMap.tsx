import "./contactUsMap.scss";

import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import map from "@appImg/map.png";
import mapBg from "@appImg/map-bg.png";

export const ContactUsMap: React.FC = () => {
  return (
    <div className="contact-map">
      <div className="title">
        <SectionSubTitle text="Explore our Locations" className="text-white" />
      </div>
      <div className="map">
        <img src={map} alt="map" />
        <div className="map-overlay">
          <div className="map-overlay--content"></div>
          <img src={mapBg} alt="map-bg" />
        </div>
      </div>
    </div>
  );
};
