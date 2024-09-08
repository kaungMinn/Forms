import React from "react";
import { useAppSelector } from "../../Hooks/ReduxProvider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { dashboardColor } = useAppSelector((state) => state.theme);
  const [bgColor] = dashboardColor;
  return (
    <div
      className={`h-full w-full space-y-4 px-4 overflow-y-auto  pt-5 laptop:px-7 ${bgColor}`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
