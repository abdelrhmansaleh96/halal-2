import { ContactUsSection } from "@/features/home/contactUsSection/ContactUsSsection";
import {
  CertificationProcessServices,
  CertificationProvider,
  HalalBenefitsServices,
  HalalUsersServices,
  ShipmentsCertificationsServices,
} from "@/features/services/components";

export const ServicesHOC = () => {
  return (
    <section id="services">
      <HalalBenefitsServices />
      <CertificationProcessServices />
      <HalalUsersServices />
      <CertificationProvider />
      <ShipmentsCertificationsServices />
      <ContactUsSection
        title="For more information"
        description="If you have any question or inquiry press the button Help me"
        btnText="Submit your Inquiry"
      />
    </section>
  );
};
