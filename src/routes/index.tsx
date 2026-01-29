import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ExamplePage } from "../pages/ExamplePage";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/example"
        element={<ExamplePage />}
      />

      {/* add more pages as needed */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
