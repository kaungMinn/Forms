import { ChangeEvent, RefObject, useCallback, useEffect } from "react";
import { AvaliableSelectionType } from ".";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import CheckboxInput from "../../Inputs/CheckboxInput";
import TertiaryInput from "../../Inputs/TertiaryInput";
import { valueFinder } from "../Utils/data.utils";

const TertiaryInputList = (props: {
  dataCenter: Record<string, string | boolean | number>;
  errorCenter: Record<string, string | boolean | number>;
  name: string;
  theme: DefaultThemeTypes;
  refCenter: Record<string, RefObject<HTMLInputElement>>;
  /*
    Actions
  */

  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  handleHasDropDown: (value: boolean) => void;
}) => {
  const {
    dataCenter,
    errorCenter,
    name,
    theme,
    refCenter,
    handleOnChange,
    handleHasDropDown,
  } = props;
  const value = valueFinder(dataCenter, name);
  const error = errorCenter[name.toLowerCase()];
  let errorMessage = "";
  if (typeof error === "string") errorMessage = error;

  const handleDropDown = useCallback(() => {
    if (!errorMessage) return;
    handleHasDropDown(true);
  }, [errorMessage, handleHasDropDown]);

  useEffect(() => {
    handleDropDown();
  }, [handleDropDown]);

  return (
    <TertiaryInput
      name={name.toLowerCase()}
      value={value}
      theme={theme}
      placeHolderText="Enter something"
      sideLabel={name}
      badgeWidth="w-[5rem]"
      errorMessage={errorMessage}
      inputRef={refCenter[name.toLowerCase()]}
      /*
                Actions
              */
      onChange={handleOnChange}
    />
  );
};

const CheckInputList = (props: {
  selection: AvaliableSelectionType;
  value: string;
  dataCenterKey: string;
  dataKey: string;
  theme: DefaultThemeTypes;
  /*
      Actions
    */
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  updateErrorCenter: (key: string, value: string) => void;
}) => {
  const {
    selection,
    value,
    dataCenterKey,
    dataKey,
    theme,
    /*
      Actions
    */
    updateErrorCenter,
    handleCheck,
  } = props;
  const requiredType = selection[dataKey as keyof AvaliableSelectionType];
  const label = typeof requiredType === "string" ? requiredType : "";
  const isChecked = value.includes(label.trim());
  const handleIsChecked = () => {
    handleCheck(selection, dataKey, dataCenterKey);
    updateErrorCenter(dataCenterKey, "");
  };
  return (
    <div className="caption-font">
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
};

type BottomMenuType = {
  value: string;
  avaliableSelection: AvaliableSelectionType[];
  theme: DefaultThemeTypes;
  dataKey: string;
  dataCenterKey: string;
  dataCenter: Record<string, string | boolean | number>;
  errorCenter: Record<string, string | boolean | number>;
  refCenter: Record<string, RefObject<HTMLInputElement>>;
  /*
    Actions
  */
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  updateErrorCenter: (key: string, value: string) => void;
  handleHasDropDown: (value: boolean) => void;
};

const BottomMenu = (props: BottomMenuType) => {
  const {
    avaliableSelection,
    theme,
    dataKey,
    dataCenterKey,
    dataCenter,
    errorCenter,
    refCenter,
    /*
      Actions
    */
    handleCheck,
    handleOnChange,
    updateErrorCenter,
    handleHasDropDown,
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
            return (
              <div key={idx}>
                <CheckInputList
                  selection={selection}
                  value={value}
                  dataCenterKey={dataCenterKey}
                  dataKey={dataKey}
                  theme={theme}
                  /*
                Actions
              */
                  handleCheck={handleCheck}
                  updateErrorCenter={updateErrorCenter}
                />
              </div>
            );
          }
        )}
      </div>

      <hr />

      <div className="space-y-2 ">
        {inputConfig.map((name, index) => {
          return (
            <div key={index}>
              <TertiaryInputList
                dataCenter={dataCenter}
                errorCenter={errorCenter}
                refCenter={refCenter}
                name={name}
                theme={theme}
                /*
                  Actions
                */
                handleOnChange={handleOnChange}
                handleHasDropDown={handleHasDropDown}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomMenu;
