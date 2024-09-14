import { ChangeEvent } from "react";
import { CustomizedDropDownDataTypes } from "../../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import { DefaultThemeTypes } from "../../../../../Theme/_types";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../../Create/_types";
import ExtraInputWrapper from "./ExtraInputWrapper";
import SelectDropDown, {
  AvaliableSelectionType,
} from "../../../../../../Components/DropDownBox/SelectDropDown";
import { AVA_PAYMENTS } from "../../../../../../Constants/Customers/payment.constants";

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
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void;
};

const BillingContactInformation = (props: BillingType) => {
  const {
    theme,
    dataCenter,
    errorCenter,
    refCenter,
    handleOnChange,
    handleSelect,
    handleCheck,
  } = props;

  return (
    <>
      <ExtraInputWrapper theme={theme}>
        <SelectDropDown
          label="Currency"
          theme={theme}
          avaliableSelections={AVA_PAYMENTS}
          dataKey="label"
          dataCenterKey="paymentTypes"
          value={dataCenter.paymentTypes}
          /*
            Actions
          */
          handleCheck={handleCheck}
        />
      </ExtraInputWrapper>
    </>
  );
};

export default BillingContactInformation;
