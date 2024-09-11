import { useEffect, useRef, useState } from "react";
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
    hasMultiSelect = false,
    dataCenterKey,
    /*
      Actions
    */
    handleSelect,
  } = props;
  const [hasDropDown, setHasDropDown] = useState(false);
  const [isNoSpace, setIsNoSpace] = useState(false);
  const ref = useRef<any>(null);
  const dropDownRef = useRef<any>(null);

  const handleHasDropDown = () => {
    setHasDropDown(!hasDropDown);
  };

  const updatedHandleSelect = (
    data: CustomizedDropDownDataTypes,
    dataKey: string
  ) => {
    handleSelect(data, dataKey, dataCenterKey);
    if (hasMultiSelect) return;
    handleHasDropDown();
  };

  const checkClickedOutside = (e: any) => {
    if (hasDropDown && ref.current && !ref.current?.contains(e.target)) {
      setHasDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkClickedOutside);
    };
  }, [hasDropDown]);

  useEffect(() => {
    if (hasDropDown && ref.current && dropDownRef.current) {
      const rect = ref.current.getBoundingClientRect();
      const dropDownHeight = dropDownRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const spaceBelow = windowHeight - rect.bottom;
      const spaceAbove = rect.top;

      setIsNoSpace(dropDownHeight > spaceBelow && spaceAbove > spaceBelow);
    }
  }, [hasDropDown]);

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

      <div
        className={` absolute w-full z-10 ${
          isNoSpace ? "-top-[18rem]" : "top-[3.8rem] "
        } ${hasDropDown ? "scale-1" : "scale-0"} duration-150`}
        ref={dropDownRef}
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

      {errorMessage ? <div>{errorMessage}</div> : <div className="py-2"></div>}
    </div>
  );
};

export default CustomizedDropDown;
