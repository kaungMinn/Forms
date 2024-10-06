import { DefaultThemeTypes } from "../../Pages/Theme/_types";

type PrimaryBadgeType = {
  theme: DefaultThemeTypes;
  label: string;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
};

const PrimaryBadge = (props: PrimaryBadgeType) => {
  const { theme, label, width, height, bgColor, textColor } = props;
  const { primaryColor } = theme;
  const selectedPrimaryBg = primaryColor[2];
  const selectedText = primaryColor[3];

  return (
    <div
      className={`${bgColor ? bgColor : selectedPrimaryBg} ${width && width} ${
        textColor ? textColor : selectedText
      } ${
        height ? height : "h-9"
      }  caption-font  flex items-center justify-center px-2 rounded-lg shadow-sm`}
    >
      {label ? label : "Badge"}
    </div>
  );
};

export default PrimaryBadge;
