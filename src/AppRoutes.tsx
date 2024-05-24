import { Route, Routes } from "react-router-dom";

import { About, Home, Products, ContactUs } from "@/pages";
import { Layout } from "./shared/components";
import { Services } from "./pages/services";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/certified-products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
