type ContactInfoItemProps = {
  icon?: string;
  title: string;
  description: string;
};

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-2 md:gap-4 max-w-full md:max-w-[70%]">
      {icon && <img src={icon} alt="icon" className="mt-2 h-fit" />}
      <div>
        <h3 className="text-base font-normal md:text-lg text-primary-foreground">{title}</h3>
        <p className="text-lg md:text-xl text-gray-foreground">{description}</p>
      </div>
    </div>
  );
};
