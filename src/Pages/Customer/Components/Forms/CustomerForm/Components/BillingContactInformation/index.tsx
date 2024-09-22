import { ChangeEvent, useEffect } from "react";
import { CustomizedDropDownDataTypes } from "../../../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import { DefaultThemeTypes } from "../../../../../../Theme/_types";
import {
  DataCenterTypes,
  DefaultServerErrorType,
  ErrorCenterTypes,
  RefCenterTypes,
  SelectInputTypes,
} from "../../../../../_types";
import ExtraInputWrapper from "../ExtraInputWrapper";
import SelectDropDown, {
  AvaliableSelectionType,
} from "../../../../../../../Components/DropDownBox/SelectDropDown";
import { AVA_PAYMENTS } from "../../../../../../../Constants/Customers/payment.constants";
import CustomizedDropDown from "../../../../../../../Components/DropDownBox/CustomizedDropDown";
import {
  CITIES,
  TownshipType,
} from "../../../../../../../Constants/Location/myanmar.constants";
import PrimaryInput from "../../../../../../../Components/Inputs/PrimaryInput";
import { stateCleaner } from "../../../../../../../Utils/Data/States/cleaner.utils";

type BillingType = {
  dataCenter: DataCenterTypes;
  errorCenter: ErrorCenterTypes;
  refCenter: RefCenterTypes;
  theme: DefaultThemeTypes;
  townships: TownshipType[];
  selectInputCenter: SelectInputTypes;
  serverErrors?: DefaultServerErrorType;
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
  updateDataCenter: (key: string, value: string) => void;
  updateErrorCenter: (key: string, value: string) => void;
};

const BillingContactInformation = (props: BillingType) => {
  const {
    theme,
    dataCenter,
    errorCenter,
    refCenter,
    townships,
    updateDataCenter,
    updateErrorCenter,
    selectInputCenter,
    serverErrors,
    /*
      Actions
    */
    handleOnChange,
    handleSelect,
    handleCheck,
  } = props;

  useEffect(() => {
    if (serverErrors && serverErrors.duplicate) return;
    const keys = ["paymentTypes"];

    stateCleaner(keys, updateErrorCenter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ExtraInputWrapper theme={theme}>
        <SelectDropDown
          label="Currency"
          theme={theme}
          avaliableSelections={AVA_PAYMENTS}
          dataKey={"label"}
          dataCenterKey="paymentTypes"
          dataCenter={dataCenter}
          errorCenter={errorCenter}
          refCenter={refCenter}
          selectedInputCenter={selectInputCenter.paymentTypes}
          isRequired={true}
          /*
            Actions
          */
          handleCheck={handleCheck}
          handleOnChange={handleOnChange}
          updateErrorCenter={updateErrorCenter}
        />

        <div></div>

        <CustomizedDropDown
          dropDownData={CITIES}
          label="Cities"
          theme={theme}
          value={dataCenter.city || "Select a city"}
          dataKey="label"
          dataCenterKey="city"
          handleSelect={handleSelect}
          hasSearch={true}
          isRequired={true}
          errorMessage={errorCenter.city}
        />

        <CustomizedDropDown
          dropDownData={townships}
          label="Townships"
          theme={theme}
          value={dataCenter.township || "Select a township"}
          dataKey="label"
          dataCenterKey="township"
          handleSelect={handleSelect}
          hasSearch={true}
          isDisabled={townships.length <= 0}
          isRequired={true}
          errorMessage={errorCenter.township}
        />

        <PrimaryInput
          label="Address"
          type="text"
          name="address"
          value={dataCenter.address}
          placeHolderText="Enter address"
          theme={theme}
          updateDataCenter={updateDataCenter}
          updateErrorCenter={updateErrorCenter}
        />

        <PrimaryInput
          label="Coordinates"
          type="text"
          name="coordinates"
          value={dataCenter.coordinates}
          errorMessage={errorCenter.coordinates}
          placeHolderText="Enter coordinates"
          theme={theme}
          updateDataCenter={updateDataCenter}
          updateErrorCenter={updateErrorCenter}
        />

        <PrimaryInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          value={dataCenter.phoneNumber}
          errorMessage={errorCenter.phoneNumber}
          placeHolderText="Phone Number"
          theme={theme}
          updateDataCenter={updateDataCenter}
          updateErrorCenter={updateErrorCenter}
        />

        <PrimaryInput
          label="Viber Number"
          type="text"
          name="viberNumber"
          value={dataCenter.viberNumber}
          errorMessage={errorCenter.viberNumber}
          placeHolderText="Enter viber number"
          theme={theme}
          updateDataCenter={updateDataCenter}
          updateErrorCenter={updateErrorCenter}
        />

        <PrimaryInput
          label="Email"
          type="text"
          name="email"
          value={dataCenter.email}
          errorMessage={errorCenter.email}
          placeHolderText="Enter email"
          theme={theme}
          updateDataCenter={updateDataCenter}
          updateErrorCenter={updateErrorCenter}
        />

        <div></div>

        <PrimaryInput
          label="Remark"
          type="text"
          name="remark"
          value={dataCenter.remark}
          placeHolderText="Enter remark"
          theme={theme}
          updateDataCenter={updateDataCenter}
          updateErrorCenter={updateErrorCenter}
        />
      </ExtraInputWrapper>
    </div>
  );
};

export default BillingContactInformation;
