type ContactInfoItemProps = {
  icon?: string;
  title: string;
  description: string;
};

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 max-w-[70%]">
      {icon && <img src={icon} alt="icon" className="mt-2 h-fit" />}
      <div>
        <h3 className="text-lg font-normal text-primary-foreground">{title}</h3>
        <p className="text-xl text-gray-foreground">{description}</p>
      </div>
    </div>
  );
};
