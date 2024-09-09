import Heading from "../../../Components/Labels/Heading";

import { useAppSelector } from "../../../Hooks/ReduxProvider";
import CustomerForm from "../Components/Forms/CustomerForm";

const CustomerCreate = () => {
  const theme = useAppSelector((state) => state.theme);
  const { dashboardColor } = theme;
  const [dashboardBg, dashboardText] = dashboardColor;

  return (
    <div className={`${dashboardBg} ${dashboardText}`}>
      <Heading heading="Create Customers" subHeading="Create your customers" />
      <div className="mt-5">
        <CustomerForm />
      </div>
    </div>
  );
};

export default CustomerCreate;
