import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`h-full w-full space-y-4 overflow-y-auto bg-default_light pt-12 laptop:pt-0 `}
    >
      {children}
    </div>
  );
};

export default MainLayout;
