import { ContactInfoItem } from "./ContactInfoItem";
import SectionSubTitle from "@appSharedComponents/sectionSubTitle/sectionSubTitle";
import egFlag from "@appImg/flags/big-eg.svg";
import emailIcon from "@appImg/icons/mail.svg";
import phoneIcon from "@appImg/icons/phone.svg";
import { useTranslation } from "react-i18next";

export const ContactUsFormInfo = () => {
  const { t } = useTranslation();
  const egyptItem = {
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
  };
  return (
    <div className="flex flex-col gap-8 md:gap-16 xl:gap-28">
      <div className="flex flex-col gap-1 sm:gap-6 md:gap-8 xl:gap-10">
        <SectionSubTitle text={t("contactUs.help")} />
        <p className="text-lg md:text-xl xl:text-2xl text-primary-foreground">{t("contactUs.helpDescription")}</p>
      </div>

      <ContactInfoItemContainer
        contactInfoItems={egyptItem.contactInfoItems}
        branchName={egyptItem.branchName}
        branchFlag={egyptItem.branchFlag}
      />
    </div>
  );
};

type ContactInfoItemProps = {
  branchName: string;
  branchFlag: string;
  contactInfoItems: {
    icon?: string;
    title: string;
    description: string;
  }[];
};
const ContactInfoItemContainer: React.FC<ContactInfoItemProps> = ({ contactInfoItems, branchName, branchFlag }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 md:gap-16 md:flex-row items-top">
      <img src={branchFlag} alt="flag" className="h-fit w-28" />
      <div className="flex flex-col gap-4">
        <h3 className="mb-1 text-2xl font-bold">{branchName}</h3>
        {contactInfoItems.map((item, index) => (
          <ContactInfoItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
