import { ContactFormContainer } from "./ContactFormContainer";
import { FadingAnimation } from "@/shared/components";

export const ContactUsContent: React.FC = () => {
  return (
    <FadingAnimation>
      <div className="flex flex-col">
        <ContactFormContainer />
      </div>
    </FadingAnimation>
  );
};
