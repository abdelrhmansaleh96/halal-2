import { ContactFormContainer } from "./ContactFormContainer";
import { ContactUsMapContainer } from "./ContactUsForm/ContactUsMapContainer";
import { FadingAnimation } from "@/shared/components";

export const ContactUsContent: React.FC = () => {
  return (
    <FadingAnimation>
      <div className="flex flex-col">
        <ContactUsMapContainer />
        <ContactFormContainer />
      </div>
    </FadingAnimation>
  );
};
