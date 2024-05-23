import { HalalEgyptAbout, HalalTeamAbout, WhatHalalAbout } from "@/features/about/components";

export const AboutHOC = () => {
  return (
    <section id="about-us">
      <HalalEgyptAbout />
      <WhatHalalAbout />
      <HalalTeamAbout />
    </section>
  );
};
