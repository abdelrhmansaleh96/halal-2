import { ContactUsMap } from "./ContactUsMap";
import { CustomBreadcrumbs } from "@/shared/components/customBreadcrumbs/customBreadcrumbs";
import { MainContainer } from "@/shared/components/main-container/MainContainer";
import { useTranslation } from "react-i18next";

export const ContactUsMapContainer: React.FC = () => {
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
    <div className="w-full h-100% md:h-[calc(100vh-120px)] pt-4 bg-muted">
      <MainContainer>
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
        <ContactUsMap />
      </MainContainer>
    </div>
  );
};
