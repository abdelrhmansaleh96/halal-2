import {
  CertificationProcessServices,
  HalalBenefitsServices,
  HalalUsersServices,
} from "@/features/services/components";

export const ServicesHOC = () => {
  return (
    <section id="services">
      <HalalBenefitsServices />
      <CertificationProcessServices />
      <HalalUsersServices />
    </section>
  );
};
