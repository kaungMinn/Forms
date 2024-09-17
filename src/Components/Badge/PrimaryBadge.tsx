import { DefaultThemeTypes } from "../../Pages/Theme/_types";

type PrimaryBadgeType = {
  theme: DefaultThemeTypes;
  label: string;
  width?: string;
  height?: string;
  bgColor?: string;
};

const PrimaryBadge = (props: PrimaryBadgeType) => {
  const { theme, label, width, height, bgColor } = props;
  const { primaryColor } = theme;
  const selectedPrimaryBg = primaryColor[2];
  const selectedText = primaryColor[3];

  return (
    <div
      className={`${bgColor ? bgColor : selectedPrimaryBg} ${selectedText} ${
        width && width
      } ${
        height ? height : "h-9"
      }  caption-font  flex items-center justify-center px-2 rounded-lg shadow-sm`}
    >
      {label ? label : "Badge"}
    </div>
  );
};

export default PrimaryBadge;
