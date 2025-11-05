import Main from "@/pages/Main";
import Layout from "@/shared/components/Layout";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;