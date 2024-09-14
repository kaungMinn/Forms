import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { DefaultThemeTypes } from "../../../../Pages/Theme/_types";
import DropDownHeader from "../DropDownHeader";
import DropDownWrapper from "../DropDownWrapper";
import {
  dropDownHeightFinder,
  hasBelowSpace,
} from "../../Utils/position.utils";

type DropDownContainerTypes = {
  label: string;
  isDisabled: boolean;
  isRequired: boolean;
  errorMessage: string;
  theme: DefaultThemeTypes;
  mainText: string;
  dataShower: ReactNode;
  hasDropDown: boolean;
  handleHasDropDown: (value: boolean) => void;
  /*
    Actions
  */
  onClick: () => void;
};

const DropDownContainer = (props: DropDownContainerTypes) => {
  const {
    label = "",
    isDisabled = false,
    isRequired = false,
    errorMessage = "",
    theme,
    mainText = "",
    dataShower,
    hasDropDown,
    /*
        Actions
    */
    handleHasDropDown,
    onClick,
  } = props;

  const [isNoSpace, setIsNoSpace] = useState(false);
  const [height, setHeight] = useState<string>("4.2rem");

  const ref = useRef<HTMLDivElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const checkClickedOutside = useCallback(
    (e: MouseEvent) => {
      if (
        hasDropDown &&
        ref.current &&
        !ref.current?.contains(e.target as Node)
      ) {
        handleHasDropDown(false);
      }
    },
    [hasDropDown, handleHasDropDown]
  );

  //LIFE CIRCLES
  useEffect(() => {
    document.addEventListener("mousedown", checkClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkClickedOutside);
    };
  }, [hasDropDown, checkClickedOutside]);

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
        mainText={mainText}
        hasDropDown={hasDropDown}
        /*
            Actions
        */
        onClick={onClick}
      />

      <DropDownWrapper
        hasDropDown={hasDropDown}
        dropDownRef={dropDownRef}
        isNoSpace={isNoSpace}
        dropDownHeight={height}
      >
        {dataShower}
      </DropDownWrapper>
    </div>
  );
};

export default DropDownContainer;
