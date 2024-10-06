import { ReactNode, useState } from "react";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";

type HoverWrapperType = {
  children: ReactNode;
  theme: DefaultThemeTypes;
  isSelected?: boolean;
};
const HoverWrapper = (props: HoverWrapperType) => {
  const { children, theme, isSelected = false } = props;
  const { primaryColor } = theme;
  const selectedBg = primaryColor[2];
  const selectedText = primaryColor[3];
  const [isHover, setIsHover] = useState(false);
  const handleIsHover = (value: boolean) => {
    setIsHover(value);
  };
  return (
    <div
      className={`cursor-pointer rounded-lg ${
        (isHover || isSelected) && `${selectedBg} ${selectedText}`
      }`}
      onMouseEnter={() => handleIsHover(true)}
      onMouseLeave={() => handleIsHover(false)}
    >
      {children}
    </div>
  );
};

export default HoverWrapper;
