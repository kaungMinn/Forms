import { DefaultThemeTypes } from "../../../../../../Theme/_types";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../../../_types";
import ExtraInputWrapper from "../ExtraInputWrapper";
import { CUSTOMER_TYPES } from "../../../../../../../Constants/Customers/customer.type";
import CustomizedDropDown from "../../../../../../../Components/DropDownBox/CustomizedDropDown";
import PrimaryInput from "../../../../../../../Components/Inputs/PrimaryInput";
type CustomerTypeInputType = {
  theme: DefaultThemeTypes;
  dataCenter: DataCenterTypes;
  errorCenter: ErrorCenterTypes;
  refCenter: RefCenterTypes;
  /*
    Actions
  */
  handleSelect: (
    data: Record<string, unknown>,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  updateDataCenter: (
    key: string,
    value: DataCenterTypes[keyof DataCenterTypes]
  ) => void;
  updateErrorCenter: (
    key: string,
    value: ErrorCenterTypes[keyof ErrorCenterTypes]
  ) => void;
};

const CustomerTypeInput = (props: CustomerTypeInputType) => {
  const {
    theme,
    dataCenter,
    errorCenter,
    refCenter,
    /*
      Actions
    */
    handleSelect,
    updateDataCenter,
    updateErrorCenter,
  } = props;
  return (
    <ExtraInputWrapper
      theme={theme}
      colorCondition={dataCenter.customerTypeServer === "company"}
    >
      <CustomizedDropDown
        label="Customer Type"
        dropDownData={CUSTOMER_TYPES}
        value={dataCenter.customerType || "Select a brand name"}
        errorMessage={errorCenter.customerType}
        dataKey="label"
        dataCenterKey="customerType"
        secondaryDataKey="value"
        secondaryDataCenterKey="customerTypeServer"
        theme={theme}
        /*
      Actions
    */
        handleSelect={handleSelect}
      />
      {dataCenter.customerTypeServer === "company" && (
        <PrimaryInput
          label="Company Name"
          value={dataCenter.companyName}
          errorMessage={errorCenter.companyName}
          inputRef={refCenter.companyName}
          placeHolderText="Enter company name"
          name="companyName"
          type="text"
          theme={theme}
          isRequired={true}
          /*
        Actions
      */
          updateDataCenter={updateDataCenter}
          updateErrorCenter={updateErrorCenter}
        />
      )}
    </ExtraInputWrapper>
  );
};

export default CustomerTypeInput;
