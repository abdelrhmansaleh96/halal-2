import {
  CertificationProcessServices,
  HalalBenefitsServices,
} from "@/features/services/components";

export const ServicesHOC = () => {
  return (
    <section id="services">
      <HalalBenefitsServices />
      <CertificationProcessServices />
    </section>
  );
};
