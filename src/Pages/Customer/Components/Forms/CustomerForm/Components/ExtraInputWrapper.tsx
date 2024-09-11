import { ReactNode } from "react";
import { DefaultThemeTypes } from "../../../../../Theme/_types";

const ExtraInputWrapper = (props: {
  colorCondition?: boolean;
  theme: DefaultThemeTypes;
  children: ReactNode;
}) => {
  const { colorCondition, theme, children } = props;
  const { secondaryColor } = theme;
  return (
    <div
      className={`pt-4 pb-2 px-5 rounded-lg ${
        colorCondition && secondaryColor[0]
      }`}
    >
      <div className=" grid grid-cols-1 laptop:grid-cols-2 gap-x-5">
        {children}
      </div>
    </div>
  );
};

export default ExtraInputWrapper;
