import Heading from "../../../Components/Labels/Heading";
import { useAppSelector } from "../../../Hooks/ReduxProvider";
import CustomerForm from "../Components/Forms/CustomerForm";

const CustomerUpdate = () => {
  const theme = useAppSelector((state) => state.theme);
  const { dashboardColor } = theme;
  const [dashboardBg, dashboardText] = dashboardColor;
  return (
    <div className={`relative ${dashboardBg} ${dashboardText}`}>
      <Heading heading="Update Customers" subHeading="Update your customer" />

      <div className="mb-7" />

      <CustomerForm action="update" />
    </div>
  );
};

export default CustomerUpdate;
