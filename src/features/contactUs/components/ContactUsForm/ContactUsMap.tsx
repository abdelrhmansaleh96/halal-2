import "./contactUsMap.scss";

import { ContactModal } from "../contactModal.component";
import { MapItem } from "./mapItem";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import brMd from "@appImg/icons/br-md.svg";
import closeIcon from "../../../../assets/icons/close_small.svg";
import duMd from "@appImg/icons/du-md.svg";
import egMd from "@appImg/icons/eg-md.svg";
import inMd from "@appImg/icons/in-md.svg";
import map from "@appImg/map.png";
import mapBg from "@appImg/map-bg.png";
import { motion } from "framer-motion";
import nzMd from "@appImg/icons/nz-md.svg";
import usMd from "@appImg/icons/us-md.svg";
import { useTranslation } from "react-i18next";
import uyMd from "@appImg/icons/uy-md.svg";

interface ContactUsMapProps {
  handleSetCountry: (country: string) => void;
  selectedCountry: {
    id: string;
    branchName: string;
    branchFlag: string;
    contactInfoItems: {
      icon?: string;
      title: string;
      description: string;
    }[];
  };
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

export const ContactUsMap: React.FC<ContactUsMapProps> = ({
  handleSetCountry,
  selectedCountry,
  openModal,
  setOpenModal,
}) => {
  const flags = [
    {
      id: "eg",
      icon: egMd,
      title: "countries.egypt",
      className: "eg-flag",
    },
    {
      id: "du",
      icon: duMd,
      title: "countries.Germany",
      className: "du-flag",
    },
    {
      id: "nz",
      icon: nzMd,
      title: "countries.NewZealand",
      className: "nz-flag",
    },
    {
      id: "br",
      icon: brMd,
      title: "countries.brazil",
      className: "br-flag",
    },
    {
      id: "us",
      icon: usMd,
      title: "countries.usa",
      className: "us-flag",
    },
    {
      id: "uy",
      icon: uyMd,
      title: "countries.uruguay",
      className: "uy-flag",
    },
    {
      id: "in",
      icon: inMd,
      title: "countries.india",
      className: "in-flag",
    },
  ];

  const { t, i18n } = useTranslation();
  const rtl = i18n.dir() === "rtl";

  return (
    <div className="contact-map">
      <div className="title">
        <SectionSubTitle text={t("countries.exploreOurLocations")} className="text-white" />
      </div>
      <div className="map">
        <img src={map} alt="map" className="object-contain sm:object-initial" />
        <div className="map-overlay">
          <div className={`map-overlay--content ${rtl && "rtl"}`}>
            {flags.map((flag, index) => (
              <MapItem
                key={index}
                icon={flag.icon}
                title={flag.title}
                className={flag.className}
                handleSetCountry={() => {
                  handleSetCountry(flag.id);
                  setOpenModal(true);
                }}
                id={flag.id}
              />
            ))}
          </div>
          <img src={mapBg} alt="map-bg" className="bg-image" />
        </div>
      </div>
      {openModal && (
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 100,
          }}
          className="contact-modal"
        >
          <img
            src={closeIcon}
            alt="close"
            className="close-icon"
            onClick={() => {
              setOpenModal(false);
            }}
          />
          <ContactModal selectedCountry={selectedCountry} />
        </motion.div>
      )}
    </div>
  );
};

// "title": "Benefits of Issuing Halal Certificates",
// "discover": "Discover Everything that is Halal",
// "bio": "Halal food refers to what is permissible or lawful in traditional Islamic law",
// "certificates": "Benefits of Issuing Halal Certificates",
// "paragraphOne": "Obtaining the Halal certificates slogan will support the credibility of applying Islamic standard specifications for traded food products in the market.",
// "paragraphTwo": "Raising the standards of traded foods products (quality and safety) and increasing the competitiveness of products exported to Islamic countries and the satisfaction of Muslims from non-Islamic countries.",
// "paragraphThree": "Confirmation of customers confidence in the lawful and safety of their food and how it handled in the restaurants and hospitality services.",
// "iseg": "Certified Products from IS EG Halal",
// "pharmaceuticals": "Pharmaceuticals",
// "agroFood​": "Agro food",
// "foodAdditives": "Food Additives",
// "personalCare": "Personal Care",
// "meatPacking": "Meat Packing",
// "needCertificates": "Need to be Halal Certified",
// "subscribeHalal": "Subscribe to get the benefits of IS EG Halal certification around the world",
// "product5": "Meet and their products.",
// "product6": "Halal chemical and biochemical ingredients",
// "product7": "Dairy Products",
// "product8": "Food contact materials",
// "product9": "Bakery products.",
// "product10": "Food additives."
