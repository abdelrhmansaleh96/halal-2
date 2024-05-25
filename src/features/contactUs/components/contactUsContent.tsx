import { ContactFormContainer } from "./ContactFormContainer";
import { ContactUsMapContainer } from "./ContactUsForm/ContactUsMapContainer";
import { FadingAnimation } from "@/shared/components";
import brazilFlag from "@appImg/flags/big-br.svg";
import egFlag from "@appImg/flags/big-eg.svg";
import emailIcon from "@appImg/icons/mail.svg";
import germanyFlag from "@appImg/flags/big-de.svg";
import indiaFlag from "@appImg/flags/big-in.svg";
import newZwalandFlag from "@appImg/flags/big-nz.svg";
import phoneIcon from "@appImg/icons/phone.svg";
import usFlag from "@appImg/flags/big-us.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import uyFlag from "@appImg/icons/uy-md.svg";

// import uruguayFlag from "@appImg/flags/big-us.svg";

export const ContactUsContent: React.FC = () => {
  const { t } = useTranslation();
  const countries = [
    {
      id: "eg",
      branchName: t("countries.egyptBranch"),
      branchFlag: egFlag,
      contactInfoItems: [
        {
          title: t("countries.address"),
          description: "City Center, New Cairo 1, Cairo Governorate 11865",
        },
        {
          icon: emailIcon,
          title: t("countries.email"),
          description: "egypt@iseghalal-eg.com",
        },
        {
          icon: phoneIcon,
          title: "Phone",
          description: "+20 1010005656",
        },
      ],
    },
    {
      id: "in",
      branchName: t("countries.indiaBranch"),
      branchFlag: indiaFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: t("countries.email"),
          description: "India@iseghalal-egy.com",
        },
      ],
    },
    {
      id: "br",
      branchName: t("countries.brazilBranch"),
      branchFlag: brazilFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: t("countries.email"),
          description: "Brazil@iseghalal-egy.com",
        },
      ],
    },
    {
      id: "uy",
      branchName: t("countries.uyBranch"),
      branchFlag: uyFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: t("countries.email"),
          description: "urguay@iseghalal-egy.com",
        },
      ],
    },
    {
      id: "us",
      branchName: t("countries.usaBranch"),
      branchFlag: usFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: t("countries.email"),
          description: "usa@iseghalal-egy.com",
        },
      ],
    },
    {
      id: "de",
      branchName: t("countries.germanyBranch"),
      branchFlag: germanyFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: "Email",
          description: "germany@iseghalal-egy.com",
        },
      ],
    },
    {
      id: "nz",
      branchName: t("countries.nzBranch"),
      branchFlag: newZwalandFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: t("countries.email"),
          description: "newzwaland@iseghalal-egy.com",
        },
      ],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [openModal, setOpenModal] = useState(false);
  const handleSetCountry = (countryId: string) => {
    const country = countries.find((country) => country.id === countryId);
    if (country) {
      setSelectedCountry(country);
    }
  };
  return (
    <FadingAnimation>
      <div className="flex flex-col">
        <ContactUsMapContainer
          handleSetCountry={handleSetCountry}
          selectedCountry={selectedCountry}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        {selectedCountry && <ContactFormContainer selectedCountry={selectedCountry} />}
      </div>
    </FadingAnimation>
  );
};
