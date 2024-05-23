import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shadcnUiComponents/select";

import arLogo from "@appImg/flags/eg.svg";
import brLogo from "@appImg/flags/br.svg";
import deLogo from "@appImg/flags/de.svg";
import enLogo from "@appImg/flags/en.svg";
import hiLogo from "@appImg/flags/in.svg";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", logo: enLogo },
  { code: "ar", name: "Arabic", logo: arLogo },
  { code: "de", name: "Deutsch", logo: deLogo },
  { code: "br", name: "Português", logo: brLogo },
  { code: "hi", name: "Hindi", logo: hiLogo },
];

export function LanguageToggle() {
  // const { language, setLanguage } = useLanguage();
  const { i18n, t } = useTranslation();

  return (
    <div className="flex items-center gap-3">
      <h6 className="hidden md:block text-secondary-foreground font-medium text-sm">{t("chooseLang")}</h6>
      <Select
        defaultValue={i18n.language}
        onValueChange={(value) => {
          i18n.changeLanguage(value);
          // setLanguage(value);
        }}
      >
        <SelectTrigger className="w-32 h-8 bg-popover-foreground border-popover-foreground text-secondary-foreground rounded-md">
          <SelectValue />
        </SelectTrigger>
        <SelectContent defaultValue={"en"} className="bg-popover-foreground">
          {languages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className={
                i18n.language === lang.code
                  ? "font-bold text-white w-full px-4 text-sm"
                  : "text-secondary-foreground w-full px-4 text-sm"
              }
              showCheckIcon={false}
            >
              <div className="flex items-center w-full justify-between">
                <img src={lang.logo} alt={lang.name} className="w-4 h-3 mr-2" />
                {lang.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>{" "}
    </div>
  );
}
