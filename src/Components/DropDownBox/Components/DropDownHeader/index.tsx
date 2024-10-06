import DropDownLabel from "./DropDownLabel";
import DropDownTopBox from "./DropDownTopBox";

import { DropDownHeaderType } from "./_types";

const DropDownHeader = (props: DropDownHeaderType) => {
  const {
    label = "",
    isRequired = false,
    isDisabled = false,
    errorMessage = "",
    theme,
    mainText = "",
    hasDropDown = false,
    /* 
      Actions
    */
    onClick = () => {
      return undefined;
    },
  } = props;

  return (
    <>
      <div className="mb-2">
        <DropDownLabel label={label} isRequired={isRequired} theme={theme} />
      </div>
      <DropDownTopBox
        errorMessage={errorMessage}
        isDisabled={isDisabled}
        onClick={onClick}
        hasChev={true}
        hasDropDown={hasDropDown}
        mainText={mainText}
        theme={theme}
      />
    </>
  );
};

export default DropDownHeader;
