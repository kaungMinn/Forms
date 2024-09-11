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

  useEffect(() => {
    const checkClickedOutside = (e: MouseEvent) => {
      if (
        hasDropDown &&
        ref.current &&
        !ref.current?.contains(e.target as Node)
      ) {
        setHasDropDown(false);
      }
    };
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

  const dataListRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState("-top[4.2rem]");
  useEffect(() => {
    if (!dataListRef.current) return;
    setHeight(`${dataListRef.current?.offsetHeight + 45}px`);
  }, [hasDropDown, dataListRef]);

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
        className={` absolute w-full z-50  ${
          hasDropDown ? "scale-1" : "scale-0"
        } duration-150`}
        ref={dropDownRef}
        style={
          hasDropDown
            ? isNoSpace
              ? {
                  transform: `translateY(-${height})`,
                }
              : {
                  transform: `translateY(0.5rem)`,
                }
            : {}
        }
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
          dataShowerRef={dataListRef}
        />
      </div>

      {errorMessage ? <div>{errorMessage}</div> : <div className="py-2"></div>}
    </div>
  );
};

export default CustomizedDropDown;
