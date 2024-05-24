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
    </section>
  );
};
