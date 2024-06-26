import { HalalEgyptAbout, WhatHalalAbout } from "@/features/about/components";

import { FadingAnimation } from "@/shared/components";

export const AboutHOC = () => {
  return (
    <FadingAnimation>
      <section id="about-us">
        <HalalEgyptAbout />
        <WhatHalalAbout />
      </section>
    </FadingAnimation>
  );
};
