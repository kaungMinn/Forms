import { useState } from "react";
import OLTPin from "Assets/Icons/Node/olt pin.svg";
import SNPin from "Assets/Icons/Node/sn pin.svg";
import DNPin from "Assets/Icons/Node/dn pin.svg";

interface propsType {
  primaryText: string;
  secondaryText: string;
  uniqueKey: string;
  handleCheck: (name: string, remove?: boolean) => void;
}

const CheckBox = ({
  primaryText,

  uniqueKey,
  handleCheck,
}: propsType) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div
      className={`flex rounded-lg ${
        isChecked ? "border border-gray-400 bg-blue-300" : "bg-white"
      } items-center py-1 px-5 shadow-md`}
      onClick={() => {
        if (!isChecked) {
          console.log("not checked");
          handleCheck(uniqueKey);
        } else {
          console.log("checked");
          handleCheck(uniqueKey, true);
        }
        setIsChecked((prev) => !prev);
      }}
    >
      <img
        src={`${
          uniqueKey === "olt" ? OLTPin : uniqueKey === "dn" ? DNPin : SNPin
        }`}
        className="h-8  w-5"
      />
      <div className="ml-2 text-sm">
        <label
          htmlFor="helper-checkbox"
          className="font-medium text-gray-900 dark:text-gray-300"
        >
          {primaryText}
        </label>
      </div>
    </div>
  );
};
export default CheckBox;
