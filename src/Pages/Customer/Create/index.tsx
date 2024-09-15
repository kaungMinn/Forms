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
    /*
      Actions
    */
    handleSelectTab,
    handleOnChange,
    handleSelect,
    handleCheck,
    updateDataCenter,
    updateErrorCenter,
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
    </div>
  );
};

export default CustomerCreate;
