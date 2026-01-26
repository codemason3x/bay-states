import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      {/* add more pages as needed */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
