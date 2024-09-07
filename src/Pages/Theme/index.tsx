import { useState } from "react";
import { DEFAULT_THEMES } from "./constants";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxProvider";
import { setTheme } from "../../Store/slices/theme.slice";
import ThemeCards from "./Components/ThemeCards";
import { DefaultThemeTypes } from "./_types";

const Theme = () => {
  const [themes] = useState<DefaultThemeTypes[]>(DEFAULT_THEMES);
  const { dashboardColor } = useAppSelector((state) => state.theme);
  const [dashboardBg] = dashboardColor;

  const dispatch = useAppDispatch();
  const { id, primaryColor } = useAppSelector((state) => state.theme);

  const handleTheme = (theme: DefaultThemeTypes) => {
    dispatch(setTheme(theme));
  };
  return (
    <>
      <h1 className="heading-font">
        <p>Themes</p>
        <p className="caption-font">Manage your themes</p>
      </h1>
      <div
        className={`grid  laptop:grid-cols-6  gap-5 mt-10 rounded-md p-5 shadow-md ${dashboardBg}`}
      >
        <ThemeCards
          themes={themes}
          handleTheme={handleTheme}
          primaryColor={primaryColor}
          selectedCardId={id}
        />
      </div>
    </>
  );
};

export default Theme;
