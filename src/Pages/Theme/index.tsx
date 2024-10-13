import { useState } from "react";
import { DEFAULT_THEMES } from "./constants";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxProvider";
import { setTheme } from "../../Store/slices/theme.slice";
import ThemeCards from "./Components/ThemeCards";
import { DefaultThemeTypes } from "./_types";
import PrimaryWrapper from "../../Components/Wrappers/PrimaryWrapper";
import { db } from "../../DB/db";

const Theme = () => {
  const [themes] = useState<DefaultThemeTypes[]>(DEFAULT_THEMES);

  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);
  const { id, primaryColor, dashboardColor } = theme;
  const [dashboardBg, dashboardText] = dashboardColor;

  const handleTheme = async (theme: DefaultThemeTypes) => {
    dispatch(setTheme(theme));

    try {
      const dbtheme = await db.theme.toArray();

      if (dbtheme.length <= 0) {
        db.theme.add({
          id: 1,
          theme: {
            ...theme,
            logo: theme.id,
            detailLogo: theme.id,
          },
        });
        return;
      }
      await db.theme.put({
        id: 1,
        theme: { ...theme, logo: theme.id, detailLogo: theme.id },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={`${dashboardBg} ${dashboardText}`}>
      <h1 className="heading-font space-y-2">
        <p>Themes</p>
        <p className="caption-font">Manage your themes</p>
      </h1>

      <div className="mt-10">
        <PrimaryWrapper theme={theme}>
          <div className={`grid  laptop:grid-cols-6  gap-5`}>
            <ThemeCards
              themes={themes}
              handleTheme={handleTheme}
              primaryColor={primaryColor}
              selectedCardId={id}
            />
          </div>
        </PrimaryWrapper>
      </div>
    </div>
  );
};

export default Theme;
