import { ChangeEvent, useEffect } from "react";
import { CustomizedDropDownDataTypes } from "../../../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import { DefaultThemeTypes } from "../../../../../../Theme/_types";
import {
  DataCenterTypes,
  DefaultServerErrorType,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../../../_types";
import CustomizedDropDown from "../../../../../../../Components/DropDownBox/CustomizedDropDown";
import { DEFAULT_ON_OFF } from "../../../../../../../Constants/General/general.constants";
import PrimaryInput from "../../../../../../../Components/Inputs/PrimaryInput";
import { SERVICE_CODES } from "../../../../../../../Constants/Customers/customer.type";
import ExtraInputWrapper from "../ExtraInputWrapper";
import { DEFAULT_MODES_FOR_IP } from "../../../../../../../Constants/Network/network.constants";
import {
  PACKAGES,
  PlanType,
} from "../../../../../../../Constants/Packages/constants";
import {
  DEFAULT_BILLING_METHODS,
  PAYMENTS,
} from "../../../../../../../Constants/Customers/payment.constants";
import { stateCleaner } from "../../../../../../../Utils/Data/States/cleaner.utils";

type NetworkType = {
  dataCenter: DataCenterTypes;
  errorCenter: ErrorCenterTypes;
  refCenter: RefCenterTypes;
  theme: DefaultThemeTypes;
  plans: PlanType[];
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
    serverErrors,
    /*
      Actions
    */
    handleSelect,
    updateDataCenter,
    updateErrorCenter,
  } = props;

  useEffect(() => {
    if (serverErrors && serverErrors.duplicate) return;
    const keys = ["serviceID"];

    stateCleaner(keys, updateErrorCenter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { primaryColor } = theme;
  const [primaryBg, primaryText] = primaryColor;
  return (
    <>
      <div className="pt-6 px-2 pb-2 border-gray-400 rounded-lg border  relative space-y-3">
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
            label={"Auto Generate PPPOE Account"}
            dropDownData={DEFAULT_ON_OFF}
            value={dataCenter.autoGeneratePPOEAccount}
            errorMessage={errorCenter.autoGeneratePPOEAccount}
            dataKey="label"
            dataCenterKey="autoGeneratePPOEAccount"
            secondaryDataKey="value"
            secondaryDataCenterKey="autoGeneratePPOEAccountServer"
            theme={theme}
            /*
             Actions
            */
            handleSelect={handleSelect}
          />

          {!dataCenter.autoGeneratePPOEAccountServer && (
            <PrimaryInput
              label="Rad User Name"
              value={dataCenter.radUserName}
              errorMessage={errorCenter.radUserName}
              inputRef={refCenter.radUserName}
              placeHolderText="Enter rad user name"
              name="radUserName"
              type="text"
              isRequired={true}
              theme={theme}
              /*
                Actions
              */
              updateDataCenter={updateDataCenter}
              updateErrorCenter={updateErrorCenter}
            />
          )}

          {!dataCenter.autoGeneratePPOEAccountServer && (
            <PrimaryInput
              label="Rad Password"
              value={dataCenter.radPassword}
              errorMessage={errorCenter.radPassword}
              inputRef={refCenter.radPassword}
              placeHolderText="Enter rad password"
              name="radPassword"
              type="text"
              isRequired={true}
              theme={theme}
              /*
                Actions
              */
              updateDataCenter={updateDataCenter}
              updateErrorCenter={updateErrorCenter}
            />
          )}
        </ExtraInputWrapper>

        <ExtraInputWrapper theme={theme}>
          <CustomizedDropDown
            label={"Service ID"}
            dropDownData={SERVICE_CODES}
            theme={theme}
            value={dataCenter.serviceID || "Select a service ID"}
            errorMessage={errorCenter.serviceID}
            dataKey="label"
            dataCenterKey="serviceID"
            isRequired={true}
            /*
              Actions
            */
            handleSelect={handleSelect}
          />
          <PrimaryInput
            type="text"
            name="serviceIDName"
            value={dataCenter.serviceIDName}
            placeHolderText="Enter service id name"
            label="Service ID Name"
            errorMessage={errorCenter.serviceIDName}
            inputRef={refCenter.serviceIDName}
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
            label={"Contain IP"}
            dropDownData={DEFAULT_ON_OFF}
            value={dataCenter.containIP || "Select contain ip"}
            errorMessage={errorCenter.containIP}
            dataKey="label"
            dataCenterKey="containIP"
            secondaryDataKey="value"
            secondaryDataCenterKey="containIPServer"
            theme={theme}
            /*
              Actions
            */
            handleSelect={handleSelect}
          />

          {dataCenter.containIPServer && (
            <CustomizedDropDown
              label={"Mode"}
              dropDownData={DEFAULT_MODES_FOR_IP}
              value={dataCenter.mode || "Select contain ip"}
              errorMessage={errorCenter.mode}
              dataKey="label"
              dataCenterKey="mode"
              secondaryDataKey="value"
              secondaryDataCenterKey="modeServer"
              theme={theme}
              isRequired={true}
              /*
                Actions
              */
              handleSelect={handleSelect}
            />
          )}

          {dataCenter.modeServer === "staticip" && (
            <PrimaryInput
              label="Static IP"
              value={dataCenter.staticIP}
              errorMessage={errorCenter.staticIP}
              inputRef={refCenter.staticIP}
              placeHolderText="Enter service static ip"
              name="staticIP"
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

        <ExtraInputWrapper theme={theme}>
          <PrimaryInput
            label="Service Status"
            value={dataCenter.serviceStatus}
            errorMessage={errorCenter.serviceStatus}
            inputRef={refCenter.serviceStatus}
            placeHolderText="Enter service status"
            name="serviceStatus"
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

      <div className="border border-gray-400  rounded-lg pt-6 px-2 pb-2 mt-6 relative space-y-3">
        <div
          className={`absolute -top-[0.6rem]  px-2 left-4 body-font ${primaryBg} ${primaryText}`}
        >
          Billing
        </div>

        <ExtraInputWrapper theme={theme}>
          <CustomizedDropDown
            label={"Billing Method"}
            dropDownData={DEFAULT_BILLING_METHODS}
            value={dataCenter.billingMethod || "Select a method"}
            errorMessage={errorCenter.billingMethod}
            dataKey="label"
            dataCenterKey="billingMethod"
            secondaryDataKey="value"
            secondaryDataCenterKey="billingMethodServer"
            theme={theme}
            /*
              Actions
            */
            handleSelect={handleSelect}
          />
        </ExtraInputWrapper>

        <ExtraInputWrapper theme={theme}>
          <CustomizedDropDown
            label={"packages"}
            dropDownData={PACKAGES}
            value={dataCenter.serviceType || "Select service type"}
            errorMessage={errorCenter.serviceType}
            dataKey="label"
            dataCenterKey="serviceType"
            secondaryDataKey="value"
            secondaryDataCenterKey="serviceTypeServer"
            theme={theme}
            isRequired={true}
            hasSearch={true}
            /*
              Actions
            */
            handleSelect={handleSelect}
          />
          <CustomizedDropDown
            label={"Plans"}
            dropDownData={plans}
            value={dataCenter.plan || "Select service type"}
            errorMessage={errorCenter.plan}
            dataKey="label"
            dataCenterKey="plan"
            secondaryDataKey="id"
            secondaryDataCenterKey="planServer"
            theme={theme}
            hasSearch={true}
            isDisabled={plans.length <= 0}
            isRequired={true}
            /*
              Actions
            */
            handleSelect={handleSelect}
          />

          <CustomizedDropDown
            label={"Payment Currency"}
            dropDownData={PAYMENTS}
            value={dataCenter.paymentCurrency || "Select service type"}
            errorMessage={errorCenter.paymentCurrency}
            dataKey="label"
            dataCenterKey="paymentCurrency"
            theme={theme}
            isRequired={true}
            /*
              Actions
            */
            handleSelect={handleSelect}
          />

          <PrimaryInput
            label="Price"
            value={dataCenter.price}
            errorMessage={errorCenter.price}
            inputRef={refCenter.price}
            placeHolderText="Enter the price"
            name="price"
            type="text"
            theme={theme}
            isRequired={true}
            /*
            Actions
           */

            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
          />

          <PrimaryInput
            label="Duration"
            value={dataCenter.durationNumber}
            errorMessage={errorCenter.durationNumber}
            inputRef={refCenter.durationNumber}
            placeHolderText="Enter duration"
            name="durationNumber"
            type="text"
            theme={theme}
            badgeLabel="Months"
            isRequired={true}
            /*
              Actions
            */
            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
          />

          <div></div>

          <PrimaryInput
            label="Service Start Date"
            value={dataCenter.serviceStartDate}
            errorMessage={errorCenter.serviceStartDate}
            inputRef={refCenter.serviceStartDate}
            placeHolderText="Enter service start date"
            name="serviceStartDate"
            type="datetime-local"
            theme={theme}
            isRequired={true}
            /* 
              Actions
            */

            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
          />

          <PrimaryInput
            label="Service End Date"
            value={dataCenter.serviceEndDate}
            errorMessage={errorCenter.serviceEndDate}
            inputRef={refCenter.serviceEndDate}
            placeHolderText="Enter service end date"
            name="serviceEndDate"
            type="datetime-local"
            theme={theme}
            isRequired={true}
            isDisabled={true}
            /*
              Actions
            */
            updateDataCenter={updateDataCenter}
            updateErrorCenter={updateErrorCenter}
          />
        </ExtraInputWrapper>
      </div>
    </>
  );
};

export default NetworkAndBilling;
