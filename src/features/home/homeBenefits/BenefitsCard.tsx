type BenefitsCardProps = {
  title: string;
  description: string;
  icon: string;
};

export const BenefitsCard: React.FC<BenefitsCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-full gap-4 mx-auto md:gap-10m md:max-w-80 xl:max-w-96">
      <img src={icon} alt="icon" className="w-28 md:w-44 xxl:w-56" />
      <div className="flex flex-col gap-2 md:gap-4">
        <h3 className="text-xl font-normal xl:text-3xl xxl:text-4xl text-muted">{title}</h3>
        <p className="text-sm md:text-lg xl:text-xl text-start text-secondary-foreground">{description}</p>
      </div>
    </div>
  );
};
