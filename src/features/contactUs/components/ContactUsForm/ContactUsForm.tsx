import { DescriptionTextAbout } from "@/features/about/shared";
import { ContactInputs, TContactInput } from "../contactInputs";
import "./ContactUsForm.scss";
import { Button } from "@/shadcn/components/ui/button";
export const ContactUsForm = () => {
  const renderInput = (input: TContactInput) => {
    switch (input.inputType) {
      case 1:
        return (
          <div
            className="flex flex-col lg:gap-[8px] gap-[6px] contact-input-group"
            key={input.inputName}
          >
            <label
              className="text-[#1E2124] font-medium -contact-label"
              htmlFor={input.inputName}
            >
              {input.inputLabel}
              <span className="text-[#FF0000]">*</span>
            </label>
            <input
              id={input.inputName}
              name={input.inputName}
              type={input.type}
              placeholder={input.placeholder}
              className=" -contact-input"
            />
          </div>
        );
      case 2:
        return (
          <div
            className="flex flex-col lg:gap-[8px] gap-[6px] contact-input-group"
            key={input.inputName}
          >
            <label
              className="text-[#1E2124] font-medium -contact-label"
              htmlFor={input.inputName}
            >
              {input.inputLabel}
              <span className="text-[#FF0000]">*</span>
            </label>
            <select
              className="-contact-input"
              id={input.inputName}
              name={input.inputName}
            >
              <option value="">{input.placeholder}</option>
              {/* Add your options here */}
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
            </select>
          </div>
        );
      case 3:
        return (
          <div
            className="flex flex-col lg:gap-[8px] gap-[6px] contact-input-group"
            key={input.inputName}
          >
            <label
              className="text-[#1E2124] font-medium -contact-label"
              htmlFor={input.inputName}
            >
              {input.inputLabel}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div>
              <textarea
                id={input.inputName}
                name={input.inputName}
                placeholder={input.placeholder}
                className="-contact-input h-[209px] resize-none w-full"
              />
              <p className="text-[#4E5155] -helper-text">
                Maximum letter 256 for your message
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col xxl:gap-[44px] xl:gap-[32px] lg:gap-[24px] md:gap-[18px] gap-[12px] contact-Form-section-wrapper">
      <DescriptionTextAbout
        className="!font-bold"
        text="Any question or remarks? Just write us a message!"
      />
      <form className="flex flex-col xxl:gap-[32px] xl:gap-[24px] lg:gap-[18px] md:gap-[14px] gap-[10px] -contact-Form-wrapper">
        {ContactInputs.map((input) => renderInput(input))}
        <Button
          className="text-white w-fit xxl:rounded-[15.5px] py-[15.5px] px-[65px] --contact-submit-btn"
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
};
