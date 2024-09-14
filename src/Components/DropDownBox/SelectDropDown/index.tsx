import { useState } from "react";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import DropDownContainer from "../Components/DropDownContainer";
import BottomMenu from "./BottomMenu";

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
  errorMessage?: string;
  isDisabled?: boolean;
  value?: string;
  avaliableSelections: AvaliableSelectionType[];
  dataKey: string;
  dataCenterKey: string;
  /*
    Actions
  */
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void;
};

const SelectDropDown = (props: SelectDropDownTypes) => {
  const {
    label = "",
    isRequired = false,
    errorMessage = "",
    isDisabled = false,
    theme,
    value = "Select something",
    avaliableSelections,
    dataKey,
    dataCenterKey,
    /*
      Actions
    */
    handleCheck,
  } = props;
  const [hasDropDown, setHasDropDown] = useState(false);

  const handleHasDropDown = (value: boolean) => {
    setHasDropDown(value);
  };

  return (
    <>
      <DropDownContainer
        label={label}
        isDisabled={isDisabled}
        isRequired={isRequired}
        errorMessage={errorMessage}
        theme={theme}
        mainText={value}
        hasDropDown={hasDropDown}
        dataShower={
          <BottomMenu
            value={value}
            avaliableSelection={avaliableSelections}
            theme={theme}
            dataKey={dataKey}
            dataCenterKey={dataCenterKey}
            /*
              Actions
            */
            handleCheck={handleCheck}
          />
        }
        /*
          Actions
        */
        handleHasDropDown={handleHasDropDown}
        onClick={() => handleHasDropDown(!hasDropDown)}
      ></DropDownContainer>

      {errorMessage ? (
        <div className="text-xs ps-1 text-red-500">{errorMessage}</div>
      ) : (
        <div className="py-2"></div>
      )}
    </>
  );
};

export default SelectDropDown;
