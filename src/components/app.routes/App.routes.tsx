import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../home/Home"));
const FormData = lazy(() => import("../form.data/Form.data"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        {/* <Route path="" element={<Home></Home>}></Route> */}
        <Route path="" element={<FormData></FormData>}></Route>
      </Routes>
    </Suspense>
  );
}
