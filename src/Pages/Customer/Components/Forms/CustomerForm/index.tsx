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

const CustomerForm = () => {
  const [
    dataCenter,
    errorCenter,
    refCenter,
    selectedTab,
    tabs,
    plans,
    townships,
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
  ] = Hook();

  const theme = useAppSelector((state) => state.theme);

  const navigate = useNavigate();
  const toCustomers = () => {
    navigate("/customers");
  };
  return (
    <>
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
                plans={plans}
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
                townships={townships}
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
      </PrimaryWrapper>

      <div className="w-32 mt-5  absolute right-0  pb-5">
        <PrimaryButton label="Confirm" handleClickOn={handleCreateCustomers} />
      </div>

      <SuccessBox
        isOpen={isSuccess}
        titleLabel="Success"
        bodyText="Successfully create a customer"
        btnLabel="Close"
        isCreate={true}
        clickOn={() => {
          handleIsSuccess(!isSuccess);
          resetDataCenter();
        }}
        navigation={toCustomers}
      />
    </>
  );
};

export default CustomerForm;
