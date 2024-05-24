import {
  SpecificationsAccreditation,
  ProfessionalPerformanceAccreditation,
} from "@/features/accreditation/components";

export const AccreditationHOC = () => {
  return (
    <section id="accreditation">
      <ProfessionalPerformanceAccreditation />
      <SpecificationsAccreditation />
    </section>
  );
};
