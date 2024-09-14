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
    /*
      Actions
    */
    handleSelectTab,
    handleOnChange,
    handleSelect,
    handleCheck,
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
        /*
         Actions
        */
        handleSelectTab={handleSelectTab}
        handleOnChange={handleOnChange}
        handleSelect={handleSelect}
        handleCheck={handleCheck}
      />
    </div>
  );
};

export default CustomerCreate;
