import { useRef, useState } from "react";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import DropDownHeader from "../Components/DropDownHeader";
import BottomMenu from "./BottomMenu";
import DropDownWrapper from "../Components/DropDownWrapper";
type SelectDropDownTypes = {
  label?: string;
  isRequired?: boolean;
  theme: DefaultThemeTypes;
  errorMessage?: string;
  isDisabled?: boolean;

  /*
    Actions
  */
};

const SelectDropDown = (props: SelectDropDownTypes) => {
  const {
    label = "",
    isRequired = false,
    errorMessage = "",
    isDisabled = false,
    theme,
  } = props;
  const [mainText, setMainText] = useState("Select values");
  const [isNoSpace, setIsNoSpace] = useState(false);
  const [hasDropDown, setHasDropDown] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const handleHasDropDown = () => {
    setHasDropDown(!hasDropDown);
  };

  return (
    <>
      <div className="relative">
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
          onClick={handleHasDropDown}
        />

        {/* <DropDownWrapper
          hasDropDown={hasDropDown}
          dropDownRef={dropDownRef}
          isNoSpace={isNoSpace}
        >
          <BottomMenu />
        </DropDownWrapper> */}
      </div>
    </>
  );
};

export default SelectDropDown;
