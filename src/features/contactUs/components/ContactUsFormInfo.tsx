import { ContactInfoItem } from "./ContactInfoItem";
import SectionSubTitle from "@appSharedComponents/sectionSubTitle/sectionSubTitle";
import egFlag from "@appImg/flags/big-eg.svg";
import { useTranslation } from "react-i18next";

export const ContactUsFormInfo = () => {
  const { t } = useTranslation();
  const contactInfoItems = [
    {
      icon: "phone",
      title: "contactUs.phone",
      description: "+20123456789",
    },
    {
      icon: "email",
      title: "contactUs.email",
      description: "",
    },
  ];
  return (
    <div className="flex flex-col md:gap-16 xl:gap-28">
      <div className="flex flex-col gap-8 xl:gap-10">
        <SectionSubTitle text={t("contactUs.help")} />
        <p className="text-xl xl:text-2xl text-primary-foreground">{t("contactUs.helpDescription")}</p>
      </div>
      <div className="flex gap-16">
        <img src={egFlag} alt="flag" />
        <div className="flex flex-col">
          {contactInfoItems.map((item, index) => (
            <ContactInfoItem {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
