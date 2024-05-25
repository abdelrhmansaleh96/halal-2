import { ContactUsForm } from "./ContactUsForm/ContactUsForm";
import { ContactUsFormInfo } from "./ContactUsFormInfo";
import { MainContainer } from "@appSharedComponents/main-container/MainContainer";

interface ContactFormContainerProps {
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
}

export const ContactFormContainer: React.FC<ContactFormContainerProps> = ({ selectedCountry }) => {
  return (
    <MainContainer>
      <div className="grid grid-cols-1 py-8 sm:py-20 md:grid-cols-2 gap-14 md:gap-48 lg:gap-52 xxl:gap-56">
        <div className="col-span-1">
          <ContactUsFormInfo selectedCountry={selectedCountry} />
        </div>
        <div className="col-span-1">
          <ContactUsForm />
        </div>
      </div>
    </MainContainer>
  );
};
