import { CiCircleChevDown } from "react-icons/ci";
import { DefaultThemeTypes } from "../../../../Pages/Theme/_types";

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
    theme,
  } = props;

  const { inputColor, alertColor } = theme;
  const shadowColor = inputColor[5];
  const [
    disableBg,
    disableText,
    disableBorder,
    alertBg,
    alertText,
    alertBorder,
  ] = alertColor;
  const handleOnClick = () => {
    if (isDisabled) {
      return;
    }
    onClick();
  };

  return (
    <>
      <div
        className={`flex caption-font items-center px-3 relative rounded-lg cursor-pointer outline-none w-full border h-9 ${
          hasDropDown && !errorMessage && shadowColor
        } ${theme.primaryColor[1]} ${
          isDisabled && `${disableBg} ${disableText} ${disableBorder}`
        }  ${
          errorMessage
            ? `${alertBg} ${alertBorder} ${alertText}`
            : " border-gray-400 text-black"
        } duration-200 `}
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
