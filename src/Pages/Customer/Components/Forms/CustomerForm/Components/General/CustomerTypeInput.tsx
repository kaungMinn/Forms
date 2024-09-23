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
    Structures
  */
  childCleaningStructure: { [key: string]: string[] };
  childPassingStructure: {
    [key: string]: (data: Record<string, unknown>) => void;
  };
  /*
    Actions
  */

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
      Structures
    */
    childCleaningStructure,
    childPassingStructure,
    /*
      Actions
    */

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
            Structures
          */
        childCleaningStructure={childCleaningStructure}
        childPassingStructure={childPassingStructure}
        /*
      Actions
    */

        updateDataCenter={updateDataCenter}
        updateErrorCenter={updateErrorCenter}
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
