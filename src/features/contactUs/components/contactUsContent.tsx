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
      branchName: "Egypt Branch",
      branchFlag: egFlag,
      contactInfoItems: [
        {
          title: "Address",
          description: "City Center, New Cairo 1, Cairo Governorate 11865",
        },
        {
          icon: emailIcon,
          title: "Email",
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
      branchName: "India Branch",
      branchFlag: indiaFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: "Email",
          description: "India@iseghalal-egy.com",
        },
      ],
    },
    {
      id: "br",
      branchName: "Brazil Branch",
      branchFlag: brazilFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: "Email",
          description: "Brazil@iseghalal-egy.com",
        },
      ],
    },
    {
      id: "uy",
      branchName: "Urguay Branch",
      branchFlag: uyFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: "Email",
          description: "urguay@iseghalal-egy.com",
        },
      ],
    },
    {
      id: "us",
      branchName: "USA Branch",
      branchFlag: usFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: "Email",
          description: "usa@iseghalal-egy.com",
        },
      ],
    },
    {
      id: "de",
      branchName: "Germany Branch",
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
      branchName: "New Zwaland Branch",
      branchFlag: newZwalandFlag,
      contactInfoItems: [
        {
          icon: emailIcon,
          title: "Email",
          description: "newzwaland@iseghalal-egy.com",
        },
      ],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const handleSetCountry = (countryId: string) => {
    const country = countries.find((country) => country.id === countryId);
    if (country) {
      setSelectedCountry(country);
    }
  };
  return (
    <FadingAnimation>
      <div className="flex flex-col">
        <ContactUsMapContainer handleSetCountry={handleSetCountry} />
        {selectedCountry && <ContactFormContainer selectedCountry={selectedCountry} />}
      </div>
    </FadingAnimation>
  );
};
