import { ContactInfoItem } from "./ContactInfoItem";

interface ContactInfoItemPropss {
  selectedCountry: {
    branchName: string;
    branchFlag: string;
    contactInfoItems: {
      icon?: string;
      title: string;
      description: string;
    }[];
  };
}

export const ContactModal: React.FC<ContactInfoItemPropss> = ({
  selectedCountry,
}) => {
  //   const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 md:gap-16 xl:gap-28">
      <ContactInfoItemContainer
        contactInfoItems={selectedCountry.contactInfoItems}
        branchName={selectedCountry.branchName}
        branchFlag={selectedCountry.branchFlag}
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
const ContactInfoItemContainer: React.FC<ContactInfoItemProps> = ({
  contactInfoItems,
  branchFlag,
}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 items-top bg-[#363B41] rounded-lg p-4">
      <img src={branchFlag} alt="flag" className="h-fit w-28" />
      <div className="flex flex-col gap-1">
        {/* <h3 className="mb-1 text-2xl font-bold">{branchName}</h3> */}
        {contactInfoItems.map((item, index) => (
          <ContactInfoItem {...item} key={index} modalItem />
        ))}
      </div>
    </div>
  );
};
