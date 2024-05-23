import { AlignJustify } from "lucide-react";
import { Drawer } from "./drawer";
import NavLinks from "../Header/nav_links";
import { useState } from "react";

export const DrawerContent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        <AlignJustify onClick={() => setIsOpen(true)} color="white" />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="px-10">
          <NavLinks />
        </div>
      </Drawer>
    </div>
  );
};
