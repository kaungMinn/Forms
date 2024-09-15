import { ChangeEvent } from "react";
import CustomizedDropDown from "../../../../../../Components/DropDownBox/CustomizedDropDown";
import { CustomizedDropDownDataTypes } from "../../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import { DefaultThemeTypes } from "../../../../../Theme/_types";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../../Create/_types";
import { PACKAGES } from "../../../../../../Constants/Packages/constants";
import PrimaryInput from "../../../../../../Components/Inputs/PrimaryInput";
import { CUSTOMER_TYPES } from "../../../../../../Constants/Customers/customer.type";

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
    theme,
    handleSelect,
    updateDataCenter,
    updateErrorCenter,
  } = props;

  return (
    <div className="grid grid-cols-1 laptop:grid-cols-2 gap-x-5 ">
      <CustomizedDropDown
        label="Brand Name"
        theme={theme}
        value={dataCenter.brandName || "Select a brand name"}
        dropDownData={PACKAGES}
        dataKey="label"
        dataCenterKey="brandName"
        handleSelect={handleSelect}
        hasSearch={true}
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
      />

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
      />

      {dataCenter.customerTypeServer === "company" && (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default General;
