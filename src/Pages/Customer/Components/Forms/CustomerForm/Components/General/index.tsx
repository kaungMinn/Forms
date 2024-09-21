import { ChangeEvent } from "react";
import CustomizedDropDown from "../../../../../../../Components/DropDownBox/CustomizedDropDown";
import { DefaultThemeTypes } from "../../../../../../Theme/_types";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../../../_types";
import { PACKAGES } from "../../../../../../../Constants/Packages/constants";
import PrimaryInput from "../../../../../../../Components/Inputs/PrimaryInput";
import ExtraInputWrapper from "../ExtraInputWrapper";
import CustomerTypeInput from "./CustomerTypeInput";

type GeneralType = {
  dataCenter: DataCenterTypes;
  errorCenter: ErrorCenterTypes;
  refCenter: RefCenterTypes;
  theme: DefaultThemeTypes;
  /*
    Actions
  */
  handleSelect: (
    data: Record<string, unknown>,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  updateDataCenter: (
    key: string,
    value: DataCenterTypes[keyof DataCenterTypes]
  ) => void;
  updateErrorCenter: (
    key: string,
    value: ErrorCenterTypes[keyof ErrorCenterTypes]
  ) => void;
};

const General = (props: GeneralType) => {
  const {
    dataCenter,
    errorCenter,
    refCenter,
    theme,
    /*
      Actions
    */
    handleSelect,
    updateDataCenter,
    updateErrorCenter,
  } = props;

  return (
    <div className="space-y-3">
      <CustomerTypeInput
        dataCenter={dataCenter}
        errorCenter={errorCenter}
        refCenter={refCenter}
        theme={theme}
        /*
          Actions
        */
        handleSelect={handleSelect}
        updateDataCenter={updateDataCenter}
        updateErrorCenter={updateErrorCenter}
      />

      <ExtraInputWrapper theme={theme}>
        <CustomizedDropDown
          label="Brand Name"
          dropDownData={PACKAGES}
          value={dataCenter.brandName || "Select a brand name"}
          errorMessage={errorCenter.brandName}
          dataKey="label"
          dataCenterKey="brandName"
          theme={theme}
          hasSearch={true}
          isRequired={true}
          /*
            Actions
          */
          handleSelect={handleSelect}
        />

        <PrimaryInput
          label="Customer Name"
          value={dataCenter.customerName}
          errorMessage={errorCenter.customerName}
          inputRef={refCenter.customerName}
          placeHolderText="Enter customer name"
          name="customerName"
          type="text"
          theme={theme}
          isRequired={true}
          /*
            Actions
          */
          updateDataCenter={updateDataCenter}
          updateErrorCenter={updateErrorCenter}
        />
      </ExtraInputWrapper>
    </div>
  );
};

export default General;
