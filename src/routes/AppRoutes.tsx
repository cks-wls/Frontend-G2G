import Main from "@/pages/Main";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Main />} />
    </Routes>
  );
}
export default AppRoutes;