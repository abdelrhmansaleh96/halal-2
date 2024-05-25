export type TContactInput = {
  inputName: string;
  inputLabel: string;
  placeholder: string;
  inputType: number;
  type: string;
};
export const ContactInputs: TContactInput[] = [
  {
    inputName: "firstName",
    inputLabel: "countries.firstName",
    placeholder: "countries.firstnamePlaceHolder",
    inputType: 1,
    type: "text",
  },
  {
    inputName: "lastName",
    inputLabel: "countries.LastName",
    placeholder: "countries.lastnamePlaceHolder",
    inputType: 1,
    type: "text",
  },
  {
    inputName: "email",
    inputLabel: "countries.email",
    placeholder: "countries.emailPlaceholder",
    inputType: 1,
    type: "email",
  },
  {
    inputName: "phoneNumber",
    inputLabel: "countries.PhoneNumber",
    placeholder: "countries.enterYourPhoneNumber",
    inputType: 1,
    type: "text",
  },
  {
    inputName: "subject",
    inputLabel: "countries.ChooseSubject",
    placeholder: "countries.ChooseSubjectPlaceholder",
    inputType: 2,
    type: "select",
  },
  {
    inputName: "message",
    inputLabel: "countries.YourMessage",
    placeholder: "countries.yourMessagePlaceholder",
    inputType: 3,
    type: "text",
  },
];
