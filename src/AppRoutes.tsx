import { About, ContactUs, Home, Products, Accreditation } from "@/pages";
import { Route, Routes, useLocation } from "react-router-dom";

import { Layout } from "./shared/components";
import { Services } from "./pages/services";

const AppRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/certified-products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accreditation" element={<Accreditation />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
