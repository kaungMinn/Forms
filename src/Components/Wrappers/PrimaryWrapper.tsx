import { ReactNode } from "react";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";

const PrimaryWrapper = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: DefaultThemeTypes;
}) => {
  const [primaryBg] = theme.primaryColor;
  return (
    <div className={`rounded-md pt-5 px-5 pb-2 shadow-md h-full ${primaryBg}`}>
      {children}
    </div>
  );
};

export default PrimaryWrapper;
