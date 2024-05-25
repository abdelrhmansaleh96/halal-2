import { motion } from "framer-motion";

type MapItemProps = {
  icon: string;
  title: string;
  className?: string;
  id: string;
  handleSetCountry: (country: string) => void;
};

export const MapItem: React.FC<MapItemProps> = ({ icon, title, className, id, handleSetCountry }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      className={`flex flex-col justify-center items-center cursor-pointer ${className}`}
      onClick={() => {
        handleSetCountry(id);
      }}
    >
      <img src={icon} alt="icon" className="w-10 h-auto" />
      <p className="hidden text-base font-bold text-white md:block text-primary-foreground">{title}</p>
    </motion.div>
  );
};
