import "./map.scss";

import { ContactModal } from "../contactModal.component";
import MapImg from "./mapImg";
import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import closeIcon from "../../../../assets/icons/close_small.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface MapProps {
  handleSetCountry: (country: string | null) => void;
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

export const Map: React.FC<MapProps> = ({ handleSetCountry, selectedCountry, openModal, setOpenModal }) => {
  const { t } = useTranslation();
  // const rtl = i18n.dir() === "rtl";

  return (
    <div id="contact-map" className="relative flex flex-col">
      <MapImg handleSetCountry={handleSetCountry} />

      <SectionSubTitle text={t("countries.exploreOurLocations")} className="text-white -explore-map-text" />

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
          className="absolute right-0 contact-modal bottom-2 max-w-72"
        >
          <img
            src={closeIcon}
            alt="close"
            className="absolute cursor-pointer close-icon top-4 right-4"
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
