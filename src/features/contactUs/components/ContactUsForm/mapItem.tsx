import { motion } from "framer-motion";

type MapItemProps = {
  icon: string;
  title: string;
  className?: string;
};

export const MapItem: React.FC<MapItemProps> = ({ icon, title, className }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      className={`flex flex-col justify-center items-center cursor-pointer ${className}`}
    >
      <img src={icon} alt="icon" className="w-10 h-auto" />
      <p className="hidden text-base font-bold text-white md:block text-primary-foreground">{title}</p>
    </motion.div>
  );
};
