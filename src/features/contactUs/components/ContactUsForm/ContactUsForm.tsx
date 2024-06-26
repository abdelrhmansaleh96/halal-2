import "./ContactUsForm.scss";

import { ContactInputs, TContactInput } from "../contactInputs";

import { Button } from "@/shadcn/components/ui/button";
import { DescriptionTextAbout } from "@/features/about/shared";
import { useTranslation } from "react-i18next";

export const ContactUsForm = () => {
  const { t } = useTranslation();

  const products = [
    { title: t("homeBenefits.pharmaceuticals") },
    { title: t("homeBenefits.agroFood​") },
    { title: t("homeBenefits.foodAdditives") },
    { title: t("homeBenefits.personalCare") },
    { title: t("homeBenefits.meatPacking") },
    { title: t("homeBenefits.product5") },
    { title: t("homeBenefits.product6") },
    { title: t("homeBenefits.product7") },
    { title: t("homeBenefits.product8") },
    { title: t("homeBenefits.product9") },
  ];
  const renderInput = (input: TContactInput) => {
    switch (input.inputType) {
      case 1:
        return (
          <div className="flex flex-col lg:gap-[8px] gap-[6px] contact-input-group" key={input.inputName}>
            <label className="text-[#1E2124] font-medium -contact-label" htmlFor={input.inputName}>
              {t(input.inputLabel)}
              <span className="text-[#FF0000]">*</span>
            </label>
            <input
              id={input.inputName}
              name={input.inputName}
              type={input.type}
              placeholder={t(input.placeholder)}
              className=" -contact-input"
            />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col lg:gap-[8px] gap-[6px] contact-input-group" key={input.inputName}>
            <label className="text-[#1E2124] font-medium -contact-label" htmlFor={input.inputName}>
              {t(input.inputLabel)}
              <span className="text-[#FF0000]">*</span>
            </label>
            <select className="-contact-input" id={input.inputName} name={input.inputName}>
              <option value="">{t(input.placeholder)}</option>
              {products.map((product, index) => (
                <option key={index} value={product.title}>
                  {product.title}
                </option>
              ))}
            </select>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col lg:gap-[8px] gap-[6px] contact-input-group" key={input.inputName}>
            <label className="text-[#1E2124] font-medium -contact-label" htmlFor={input.inputName}>
              {t(input.inputLabel)}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div>
              <textarea
                id={input.inputName}
                name={input.inputName}
                placeholder={t(input.placeholder)}
                className="-contact-input h-[209px] resize-none w-full"
              />
              <p className="text-[#4E5155] -helper-text">Maximum letter 256 for your message</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col xxl:gap-[44px] xl:gap-[32px] lg:gap-[24px] md:gap-[18px] gap-[12px] contact-Form-section-wrapper">
      <DescriptionTextAbout className="!font-bold" text={t("countries.remarks")} />
      <form className="flex flex-col xxl:gap-[32px] xl:gap-[24px] lg:gap-[18px] md:gap-[14px] gap-[10px] -contact-Form-wrapper">
        {ContactInputs.map((input) => renderInput(input))}
        <Button
          className="text-white w-fit xxl:rounded-[15.5px] py-[15.5px] px-[65px] --contact-submit-btn"
          type="submit"
        >
          {t("countries.Send")}
        </Button>
      </form>
    </div>
  );
};
