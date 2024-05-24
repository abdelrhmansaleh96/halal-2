import { Button } from "@/shadcn/components/ui/button";
import { MainContainer } from "@appSharedComponents/main-container/MainContainer";
import { MoveRight } from "lucide-react";
import SectionSubTitle from "@appSharedComponents/sectionSubTitle/sectionSubTitle";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ContactUsSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleContactUs = () => {
    navigate("/contact-us");
  };
  return (
    <div className="w-full py-12 bg-muted-foreground md:py-14">
      <MainContainer>
        <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <SectionSubTitle text={t("homeBenefits.needCertificates")} />
            <p className="text-lg lg:text-[28px]">
              {t("homeBenefits.subscribeHalal")}
            </p>
          </div>
          <Button
            className="font-normal text-black bg-transparent border-[1.5px] border-black w-fit rounded-2xl text-xl md:text-3xl h-auto hover:text-white hover:border-transparent"
            onClick={handleContactUs}
          >
            {t("contact")}
            <MoveRight size={24} className="w-8 ml-6 " />
          </Button>
        </div>
      </MainContainer>
    </div>
  );
};
