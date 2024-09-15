import { DefaultThemeTypes } from "../../Pages/Theme/_types";
import { IoCheckmarkDone } from "react-icons/io5";

type CheckboxInputType = {
  isChecked: boolean;
  label?: string;
  theme: DefaultThemeTypes;
  /*
    Action
  */
  handleIsChecked: () => void;
};
const CheckboxInput = (props: CheckboxInputType) => {
  const { isChecked, label = "", handleIsChecked, theme } = props;
  const { primaryColor } = theme;
  const selectedBg = primaryColor[2];
  const selectedText = primaryColor[3];
  return (
    <div className="cursor-pointer" onClick={() => handleIsChecked()}>
      <div className="flex  items-center gap-2  ">
        <div
          className={`w-5 h-5 rounded-md flex items-center justify-center duration-200   ${
            isChecked ? `${selectedBg} ${selectedText}` : "bg-slate-100 border"
          }`}
        >
          {isChecked && <IoCheckmarkDone />}
        </div>
        <div> {label && label} </div>
      </div>
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={() => {
          //   AvoidWarning
        }}
      />
    </div>
  );
};

export default CheckboxInput;
