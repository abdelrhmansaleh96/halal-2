import { ContactUsMap } from "./ContactUsMap";
import { CustomBreadcrumbs } from "@/shared/components/customBreadcrumbs/customBreadcrumbs";
import { MainContainer } from "@/shared/components/main-container/MainContainer";
import { useTranslation } from "react-i18next";

interface ContactUsMapContainerProps {
  handleSetCountry: (country: string | null) => void;
  selectedCountry: {
    id: string;
    branchName: string;
    branchFlag: string;
    contactInfoItems: {
      icon?: string;
      title: string;
      description: string;
    }[];
  };
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

export const ContactUsMapContainer: React.FC<ContactUsMapContainerProps> = ({
  handleSetCountry,
  selectedCountry,
  openModal,
  setOpenModal,
}) => {
  const { t } = useTranslation();
  const breadcrumbs = [
    {
      name: t("links.home"),
      path: "/",
    },
    {
      name: t("links.contactUs"),
      path: "/contactUs",
    },
  ];
  return (
    // <div className="w-full min-h-[calc(100vh-120px)] pt-4 bg-muted">
    <div className="w-full pt-4 bg-muted h-auto md:min-h-[unset] md:h-[calc(100vh_-_120px)]">
      <MainContainer>
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
        {/* <Map
          handleSetCountry={handleSetCountry}
          selectedCountry={selectedCountry}
          openModal={openModal}
          setOpenModal={setOpenModal}
        /> */}
        <ContactUsMap
          handleSetCountry={handleSetCountry}
          selectedCountry={selectedCountry}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </MainContainer>
    </div>
  );
};
