import { useState } from "react";
import DropDownHeader from "../DropDownHeader";
import { CustomizedDropDownDataTypes, CustomizedDropDownTypes } from "./_types";
import DataShower from "./DataShower";

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
    handleSelect,
    hasMultiSelect = false,
  } = props;
  const [hasDropDown, setHasDropDown] = useState(false);
  const handleHasDropDown = () => {
    setHasDropDown(!hasDropDown);
  };

  const updatedHandleSelect = (
    data: CustomizedDropDownDataTypes,
    dataKey: string
  ) => {
    handleSelect(data, dataKey);
    if (hasMultiSelect) return;
    handleHasDropDown();
  };

  return (
    <div className="relative">
      <DropDownHeader
        label={label}
        isDisabled={isDisabled}
        isRequired={isRequired}
        errorMessage={errorMessage}
        theme={theme}
        mainText={value}
        hasDropDown={hasDropDown}
        /* 
          Actions
        */
        onClick={handleHasDropDown}
      />

      <div
        className={` absolute w-full top-[3.8rem]  ${
          hasDropDown ? "scale-1" : "scale-0"
        } duration-150`}
      >
        <DataShower
          hasSearch={true}
          dropDownData={dropDownData}
          theme={theme}
          value={value}
          dataKey={dataKey}
          handleSelect={updatedHandleSelect}
          hasMultiSelect={hasMultiSelect}
        />
      </div>
    </div>
  );
};

export default CustomizedDropDown;
