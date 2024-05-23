type ContactInfoItemProps = {
  icon?: string;
  title: string;
  description: string;
};

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4">
      {icon && <img src={icon} alt="icon" />}
      <div>
        <h3 className="text-lg font-bold text-primary-foreground">{title}</h3>
        <p className="text-sm text-gray-foreground">{description}</p>
      </div>
    </div>
  );
};
