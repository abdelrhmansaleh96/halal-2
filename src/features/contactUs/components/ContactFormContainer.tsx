import { ContactUsForm } from "./ContactUsForm";
import { ContactUsFormInfo } from "./ContactUsFormInfo";
import { MainContainer } from "@appSharedComponents/main-container/MainContainer";

export const ContactFormContainer = () => {
  return (
    <MainContainer>
      <div className="grid grid-cols-2 py-20 gap-14 md:gap-48 lg:gap-52 xxl:gap-56">
        <div className="col-span-1">
          <ContactUsFormInfo />
        </div>
        <div className="col-span-1">
          <ContactUsForm />
        </div>
      </div>
    </MainContainer>
  );
};
