import { CiCircleChevDown } from "react-icons/ci";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";

type DropDownTopBoxType = {
  isDisabled: boolean;
  errorMessage: string;
  onClick: () => void;
  mainText?: string;
  theme: DefaultThemeTypes;
  hasChev: boolean;
  hasDropDown: boolean;
};

const Chev = ({
  hasChev,
  hasDropDown,
  errorMessage,
}: {
  hasChev: boolean;
  hasDropDown: boolean;
  errorMessage: string;
}) => {
  return (
    <>
      {hasChev && (
        <span
          className={` duration-200 block ${hasDropDown ? "rotate-180" : "0"} ${
            errorMessage && "text-red-500"
          }`}
        >
          <CiCircleChevDown size={20} />
        </span>
      )}
    </>
  );
};

const DropDownTopBox = (props: DropDownTopBoxType) => {
  const {
    isDisabled,
    errorMessage,
    onClick,
    mainText = "",
    hasChev = false,
    hasDropDown,
  } = props;

  const handleOnClick = () => {
    if (isDisabled) {
      return;
    }
    onClick();
  };

  return (
    <>
      <div
        className={`caption-font py-2 px-3 relative rounded-md cursor-pointer outline-none w-full border h-8 ${
          isDisabled && "bg-[#E5E5E5] border"
        }  ${
          errorMessage
            ? "border-red-500 text-red-500"
            : " border-gray-400 text-black"
        } `}
        onClick={() => handleOnClick()}
      >
        {mainText && mainText}

        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Chev
            hasChev={hasChev}
            errorMessage={errorMessage}
            hasDropDown={hasDropDown}
          />
        </div>
      </div>
    </>
  );
};

export default DropDownTopBox;
