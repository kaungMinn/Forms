import CustomizedDropDown from "../../../Components/DropDownBox/CustomizedDropDown";
import { CustomizedDropDownDataTypes } from "../../../Components/DropDownBox/CustomizedDropDown/_types";
import PrimaryInput from "../../../Components/Inputs/PrimaryInput";
import Heading from "../../../Components/Labels/Heading";
import { useAppSelector } from "../../../Hooks/ReduxProvider";
import { PACKAGES } from "./constants";

const CustomerCreate = () => {
  const theme = useAppSelector((state) => state.theme);
  const { dashboardColor } = theme;
  const [dashboardBg, dashboardText] = dashboardColor;
  const handleSelect = (data: CustomizedDropDownDataTypes, dataKey: string) => {
    console.log(data, dataKey);
  };
  return (
    <div className={`${dashboardBg} ${dashboardText}`}>
      <Heading heading="Create Customers" subHeading="Create your customers" />
      <PrimaryInput
        labelText="Hello"
        isRequired={true}
        type="string"
        name="test"
        value={""}
        placeHolderText="Hello"
        handleChangeOnInput={() => {
          console.log("hello");
        }}
        theme={theme}
      />

      <CustomizedDropDown
        theme={theme}
        label="Kaung"
        isRequired={true}
        dataKey="label"
        value="Basic Internet Plan,Unlimited Streaming Plan"
        dropDownData={PACKAGES}
        handleSelect={handleSelect}
        hasMultiSelect={true}
      />
    </div>
  );
};

export default CustomerCreate;
