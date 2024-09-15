import { ChangeEvent } from "react";
import { AvaliableSelectionType } from ".";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import CheckboxInput from "../../Inputs/CheckboxInput";
import TertiaryInput from "../../Inputs/TertiaryInput";
import { valueFinder } from "../Utils/data.utils";

type BottomMenuType = {
  value: string;
  avaliableSelection: AvaliableSelectionType[];
  theme: DefaultThemeTypes;
  dataKey: string;
  dataCenterKey: string;
  dataCenter: Record<string, string | boolean | number>;
  /*
    Actions
  */
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
};

const BottomMenu = (props: BottomMenuType) => {
  const {
    avaliableSelection,
    theme,
    dataKey,
    dataCenterKey,
    dataCenter,
    /*
      Actions
    */
    handleCheck,
    handleOnChange,
  } = props;
  const { primaryColor } = theme;
  const value = valueFinder(dataCenter, dataCenterKey);

  const [primaryBg] = primaryColor;
  const inputConfig = value
    .trim()
    .split(",")
    .filter((config) => config !== "");

  return (
    <div className={` p-5  shadow rounded-lg space-y-5 ${primaryBg}`}>
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
                  theme={theme}
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

      <hr />

      <div className="space-y-2 ">
        {inputConfig.map((name, index) => {
          const value = valueFinder(dataCenter, name);
          return (
            <div key={index}>
              <TertiaryInput
                name={name}
                value={value}
                theme={theme}
                placeHolderText="Enter something"
                sideLabel={name}
                badgeWidth="w-[5rem]"
                /*
                Actions
              */
                onChange={handleOnChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomMenu;
