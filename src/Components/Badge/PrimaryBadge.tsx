import { DefaultThemeTypes } from "../../Pages/Theme/_types";

type PrimaryBadgeType = {
  theme: DefaultThemeTypes;
  label: string;
  width?: string;
};

const PrimaryBadge = (props: PrimaryBadgeType) => {
  const { theme, label, width } = props;
  const { primaryColor } = theme;
  const selectedPrimaryBg = primaryColor[2];
  const selectedText = primaryColor[3];

  return (
    <div
      className={`${selectedPrimaryBg} ${selectedText} ${
        width && width
      } caption-font h-8 flex items-center justify-center px-2 rounded-md`}
    >
      {label ? label : "Badge"}
    </div>
  );
};

export default PrimaryBadge;
