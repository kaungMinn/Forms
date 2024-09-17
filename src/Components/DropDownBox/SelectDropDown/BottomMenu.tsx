import { ChangeEvent, RefObject, useEffect } from "react";
import { AvaliableSelectionType } from ".";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import CheckboxInput from "../../Inputs/CheckboxInput";
import TertiaryInput from "../../Inputs/TertiaryInput";
import { valueFinder } from "../Utils/data.utils";
import { CustomizedDropDownDataTypes } from "../CustomizedDropDown/_types";

const TertiaryInputList = (props: {
  dataCenter: Record<string, string | boolean | number>;
  errorCenter: Record<string, string | boolean | number>;

  theme: DefaultThemeTypes;
  refCenter: Record<string, RefObject<HTMLInputElement>>;
  selectedInput: CustomizedDropDownDataTypes;
  /*
    Actions
  */
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  handleHasDropDown: (value: boolean) => void;
}) => {
  const {
    dataCenter,
    errorCenter,
    theme,
    refCenter,
    selectedInput,
    /*
      Actions
    */
    handleOnChange,
    handleHasDropDown,
  } = props;

  let name = "";
  if (typeof selectedInput.value === "string") {
    name = selectedInput.value;
  }
  const value = dataCenter[name].toString();
  const error = errorCenter[name].toString();
  const ref = refCenter[name];

  useEffect(() => {
    if (error || value) {
      handleHasDropDown(true);
    }
  }, []);

  return (
    <TertiaryInput
      name={name}
      value={value}
      theme={theme}
      placeHolderText="Enter something"
      sideLabel={name.toUpperCase()}
      badgeWidth="w-[5rem]"
      errorMessage={error}
      inputRef={ref}
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
  selectInputCenter: CustomizedDropDownDataTypes[];
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
    selectInputCenter,
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
        {selectInputCenter.map((input, index) => (
          <div key={index}>
            <TertiaryInputList
              selectedInput={input}
              theme={theme}
              dataCenter={dataCenter}
              errorCenter={errorCenter}
              refCenter={refCenter}
              handleHasDropDown={handleHasDropDown}
              handleOnChange={handleOnChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomMenu;
