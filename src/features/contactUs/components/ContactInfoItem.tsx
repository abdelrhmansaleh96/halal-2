type ContactInfoItemProps = {
  icon?: string;
  title: string;
  description: string;
  modalItem?: boolean;
};

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, description, modalItem }) => {
  return (
    <div className={`flex items-start gap-2 md:gap-4 max-w-full ${modalItem ? "max-w-72" : "md:max-w-[70%]"}`}>
      {icon && <img src={icon} alt="icon" className="mt-2 h-fit" />}
      <div>
        <h3 className={`text-base font-normal md:text-lg ${modalItem ? "text-white" : "text-primary-foreground"}`}>
          {title}
        </h3>
        <p className={`text-lg md:text-xl ${modalItem ? "text-white" : "text-gray-foreground"}`}>{description}</p>
      </div>
    </div>
  );
};
