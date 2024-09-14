import { AvaliableSelectionType } from ".";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import CheckboxInput from "../../Inputs/CheckboxInput";

type BottomMenuType = {
  value: string;
  avaliableSelection: AvaliableSelectionType[];
  theme: DefaultThemeTypes;
  dataKey: string;
  dataCenterKey: string;
  /*
    Actions
  */
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void;
};

const BottomMenu = (props: BottomMenuType) => {
  const {
    value,
    avaliableSelection,
    theme,
    dataKey,
    dataCenterKey,
    handleCheck,
  } = props;
  const { primaryColor } = theme;

  const [primaryBg] = primaryColor;
  return (
    <div className={` p-5  shadow rounded-lg ${primaryBg}`}>
      <div className="flex justify-between">
        {avaliableSelection.map(
          (selection: AvaliableSelectionType, idx: number) => {
            const requiredType =
              selection[dataKey as keyof AvaliableSelectionType];
            const label = typeof requiredType === "string" ? requiredType : "";

            const isChecked = value.includes(label.trim());
            const handleIsChecked = () => {
              handleCheck(selection, dataKey, dataCenterKey);
            };
            return (
              <div key={idx} className="caption-font">
                <CheckboxInput
                  isChecked={isChecked}
                  label={label}
                  /*
                  Actions
                */
                  handleIsChecked={handleIsChecked}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default BottomMenu;
