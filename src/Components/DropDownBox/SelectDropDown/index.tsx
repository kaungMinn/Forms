import { ChangeEvent, RefObject, useState } from "react";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import DropDownContainer from "../Components/DropDownContainer";
import BottomMenu from "./BottomMenu";

import { CustomizedDropDownDataTypes } from "../CustomizedDropDown/_types";

export type AvaliableSelectionType = {
  id?: number;
  _id?: number;
  label: string;
  value?: string | boolean;
};

type SelectDropDownTypes = {
  label?: string;
  isRequired?: boolean;
  theme: DefaultThemeTypes;
  isDisabled?: boolean;
  avaliableSelections: AvaliableSelectionType[];
  dataKey: string;
  dataCenterKey: string;
  dataCenter: Record<string, string | boolean | number>;
  errorCenter?: Record<string, string | boolean | number>;
  refCenter?: Record<string, RefObject<HTMLInputElement>>;
  selectedInputCenter: CustomizedDropDownDataTypes[];
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
};

const SelectDropDown = (props: SelectDropDownTypes) => {
  const {
    label = "",
    isRequired = false,
    isDisabled = false,
    theme,
    avaliableSelections,
    dataKey,
    dataCenterKey,
    dataCenter,
    errorCenter = {},
    refCenter = {},
    selectedInputCenter,
    /*
      Actions
    */
    handleCheck,
    handleOnChange,
    updateErrorCenter,
  } = props;
  const [hasDropDown, setHasDropDown] = useState(false);
  const { alertColor } = theme;

  const handleHasDropDown = (value: boolean) => {
    setHasDropDown(value);
  };

  let value = "";
  if (selectedInputCenter.length > 0) {
    value = selectedInputCenter.map((input) => input.label).join(",");
  }
  const error = errorCenter[dataCenterKey];
  let primaryError = "";
  if (typeof error === "string") primaryError = error;

  return (
    <div>
      <DropDownContainer
        label={label}
        isDisabled={isDisabled}
        isRequired={isRequired}
        theme={theme}
        mainText={value || "Select something"}
        hasDropDown={hasDropDown}
        errorMessage={primaryError}
        dataShower={
          <BottomMenu
            value={value}
            avaliableSelection={avaliableSelections}
            theme={theme}
            dataKey={dataKey}
            dataCenterKey={dataCenterKey}
            dataCenter={dataCenter}
            errorCenter={errorCenter}
            refCenter={refCenter}
            selectInputCenter={selectedInputCenter}
            /*
              Actions
            */
            handleCheck={handleCheck}
            handleOnChange={handleOnChange}
            updateErrorCenter={updateErrorCenter}
            handleHasDropDown={handleHasDropDown}
          />
        }
        /*
          Actions
        */
        handleHasDropDown={handleHasDropDown}
        onClick={() => handleHasDropDown(!hasDropDown)}
      />

      {primaryError ? (
        <div className={`caption-font ${alertColor[4]}`}>{primaryError}</div>
      ) : (
        <div className="py-2"></div>
      )}
    </div>
  );
};

export default SelectDropDown;
