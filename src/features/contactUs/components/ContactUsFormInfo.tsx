import { ContactInfoItem } from "./ContactInfoItem";
import SectionSubTitle from "@appSharedComponents/sectionSubTitle/sectionSubTitle";
import egFlag from "@appImg/flags/big-eg.svg";
import emailIcon from "@appImg/icons/mail.svg";
import phoneIcon from "@appImg/icons/phone.svg";
import { useTranslation } from "react-i18next";

export const ContactUsFormInfo = () => {
  const { t } = useTranslation();
  const contactInfoItems = [
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
  ];
  return (
    <div className="flex flex-col md:gap-16 xl:gap-28">
      <div className="flex flex-col gap-8 xl:gap-10">
        <SectionSubTitle text={t("contactUs.help")} />
        <p className="text-xl xl:text-2xl text-primary-foreground">{t("contactUs.helpDescription")}</p>
      </div>
      <div className="flex gap-16 items-top">
        <img src={egFlag} alt="flag" className="h-fit" />
        <div className="flex flex-col gap-4">
          <h3 className="mb-1 text-2xl font-bold">Egypt Branch</h3>
          {contactInfoItems.map((item, index) => (
            <ContactInfoItem {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
