import { About, ContactUs, Home } from "@/pages";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./shared/components";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
