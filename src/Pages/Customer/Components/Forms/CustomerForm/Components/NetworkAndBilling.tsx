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
import { DEFAULT_MODES_FOR_IP } from "../../../../../../Constants/Network/network.constants";
import { PACKAGES } from "../../../../../../Constants/Packages/constants";
import {
  DEFAULT_BILLING_METHODS,
  PAYMENTS,
} from "../../../../../../Constants/Customers/payment.constants";

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
  const {
    dataCenter,
    errorCenter,
    refCenter,
    theme,
    handleSelect,
    handleOnChange,
  } = props;

  return (
    <>
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

      {!dataCenter.autoGeneratePPOEAccountServer && (
        <div className="laptop:col-span-2 py-2"></div>
      )}

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

      <ExtraInputWrapper
        theme={theme}
        colorCondition={
          dataCenter.containIPServer || dataCenter.modeServer === "staticip"
            ? true
            : false
        }
      >
        <CustomizedDropDown
          dropDownData={DEFAULT_ON_OFF}
          label={"Contain IP"}
          theme={theme}
          value={dataCenter.containIP || "Select contain ip"}
          dataKey="label"
          dataCenterKey="containIP"
          secondaryDataKey="value"
          secondaryDataCenterKey="containIPServer"
          handleSelect={handleSelect}
        />

        {dataCenter.containIPServer && (
          <CustomizedDropDown
            dropDownData={DEFAULT_MODES_FOR_IP}
            label={"Mode"}
            theme={theme}
            value={dataCenter.mode || "Select contain ip"}
            dataKey="label"
            dataCenterKey="mode"
            secondaryDataKey="value"
            secondaryDataCenterKey="modeServer"
            handleSelect={handleSelect}
          />
        )}

        {dataCenter.modeServer === "staticip" && (
          <PrimaryInput
            type="text"
            name="staticIP"
            value={dataCenter.staticIP}
            handleChangeOnInput={handleOnChange}
            placeHolderText="Enter service static ip"
            labelText="Static IP"
            isRequired={true}
            errorMessage={errorCenter.staticIP}
            theme={theme}
          />
        )}
      </ExtraInputWrapper>

      <ExtraInputWrapper theme={theme}>
        <CustomizedDropDown
          dropDownData={PACKAGES}
          label={"packages"}
          theme={theme}
          value={dataCenter.serviceType || "Select service type"}
          dataKey="label"
          dataCenterKey="serviceType"
          secondaryDataKey="value"
          secondaryDataCenterKey="serviceTypeServer"
          handleSelect={handleSelect}
          hasSearch={true}
        />
        <CustomizedDropDown
          dropDownData={PACKAGES}
          label={"Plans"}
          theme={theme}
          value={dataCenter.plan || "Select service type"}
          dataKey="label"
          dataCenterKey="plan"
          secondaryDataKey="id"
          secondaryDataCenterKey="planServer"
          handleSelect={handleSelect}
          hasSearch={true}
        />
      </ExtraInputWrapper>

      <ExtraInputWrapper theme={theme}>
        <CustomizedDropDown
          dropDownData={PAYMENTS}
          label={"Payment Currency"}
          theme={theme}
          value={dataCenter.paymentCurrency || "Select service type"}
          dataKey="label"
          dataCenterKey="paymentCurrency"
          handleSelect={handleSelect}
        />
        <PrimaryInput
          type="text"
          name="price"
          value={dataCenter.price}
          handleChangeOnInput={handleOnChange}
          placeHolderText="Enter the price"
          labelText="Price"
          isRequired={true}
          errorMessage={errorCenter.price}
          theme={theme}
        />

        <CustomizedDropDown
          dropDownData={DEFAULT_BILLING_METHODS}
          label={"Billing Method"}
          theme={theme}
          value={dataCenter.billingMethod || "Select a method"}
          dataKey="label"
          dataCenterKey="billingMethod"
          secondaryDataKey="value"
          secondaryDataCenterKey="billingMethodServer"
          errorMessage={errorCenter.billingMethod}
          handleSelect={handleSelect}
        />

        <CustomizedDropDown
          dropDownData={DEFAULT_ON_OFF}
          label={"Enable"}
          theme={theme}
          value={dataCenter.enable || "Select a value"}
          dataKey="label"
          dataCenterKey="enable"
          secondaryDataKey="value"
          secondaryDataCenterKey="enableServer"
          errorMessage={errorCenter.enable}
          handleSelect={handleSelect}
        />

        <PrimaryInput
          type="text"
          name="serviceStatus"
          value={dataCenter.serviceStatus}
          handleChangeOnInput={handleOnChange}
          placeHolderText="Enter service status"
          labelText="Service Status"
          isRequired={true}
          errorMessage={errorCenter.serviceStatus}
          theme={theme}
        />

        <PrimaryInput
          type="datetime-local"
          name="serviceStartDate"
          value={dataCenter.serviceStartDate}
          handleChangeOnInput={handleOnChange}
          placeHolderText="Enter service start date"
          labelText="Service Start Date"
          isRequired={true}
          errorMessage={errorCenter.serviceStartDate}
          inputRef={refCenter.serviceStartDate}
          theme={theme}
        />

        <PrimaryInput
          type="datetime-local"
          name="serviceEndDate"
          value={dataCenter.serviceEndDate}
          handleChangeOnInput={handleOnChange}
          placeHolderText="Enter service end date"
          labelText="Service End Date"
          isRequired={true}
          errorMessage={errorCenter.serviceEndDate}
          inputRef={refCenter.serviceEndDate}
          theme={theme}
        />

        <PrimaryInput
          type="text"
          name="durationNumber"
          value={dataCenter.durationNumber}
          handleChangeOnInput={handleOnChange}
          placeHolderText="Enter duration"
          labelText="Duration"
          isRequired={true}
          errorMessage={errorCenter.durationNumber}
          theme={theme}
        />
      </ExtraInputWrapper>
    </>
  );
};

export default NetworkAndBilling;
