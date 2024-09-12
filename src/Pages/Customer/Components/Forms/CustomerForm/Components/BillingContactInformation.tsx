import { ChangeEvent, useRef } from "react";
import { CustomizedDropDownDataTypes } from "../../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import { DefaultThemeTypes } from "../../../../../Theme/_types";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../../Create/_types";
import ExtraInputWrapper from "./ExtraInputWrapper";
import SelectDropDown from "../../../../../../Components/DropDownBox/SelectDropDown";

type BillingType = {
  dataCenter: DataCenterTypes;
  errorCenter: ErrorCenterTypes;
  refCenter: RefCenterTypes;
  theme: DefaultThemeTypes;
  /*
    Actions
  */
  handleSelect: (
    data: CustomizedDropDownDataTypes,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
};

const BillingContactInformation = (props: BillingType) => {
  const {
    theme,
    dataCenter,
    errorCenter,
    refCenter,
    handleOnChange,
    handleSelect,
  } = props;
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!dateInputRef || !dateInputRef.current) return;
    dateInputRef.current.showPicker(); // Trigger the native picker
  };
  return (
    <>
      <ExtraInputWrapper theme={theme}>
        <SelectDropDown label="Currency" theme={theme} />
        <input type="datetime-local" />
      </ExtraInputWrapper>
    </>
  );
};

export default BillingContactInformation;
