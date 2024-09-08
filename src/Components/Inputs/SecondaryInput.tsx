import React, { InputHTMLAttributes } from "react";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";
interface SecondaryInputPropType extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  name: string;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  value: any;
  placeHolderText: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  errorMessage?: string;
  frontIcon?: React.ReactNode;
  backIcon?: React.ReactNode;
  theme: DefaultThemeTypes;
  /**
   * action
   */
  handleChangeOnInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SecondaryInput: React.FC<SecondaryInputPropType> = ({
  type,
  id,
  name,
  inputRef,
  value,
  placeHolderText,
  isRequired,
  isDisabled,
  errorMessage,
  frontIcon,
  backIcon,
  theme,
  /**
   * action
   */
  handleChangeOnInput,
}: SecondaryInputPropType) => {
  const { inputColor } = theme;
  const [placeHolderTextColor, inputText, focusBorder, focusShadow] =
    inputColor;

  return (
    <div className="relative space-y-1">
      <input
        type={type}
        id={id}
        name={name}
        ref={inputRef}
        value={value}
        required={isRequired}
        disabled={isDisabled}
        className={`placeholder:caption-font bg-transparent secondary-font peer h-auto w-full rounded-none border-b border-default_dark  py-2 pl-8 focus:pl-2  ${
          backIcon ? "pr-10" : "pr-6"
        } text-base_light outline-none duration-300 placeholder:font-medium  focus:border-primary ${placeHolderTextColor} ${
          errorMessage
            ? "focus:border-danger focus:shadow-danger"
            : `${focusShadow} ${focusBorder}`
        }`}
        placeholder={placeHolderText}
        /**
         * action
         */
        onChange={handleChangeOnInput}
      />
      {errorMessage && (
        <p className="caption-font ml-2 font-medium text-danger">
          {errorMessage}
        </p>
      )}
      {frontIcon && (
        <div
          className={`absolute left-2 top-2 duration-100 peer-focus:scale-0 ${inputText}`}
        >
          {frontIcon}
        </div>
      )}
      {backIcon && (
        <div className={`absolute right-4 top-1.5 cursor-pointer ${inputText}`}>
          {backIcon}
        </div>
      )}
    </div>
  );
};

export default SecondaryInput;
