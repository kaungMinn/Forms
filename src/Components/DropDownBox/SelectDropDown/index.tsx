import { ChangeEvent, useState } from "react";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import DropDownContainer from "../Components/DropDownContainer";
import BottomMenu from "./BottomMenu";
import { valueFinder } from "../Utils/data.utils";

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
  avaliableSelections: AvaliableSelectionType[];
  dataKey: string;
  dataCenterKey: string;
  dataCenter: Record<string, string | boolean | number>;
  /*
    Actions
  */
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
};

const SelectDropDown = (props: SelectDropDownTypes) => {
  const {
    label = "",
    isRequired = false,
    errorMessage = "",
    isDisabled = false,
    theme,
    avaliableSelections,
    dataKey,
    dataCenterKey,
    dataCenter,
    /*
      Actions
    */
    handleCheck,
    handleOnChange,
  } = props;
  const [hasDropDown, setHasDropDown] = useState(false);

  const handleHasDropDown = (value: boolean) => {
    setHasDropDown(value);
  };

  const value = valueFinder(dataCenter, dataCenterKey);

  return (
    <>
      <DropDownContainer
        label={label}
        isDisabled={isDisabled}
        isRequired={isRequired}
        errorMessage={errorMessage}
        theme={theme}
        mainText={value || "Select something"}
        hasDropDown={hasDropDown}
        dataShower={
          <BottomMenu
            value={value}
            avaliableSelection={avaliableSelections}
            theme={theme}
            dataKey={dataKey}
            dataCenterKey={dataCenterKey}
            dataCenter={dataCenter}
            /*
              Actions
            */
            handleCheck={handleCheck}
            handleOnChange={handleOnChange}
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
    </>
  );
};

export default SelectDropDown;
