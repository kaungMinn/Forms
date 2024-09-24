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
    <div className={`rounded-md p-5 shadow-md h-full ${primaryBg}`}>
      {children}
    </div>
  );
};

export default PrimaryWrapper;
