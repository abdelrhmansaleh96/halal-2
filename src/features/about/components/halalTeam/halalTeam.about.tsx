import SectionSubTitle from "@/shared/components/sectionSubTitle/sectionSubTitle";
import { DescriptionTextAbout } from "../../shared";
import "./halalTeam.about.scss";
import AboutContainer from "@/shared/components/aboutContainer/aboutContainer";
import avatar from "@appImg/about/avatar.svg";

type Props = {};
export const HalalTeamAbout = ({}: Props) => {
  return (
    <div className="w-full bg-[#C09300] xxl:py-[36px] xl:py-[28px] lg:py-[22px] md:py-[18px]  py-[14px] halal-team">
      <AboutContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 xxl:gap-[65px] xl:gap-[60px] lg:gap-[48px] md:gap-[36px] gap-[24px] -halal-team-content-wrapper">
          <div className="flex flex-col xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px] justify-center --halal-team-about">
            <SectionSubTitle
              text={
                <>
                  IS EG Halal
                  <br />
                  Team
                </>
              }
              className="text-[#FFFFFF] font-normal"
            />
            <DescriptionTextAbout
              text="Halal food refers to what is permissible or lawful in traditional Islamic law. It encompasses various aspects beyond just the ingredients, including how the food is prepared and processed."
              className="text-[#FFFFFF]"
            />
            <DescriptionTextAbout
              text="Halal food must be free from prohibited ingredients (such as pork and alcohol), and the slaughter process follows specific rules."
              className="text-[#FFFFFF]"
            />
            <DescriptionTextAbout
              text="Additionally, Halal living extends to behavior, ethics, dress code, and financial transactions. Trust, integrity, and adherence to Islamic principles form the core of Halal practice."
              className="text-[#FFFFFF]"
            />
          </div>

          <div className="flex justify-center --halal-team-avatar-wrapper">
            <img
              src={avatar}
              alt="halal-team"
              className="rounded-[50%] object-cover ---halal-team-avatar-img"
            />
          </div>
        </div>
      </AboutContainer>
    </div>
  );
};
