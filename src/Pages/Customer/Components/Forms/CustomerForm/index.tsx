import {
  BILLING_CONTACT_INFORMATION_ID,
  GENERAL_ID,
  NETWORK_AND_BILLING_ID,
} from "../../../constants";
import BillingContactInformation from "./Components/BillingContactInformation";
import General from "./Components/General";

import NetworkAndBilling from "./Components/NetworkAndBilling";
import SuccessBox from "../../../../../Components/ModalBox/SuccessBox";
import { useNavigate } from "react-router-dom";
import Hook from "./hook";
import { useAppSelector } from "../../../../../Hooks/ReduxProvider";
import PrimaryWrapper from "../../../../../Components/Wrappers/PrimaryWrapper";
import TabMenu from "../../../../../Components/Menus/TabMenu";
import PrimaryButton from "../../../../../Components/Buttons/PrimaryButton";
import DataLoading from "../../../../../Components/Loadings/DataLoading";

export type CustomerFormType = {
  action: string;
};

const CustomerForm = (props: CustomerFormType) => {
  const { action } = props;
  const [
    dataCenter,
    errorCenter,
    refCenter,
    fields,

    selectedTab,
    tabs,
    iconAccessCodes,
    iconFailCodes,
    selectInputCenter,
    isSuccess,
    serverErrors,
    loading,
    /*
      Structures
    */
    childCleaningStructure,
    childPassingStructure,
    /*
      Actions
    */
    handleSelectTab,
    handleOnChange,
    handleSelect,
    handleCheck,
    updateDataCenter,
    updateErrorCenter,
    handleCreateCustomers,
    handleIsSuccess,
    resetDataCenter,
  ] = Hook(props);

  const theme = useAppSelector((state) => state.theme);

  const navigate = useNavigate();
  const toCustomers = () => {
    navigate("/customers");
  };
  return (
    <div>
      <PrimaryWrapper theme={theme}>
        {loading && <DataLoading />}
        <div className="space-y-5">
          <TabMenu
            tabs={tabs}
            selectedTab={selectedTab}
            theme={theme}
            iconAccessCodes={iconAccessCodes}
            iconFailCodes={iconFailCodes}
            /*
          Actions
        */
            handleSelectTab={handleSelectTab}
          />

          <div className="">
            {selectedTab.id === GENERAL_ID && (
              <General
                theme={theme}
                dataCenter={dataCenter}
                errorCenter={errorCenter}
                refCenter={refCenter}
                /*
                  Structures
                */
                childCleaningStructure={childCleaningStructure}
                childPassingStructure={childPassingStructure}
                /*
                Actions
              */
                handleOnChange={handleOnChange}
                updateDataCenter={updateDataCenter}
                updateErrorCenter={updateErrorCenter}
              />
            )}

            {selectedTab.id === NETWORK_AND_BILLING_ID && (
              <NetworkAndBilling
                theme={theme}
                dataCenter={dataCenter}
                errorCenter={errorCenter}
                refCenter={refCenter}
                fields={fields}
                serverErrors={serverErrors}
                /*
                Structures
                */
                childCleaningStructure={childCleaningStructure}
                childPassingStructure={childPassingStructure}
                /*
                Actions
               */
                handleOnChange={handleOnChange}
                handleSelect={handleSelect}
                updateDataCenter={updateDataCenter}
                updateErrorCenter={updateErrorCenter}
              />
            )}
            {selectedTab.id === BILLING_CONTACT_INFORMATION_ID && (
              <BillingContactInformation
                theme={theme}
                dataCenter={dataCenter}
                errorCenter={errorCenter}
                refCenter={refCenter}
                fields={fields}
                selectInputCenter={selectInputCenter}
                serverErrors={serverErrors}
                /*
                Structures
                */
                childCleaningStructure={childCleaningStructure}
                childPassingStructure={childPassingStructure}
                /*
                Actions
              */
                handleOnChange={handleOnChange}
                handleSelect={handleSelect}
                handleCheck={handleCheck}
                updateDataCenter={updateDataCenter}
                updateErrorCenter={updateErrorCenter}
              />
            )}
          </div>
        </div>

        <div className=" mt-5 flex  justify-end">
          <div className="w-32  ">
            <PrimaryButton
              label="Confirm"
              handleClickOn={handleCreateCustomers}
            />
          </div>
        </div>
      </PrimaryWrapper>

      <SuccessBox
        isOpen={isSuccess}
        titleLabel="Success"
        bodyText={
          action === "update"
            ? "Successfully update a customer"
            : "Successfully create a customer"
        }
        btnLabel="Close"
        isCreate={true}
        clickOn={() => {
          handleIsSuccess(!isSuccess);
          if (action === "update") return;
          resetDataCenter();
        }}
        navigation={toCustomers}
      />
    </div>
  );
};

export default CustomerForm;
