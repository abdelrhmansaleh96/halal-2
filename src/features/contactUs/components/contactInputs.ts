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
    inputLabel: "First Name",
    placeholder: "Enter your first name",
    inputType: 1,
    type: "text",
  },
  {
    inputName: "lastName",
    inputLabel: "Last Name",
    placeholder: "Enter your last name",
    inputType: 1,
    type: "text",
  },
  {
    inputName: "email",
    inputLabel: "Email",
    placeholder: "Enter your email address",
    inputType: 1,
    type: "email",
  },
  {
    inputName: "phoneNumber",
    inputLabel: "Phone Number",
    placeholder: "Enter your mobile",
    inputType: 1,
    type: "text",
  },
  {
    inputName: "subject",
    inputLabel: "Choose Subject",
    placeholder: "Ask about products",
    inputType: 2,
    type: "select",
  },
  {
    inputName: "message",
    inputLabel: "Your Message",
    placeholder: "Enter your inquiry message",
    inputType: 3,
    type: "text",
  },
];
