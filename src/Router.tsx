import { Route, Routes } from "react-router-dom";
import { PROTECTED_ROUTE_LIST, PUBLIC_ROUTE } from "./Constants/route_lists";
import SideBarLayout from "./Layouts/SidebarLayout";
import { Suspense } from "react";
import MainLayout from "./Layouts/MainLayout";
import DashboardLoading from "./Components/Loadings/DashboardLoading";

export const Router = () => {
  return (
    <Routes>
      <Route element={<SideBarLayout />}>
        {PUBLIC_ROUTE.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<DashboardLoading />}>
                <MainLayout>{route.element}</MainLayout>
              </Suspense>
            }
          />
        ))}
        {PROTECTED_ROUTE_LIST.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<DashboardLoading />}>
                <MainLayout>{route.element}</MainLayout>
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};
