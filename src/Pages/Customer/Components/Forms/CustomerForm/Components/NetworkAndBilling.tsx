import { ChangeEvent } from "react";
import { CustomizedDropDownDataTypes } from "../../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import { DefaultThemeTypes } from "../../../../../Theme/_types";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../../_types";
import CustomizedDropDown from "../../../../../../Components/DropDownBox/CustomizedDropDown";
import { DEFAULT_ON_OFF } from "../../../../../../Constants/General/general.constants";
import PrimaryInput from "../../../../../../Components/Inputs/PrimaryInput";
import { SERVICE_CODES } from "../../../../../../Constants/Customers/customer.type";
import ExtraInputWrapper from "./ExtraInputWrapper";
import { DEFAULT_MODES_FOR_IP } from "../../../../../../Constants/Network/network.constants";
import {
  PACKAGES,
  PlanType,
} from "../../../../../../Constants/Packages/constants";
import {
  DEFAULT_BILLING_METHODS,
  PAYMENTS,
} from "../../../../../../Constants/Customers/payment.constants";

type NetworkType = {
  dataCenter: DataCenterTypes;
  errorCenter: ErrorCenterTypes;
  refCenter: RefCenterTypes;
  theme: DefaultThemeTypes;
  plans: PlanType[];
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

const NetworkAndBilling = (props: NetworkType) => {
  const {
    dataCenter,
    errorCenter,
    refCenter,
    theme,
    plans,

    /*
      Actions
    */
    handleSelect,
    updateDataCenter,
    updateErrorCenter,
  } = props;

  const { primaryColor } = theme;
  const [primaryBg, primaryText] = primaryColor;
  return (
    <>
      <div className="pt-6 px-2 border-gray-400 rounded-lg border  relative">
        <div
          className={`absolute -top-[0.6rem] px-2 left-4 body-font ${primaryBg} ${primaryText}`}
        >
          Network
        </div>
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
              placeHolderText="Enter rad user name"
              label="Rad User Name"
              isRequired={true}
              errorMessage={errorCenter.radUserName}
              theme={theme}
              updateDataCenter={updateDataCenter}
              updateErrorCenter={updateErrorCenter}
            />
          )}

          {!dataCenter.autoGeneratePPOEAccountServer && (
            <PrimaryInput
              type="text"
              name="radPassword"
              value={dataCenter.radPassword}
              placeHolderText="Enter rad password"
              label="Rad Password"
              isRequired={true}
              errorMessage={errorCenter.radPassword}
              theme={theme}
              updateDataCenter={updateDataCenter}
              updateErrorCenter={updateErrorCenter}
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
            placeHolderText="Enter service id name"
            label="Service ID Name"
            isRequired={true}
            errorMessage={errorCenter.serviceIDName}
            theme={theme}
            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
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
              placeHolderText="Enter service static ip"
              label="Static IP"
              isRequired={true}
              errorMessage={errorCenter.staticIP}
              theme={theme}
              updateDataCenter={updateDataCenter}
              updateErrorCenter={updateErrorCenter}
            />
          )}
        </ExtraInputWrapper>

        <ExtraInputWrapper theme={theme}>
          <PrimaryInput
            type="text"
            name="serviceStatus"
            value={dataCenter.serviceStatus}
            placeHolderText="Enter service status"
            label="Service Status"
            isRequired={true}
            errorMessage={errorCenter.serviceStatus}
            theme={theme}
            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
          />
        </ExtraInputWrapper>
      </div>

      <div className="border border-gray-400  rounded-lg pt-6 px-2 mt-6 relative">
        <div
          className={`absolute -top-[0.6rem]  px-2 left-4 body-font ${primaryBg} ${primaryText}`}
        >
          Billing
        </div>
        <ExtraInputWrapper theme={theme}>
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

          <div></div>

          {/* <CustomizedDropDown
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
          /> */}
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
            dropDownData={plans}
            label={"Plans"}
            theme={theme}
            value={dataCenter.plan || "Select service type"}
            dataKey="label"
            dataCenterKey="plan"
            secondaryDataKey="id"
            secondaryDataCenterKey="planServer"
            handleSelect={handleSelect}
            hasSearch={true}
            isDisabled={plans.length <= 0}
          />

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
            placeHolderText="Enter the price"
            label="Price"
            isRequired={true}
            errorMessage={errorCenter.price}
            theme={theme}
            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
          />

          <PrimaryInput
            type="text"
            name="durationNumber"
            value={dataCenter.durationNumber}
            placeHolderText="Enter duration"
            label="Duration"
            isRequired={true}
            errorMessage={errorCenter.durationNumber}
            theme={theme}
            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
            badgeLabel="Months"
          />

          <div></div>

          <PrimaryInput
            type="datetime-local"
            name="serviceStartDate"
            value={dataCenter.serviceStartDate}
            placeHolderText="Enter service start date"
            label="Service Start Date"
            isRequired={true}
            errorMessage={errorCenter.serviceStartDate}
            inputRef={refCenter.serviceStartDate}
            theme={theme}
            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
          />

          <PrimaryInput
            type="datetime-local"
            name="serviceEndDate"
            value={dataCenter.serviceEndDate}
            placeHolderText="Enter service end date"
            label="Service End Date"
            isRequired={true}
            errorMessage={errorCenter.serviceEndDate}
            inputRef={refCenter.serviceEndDate}
            theme={theme}
            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
            isDisabled={true}
          />
        </ExtraInputWrapper>
      </div>
    </>
  );
};

export default NetworkAndBilling;
