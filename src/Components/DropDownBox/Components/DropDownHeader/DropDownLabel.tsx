import { DefaultThemeTypes } from "../../../../Pages/Theme/_types";

type DropDownLabelType = {
  label: string;
  isRequired: boolean;
  theme: DefaultThemeTypes;
};
const DropDownLabel = (props: DropDownLabelType) => {
  const { label = "", isRequired = false, theme } = props;
  const { alertColor } = theme;
  return (
    <>
      {label && (
        <div className="block caption-font">
          {label} {isRequired && <span className={`${alertColor[4]}`}>**</span>}
        </div>
      )}
    </>
  );
};

export default DropDownLabel;
