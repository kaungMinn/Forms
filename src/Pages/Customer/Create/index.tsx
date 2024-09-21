import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import Heading from "../../../Components/Labels/Heading";
import { useAppSelector } from "../../../Hooks/ReduxProvider";
import CustomerForm from "../Components/Forms/CustomerForm";
import Hook from "./hook";

const CustomerCreate = () => {
  const theme = useAppSelector((state) => state.theme);
  const { dashboardColor } = theme;
  const [dashboardBg, dashboardText] = dashboardColor;

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
  ] = Hook();

  return (
    <div className={`relative ${dashboardBg} ${dashboardText}`}>
      <Heading heading="Create Customers" subHeading="Create your customers" />

      <div className="mb-7" />

      <CustomerForm
        tabs={tabs}
        selectedTab={selectedTab}
        theme={theme}
        dataCenter={dataCenter}
        errorCenter={errorCenter}
        refCenter={refCenter}
        plans={plans}
        townships={townships}
        iconAccessCodes={iconAccessCodes}
        iconFailCodes={iconFailCodes}
        selectInputCenter={selectInputCenter}
        isSucess={isSuccess}
        /*
         Actions
        */
        handleSelectTab={handleSelectTab}
        handleOnChange={handleOnChange}
        handleSelect={handleSelect}
        handleCheck={handleCheck}
        updateDataCenter={updateDataCenter}
        updateErrorCenter={updateErrorCenter}
        handleIsSuccess={handleIsSuccess}
      />

      <div className="w-32 mt-5 absolute right-0  pb-5">
        <PrimaryButton label="Confirm" handleClickOn={handleCreateCustomers} />
      </div>
    </div>
  );
};

export default CustomerCreate;
