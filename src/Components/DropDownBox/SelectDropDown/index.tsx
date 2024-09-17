import {
  ChangeEvent,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from "react";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import DropDownContainer from "../Components/DropDownContainer";
import BottomMenu from "./BottomMenu";
import { valueFinder } from "../Utils/data.utils";
import { CustomizedDropDownDataTypes } from "../CustomizedDropDown/_types";

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
  isDisabled?: boolean;
  avaliableSelections: AvaliableSelectionType[];
  dataKey: string;
  dataCenterKey: string;
  dataCenter: Record<string, string | boolean | number>;
  errorCenter?: Record<string, string | boolean | number>;
  refCenter?: Record<string, RefObject<HTMLInputElement>>;
  selectedInputCenter: CustomizedDropDownDataTypes[];
  /*
    Actions
  */
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  updateErrorCenter: (key: string, value: string) => void;
};

const SelectDropDown = (props: SelectDropDownTypes) => {
  const {
    label = "",
    isRequired = false,
    isDisabled = false,
    theme,
    avaliableSelections,
    dataKey,
    dataCenterKey,
    dataCenter,
    errorCenter = {},
    refCenter = {},
    selectedInputCenter,
    /*
      Actions
    */
    handleCheck,
    handleOnChange,
    updateErrorCenter,
  } = props;
  const [hasDropDown, setHasDropDown] = useState(false);

  const handleHasDropDown = (value: boolean) => {
    setHasDropDown(value);
  };

  const value = valueFinder(dataCenter, dataCenterKey);
  const error = errorCenter[dataCenterKey];
  let primaryError = "";
  if (typeof error === "string") primaryError = error;

  //LIFE CIRCLES

  const handleDropDownDataAndError = useCallback(
    (valueKeys: string[]) => {
      let hasDropDown = false;
      for (let i = 0; i < valueKeys.length; i++) {
        if (dataCenter[valueKeys[i]]) {
          hasDropDown = true;
        }

        if (errorCenter[valueKeys[i]]) {
          hasDropDown = true;
        }
      }

      return hasDropDown;
    },
    [dataCenter, errorCenter]
  );

  useEffect(() => {
    if (selectedInputCenter.length <= 0) return;
    const valueKeys = selectedInputCenter
      .map((input) => input.value)
      .filter((input) => typeof input === "string");

    const hasDropDown = handleDropDownDataAndError(valueKeys);
    if (hasDropDown) {
      handleHasDropDown(true);
    }
  }, [selectedInputCenter, handleDropDownDataAndError]);

  return (
    <div>
      <DropDownContainer
        label={label}
        isDisabled={isDisabled}
        isRequired={isRequired}
        theme={theme}
        mainText={value || "Select something"}
        hasDropDown={hasDropDown}
        errorMessage={primaryError}
        dataShower={
          <BottomMenu
            value={value}
            avaliableSelection={avaliableSelections}
            theme={theme}
            dataKey={dataKey}
            dataCenterKey={dataCenterKey}
            dataCenter={dataCenter}
            errorCenter={errorCenter}
            refCenter={refCenter}
            selectInputCenter={selectedInputCenter}
            /*
              Actions
            */
            handleCheck={handleCheck}
            handleOnChange={handleOnChange}
            updateErrorCenter={updateErrorCenter}
            handleHasDropDown={handleHasDropDown}
          />
        }
        /*
          Actions
        */
        handleHasDropDown={handleHasDropDown}
        onClick={() => handleHasDropDown(!hasDropDown)}
      />

      {primaryError ? (
        <div className="text-xs ps-1 text-red-500">{primaryError}</div>
      ) : (
        <div className="py-2"></div>
      )}
    </div>
  );
};

export default SelectDropDown;
