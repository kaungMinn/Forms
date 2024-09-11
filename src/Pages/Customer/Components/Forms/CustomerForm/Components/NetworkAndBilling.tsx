import { ChangeEvent } from "react";
import { CustomizedDropDownDataTypes } from "../../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import { DefaultThemeTypes } from "../../../../../Theme/_types";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../../Create/_types";
import CustomizedDropDown from "../../../../../../Components/DropDownBox/CustomizedDropDown";
import { DEFAULT_ON_OFF } from "../../../../../../Constants/General/general.constants";
import PrimaryInput from "../../../../../../Components/Inputs/PrimaryInput";
import { SERVICE_CODES } from "../../../../../../Constants/Customers/customer.type";
import ExtraInputWrapper from "./ExtraInputWrapper";

type NetworkType = {
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

const NetworkAndBilling = (props: NetworkType) => {
  const { dataCenter, errorCenter, theme, handleSelect, handleOnChange } =
    props;

  const { secondaryColor } = theme;
  return (
    <div className="">
      <ExtraInputWrapper
        colorCondition={
          !dataCenter.autoGeneratePPOEAccountServer ? true : false
        }
        theme={theme}
      >
        <CustomizedDropDown
          dropDownData={DEFAULT_ON_OFF}
          label={"Auto Generate PPPOE Account"}
          theme={theme}
          value={dataCenter.autoGeneratePPOEAccount}
          dataKey="label"
          dataCenterKey="autoGeneratePPOEAccount"
          secondaryDataKey="value"
          secondaryDataCenterKey="autoGeneratePPOEAccountServer"
          handleSelect={handleSelect}
        />

        {!dataCenter.autoGeneratePPOEAccountServer && (
          <PrimaryInput
            type="text"
            name="radUserName"
            value={dataCenter.radUserName}
            handleChangeOnInput={handleOnChange}
            placeHolderText="Enter rad user name"
            labelText="Rad User Name"
            isRequired={true}
            errorMessage={errorCenter.radUserName}
            theme={theme}
          />
        )}

        {!dataCenter.autoGeneratePPOEAccountServer && (
          <PrimaryInput
            type="text"
            name="radPassword"
            value={dataCenter.radPassword}
            handleChangeOnInput={handleOnChange}
            placeHolderText="Enter rad password"
            labelText="Rad Password"
            isRequired={true}
            errorMessage={errorCenter.radPassword}
            theme={theme}
          />
        )}
      </ExtraInputWrapper>

      {/* {!dataCenter.autoGeneratePPOEAccountServer && (
        <div className="laptop:col-span-2 py-2"></div>
      )} */}

      <ExtraInputWrapper theme={theme}>
        <CustomizedDropDown
          dropDownData={SERVICE_CODES}
          label={"Service ID"}
          theme={theme}
          value={dataCenter.serviceID || "Select a service ID"}
          dataKey="label"
          dataCenterKey="serviceID"
          secondaryDataKey="value"
          handleSelect={handleSelect}
        />
        <PrimaryInput
          type="text"
          name="serviceIDName"
          value={dataCenter.serviceIDName}
          handleChangeOnInput={handleOnChange}
          placeHolderText="Enter service id name"
          labelText="Service ID Name"
          isRequired={true}
          errorMessage={errorCenter.serviceIDName}
          theme={theme}
        />
      </ExtraInputWrapper>

      <ExtraInputWrapper theme={theme}>
        <CustomizedDropDown
          dropDownData={DEFAULT_ON_OFF}
          label={"Contain IP"}
          theme={theme}
          value={dataCenter.containIP || "Select contain ip"}
          dataKey="label"
          dataCenterKey="containIP"
          secondaryDataKey="value"
          handleSelect={handleSelect}
        />
      </ExtraInputWrapper>
    </div>
  );
};

export default NetworkAndBilling;
