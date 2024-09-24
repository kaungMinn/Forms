import { useState } from "react";
import { CustomizedDropDownDataTypes, CustomizedDropDownTypes } from "./_types";
import DataShower from "./DataShower";
import DropDownContainer from "../Components/DropDownContainer";
import { stateCleaner } from "../../../Utils/Data/States/cleaner.utils";

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
    hasSearch = false,

    /*
      Structures
    */
    childCleaningStructure,
    childPassingStructure,

    /*
      Actions
    */
    handleSelect,
    updateDataCenter,
    updateErrorCenter,
  } = props;
  const [hasDropDown, setHasDropDown] = useState(false);

  const handleHasDropDown = (value: boolean) => {
    setHasDropDown(value);
  };

  const select = (
    data: Record<string, unknown>,
    dataKey: string,
    dataCenterKey: string
  ) => {
    let value = data[dataKey];
    if (typeof value === "undefined") {
      console.log("Change valid datakey");
      return;
    }
    if (typeof value === "number") value = value.toString();
    updateDataCenter && updateDataCenter(dataCenterKey, value as string);
    updateErrorCenter && updateErrorCenter(dataCenterKey, "");

    if (childPassingStructure) {
      const childPasser = childPassingStructure[dataCenterKey];
      if (childPasser) {
        childPasser(data);
      }
    }

    if (childCleaningStructure) {
      const childCleaner = childCleaningStructure[dataCenterKey];
      if (childCleaner) {
        if (updateDataCenter) {
          stateCleaner(childCleaner, updateDataCenter);
        }
        if (updateErrorCenter) {
          stateCleaner(childCleaner, updateErrorCenter);
        }
      }
    }
  };

  const updatedHandleSelect = (
    data: CustomizedDropDownDataTypes,
    dataKey: string,
    dataCenterKey: string
  ) => {
    if (handleSelect) {
      handleSelect(data, dataKey, dataCenterKey);
    } else {
      select(data, dataKey, dataCenterKey);
    }
    if (hasMultiSelect) return;
    handleHasDropDown(!hasDropDown);
  };

  const { alertColor } = theme;

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

      <div className="mt-1"></div>

      {errorMessage ? (
        <div className={`caption-font ps-1  ${alertColor[4]}`}>
          {errorMessage}
        </div>
      ) : (
        <div className="py-2"></div>
      )}
    </div>
  );
};

export default CustomizedDropDown;
