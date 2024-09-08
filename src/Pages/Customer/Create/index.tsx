import PrimaryInput from "../../../Components/Inputs/PrimaryInput";
import { useAppSelector } from "../../../Hooks/ReduxProvider";

const CustomerCreate = () => {
  const theme = useAppSelector((state) => state.theme);
  return (
    <div>
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
    </div>
  );
};

export default CustomerCreate;
