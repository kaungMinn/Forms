import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxProvider";
import { db } from "../../DB/db";
import { setTheme } from "../../Store/slices/theme.slice";
import { THEME_ICON_STRUCTURE } from "../../Pages/Theme/constants";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { dashboardColor } = useAppSelector((state) => state.theme);
  const [bgColor] = dashboardColor;
  const dispatch = useAppDispatch();

  const getTheme = async () => {
    try {
      const theme = await db.theme.toArray();

      if (theme.length > 0) {
        const tmp_theme = theme[0].theme;
        const id = tmp_theme.id as keyof typeof THEME_ICON_STRUCTURE;
        const icon = THEME_ICON_STRUCTURE[id];
        const selected_theme = { ...tmp_theme, logo: icon, detailLogo: icon };
        dispatch(setTheme(selected_theme));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTheme();

    //eslint-disable-next-line
  }, []);
  return (
    <div
      className={`h-full w-full space-y-4 px-4 overflow-y-auto  pt-5 laptop:px-7 ${bgColor}`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
