import { useCallback, useEffect, useRef, useState } from "react";
import DropDownHeader from "../Components/DropDownHeader";
import { CustomizedDropDownDataTypes, CustomizedDropDownTypes } from "./_types";
import DataShower from "./DataShower";
import { dropDownHeightFinder, hasBelowSpace } from "../Utils/position.utils";
import DropDownWrapper from "../Components/DropDownWrapper";

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
  const [isNoSpace, setIsNoSpace] = useState(false);
  const [height, setHeight] = useState<string>("4.2rem");

  const ref = useRef<HTMLDivElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const handleHasDropDown = () => {
    setHasDropDown(!hasDropDown);
  };

  const updatedHandleSelect = (
    data: CustomizedDropDownDataTypes,
    dataKey: string,
    dataCenterKey: string
  ) => {
    handleSelect(data, dataKey, dataCenterKey);
    if (hasMultiSelect) return;
    handleHasDropDown();
  };

  const checkClickedOutside = useCallback(
    (e: MouseEvent) => {
      if (
        hasDropDown &&
        ref.current &&
        !ref.current?.contains(e.target as Node)
      ) {
        setHasDropDown(false);
      }
    },
    [hasDropDown]
  );

  useEffect(() => {
    document.addEventListener("mousedown", checkClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkClickedOutside);
    };
  }, [hasDropDown, checkClickedOutside]);

  //LIFE CIRCLES

  useEffect(() => {
    setIsNoSpace(hasBelowSpace(dropDownRef, ref, hasDropDown));
    setHeight(dropDownHeightFinder(dropDownRef));
  }, [hasDropDown, dropDownRef]);

  return (
    <div className="relative" ref={ref}>
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

      <DropDownWrapper
        hasDropDown={hasDropDown}
        dropDownRef={dropDownRef}
        isNoSpace={isNoSpace}
        dropDownHeight={height}
      >
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
      </DropDownWrapper>

      {errorMessage ? <div>{errorMessage}</div> : <div className="py-2"></div>}
    </div>
  );
};

export default CustomizedDropDown;
