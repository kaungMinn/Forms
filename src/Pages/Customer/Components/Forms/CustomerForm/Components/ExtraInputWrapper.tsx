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
      className={` px-5 rounded-lg ${
        colorCondition && `${secondaryColor[0]} border pt-4 pb-3`
      }`}
    >
      <div className=" grid grid-cols-2 gap-x-5 gap-y-2">{children}</div>
      <div className="py-1" />
    </div>
  );
};

export default ExtraInputWrapper;
