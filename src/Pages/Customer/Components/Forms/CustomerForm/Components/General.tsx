import { ChangeEvent } from "react";
import CustomizedDropDown from "../../../../../../Components/DropDownBox/CustomizedDropDown";
import { CustomizedDropDownDataTypes } from "../../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import { DefaultThemeTypes } from "../../../../../Theme/_types";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../../_types";
import { PACKAGES } from "../../../../../../Constants/Packages/constants";
import PrimaryInput from "../../../../../../Components/Inputs/PrimaryInput";
import { CUSTOMER_TYPES } from "../../../../../../Constants/Customers/customer.type";
import ExtraInputWrapper from "./ExtraInputWrapper";

type GeneralType = {
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
  updateDataCenter: (key: string, value: string) => void;
  updateErrorCenter: (key: string, value: string) => void;
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
    <>
      <ExtraInputWrapper
        theme={theme}
        colorCondition={dataCenter.customerTypeServer === "company"}
      >
        <CustomizedDropDown
          label="Customer Type"
          theme={theme}
          value={dataCenter.customerType || "Select a brand name"}
          dropDownData={CUSTOMER_TYPES}
          dataKey="label"
          dataCenterKey="customerType"
          secondaryDataKey="value"
          secondaryDataCenterKey="customerTypeServer"
          handleSelect={handleSelect}
          errorMessage={errorCenter.customerType}
        />
        {dataCenter.customerTypeServer === "company" && (
          <PrimaryInput
            value={dataCenter.companyName}
            label="Company Name"
            placeHolderText="Enter company name"
            name="companyName"
            type="text"
            theme={theme}
            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
          />
        )}
      </ExtraInputWrapper>

      {dataCenter.customerTypeServer === "company" && (
        <div className="laptop:col-span-2 py-2"></div>
      )}
      <ExtraInputWrapper theme={theme}>
        <CustomizedDropDown
          label="Brand Name"
          theme={theme}
          value={dataCenter.brandName || "Select a brand name"}
          dropDownData={PACKAGES}
          dataKey="label"
          dataCenterKey="brandName"
          handleSelect={handleSelect}
          hasSearch={true}
          errorMessage={errorCenter.brandName}
        />

        <PrimaryInput
          label="Customer Name"
          type="text"
          name="customerName"
          value={dataCenter.customerName}
          placeHolderText="Enter customer name"
          theme={theme}
          updateDataCenter={updateDataCenter}
          updateErrorCenter={updateErrorCenter}
          errorMessage={errorCenter.customerName}
          inputRef={refCenter.customerName}
        />
      </ExtraInputWrapper>
    </>
  );
};

export default General;
