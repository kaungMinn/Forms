import Heading from "../../../Components/Labels/Heading";
import { useAppSelector } from "../../../Hooks/ReduxProvider";
import CustomerForm from "../Components/Forms/CustomerForm";

const CustomerCreate = () => {
  const theme = useAppSelector((state) => state.theme);
  const { dashboardColor } = theme;
  const [dashboardBg, dashboardText] = dashboardColor;

  return (
    <div className={`relative  ${dashboardBg} ${dashboardText}`}>
      <Heading heading="Create Customers" subHeading="Create your customers" />

      <div className="mb-7" />

      <CustomerForm action="create" />
    </div>
  );
};

export default CustomerCreate;
