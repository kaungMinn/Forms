import { useState } from "react";
import { CustomizedDropDownDataTypes, CustomizedDropDownTypes } from "./_types";
import DataShower from "./DataShower";
import DropDownContainer from "../Components/DropDownContainer";

const CustomizedDropDown = (props: CustomizedDropDownTypes) => {
  const {
    label = "",
    isDisabled = false,
    isRequired = false,
    errorMessage = "",
    theme,
    dataKey = "",
    value = "",
    dropDownData = [],
    hasMultiSelect = false,
    dataCenterKey,
    secondaryDataKey,
    secondaryDataCenterKey,
    /*
      Actions
    */
    handleSelect,
    hasSearch = false,
  } = props;
  const [hasDropDown, setHasDropDown] = useState(false);

  const handleHasDropDown = (value: boolean) => {
    setHasDropDown(value);
  };

  const updatedHandleSelect = (
    data: CustomizedDropDownDataTypes,
    dataKey: string,
    dataCenterKey: string
  ) => {
    handleSelect(data, dataKey, dataCenterKey);
    if (hasMultiSelect) return;
    handleHasDropDown(!hasDropDown);
  };

  return (
    <div>
      <DropDownContainer
        label={label}
        isDisabled={isDisabled}
        isRequired={isRequired}
        errorMessage={errorMessage}
        theme={theme}
        mainText={value}
        hasDropDown={hasDropDown}
        dataShower={
          <DataShower
            hasSearch={hasSearch}
            dropDownData={dropDownData}
            theme={theme}
            value={value}
            dataKey={dataKey}
            dataCenterKey={dataCenterKey}
            handleSelect={updatedHandleSelect}
            hasMultiSelect={hasMultiSelect}
            secondaryDataCenterKey={secondaryDataCenterKey}
            secondaryDataKey={secondaryDataKey}
          />
        }
        /*
          Actions
        */
        handleHasDropDown={handleHasDropDown}
        onClick={() => handleHasDropDown(!hasDropDown)}
      />

      {errorMessage ? (
        <div className="text-xs ps-1 text-red-500">{errorMessage}</div>
      ) : (
        <div className="py-2"></div>
      )}
    </div>
  );
};

export default CustomizedDropDown;
