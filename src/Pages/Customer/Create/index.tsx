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
  ] = Hook();

  return (
    <div className={` ${dashboardBg} ${dashboardText}`}>
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
        /*
         Actions
        */
        handleSelectTab={handleSelectTab}
        handleOnChange={handleOnChange}
        handleSelect={handleSelect}
        handleCheck={handleCheck}
        updateDataCenter={updateDataCenter}
        updateErrorCenter={updateErrorCenter}
      />

      <PrimaryButton label="Confirm" handleClickOn={handleCreateCustomers} />
    </div>
  );
};

export default CustomerCreate;
