import React, { InputHTMLAttributes } from "react";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";

interface PrimaryInputPropType extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  labelIcon?: React.ReactNode;
  type: string;
  name: string;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  value: any;
  placeHolderText: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  backIcon?: React.ReactNode;
  errorMessage?: string;
  theme: DefaultThemeTypes;
  /**
   * action
   */
  handleChangeOnInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickOnIcon?: () => void;
  handleInputBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrimaryInput: React.FC<PrimaryInputPropType> = ({
  labelText = "",
  type = "text",
  name = "",
  inputRef = null,
  value = "",
  placeHolderText = "",
  isRequired = false,
  isDisabled = false,
  backIcon,
  errorMessage = "",
  theme,
  /**
   * action
   */

  handleChangeOnInput,
  handleClickOnIcon,
  handleInputBlur,
}: PrimaryInputPropType) => {
  const { inputColor, primaryColor } = theme;
  const [placeHolderColor, textColor, focusBorder, focusShadow] = inputColor;

  return (
    <div className="">
      {labelText && (
        <label
          className={`caption-font font-medium block mb-2 ${primaryColor[1]}`}
        >
          {labelText}
          {isRequired && <span className="caption-font text-danger"> ** </span>}
        </label>
      )}
      <div
        className={`relative col-span-3 space-y-2 ${
          labelText && "tablet:col-span-2"
        }`}
      >
        <input
          type={type}
          name={name}
          ref={inputRef}
          value={value}
          required={isRequired}
          disabled={isDisabled}
          className={`placeholder:caption-font secondary-font h-8 w-full rounded-lg border border-default_dark border-opacity-60 bg-transparent pl-4 pr-6  shadow-sm placeholder:font-medium ${
            backIcon && "pr-12"
          } outline-none duration-300  focus:shadow-sm ${textColor} ${placeHolderColor} ${
            errorMessage
              ? "focus:border-danger focus:shadow-danger"
              : `${focusBorder} ${focusShadow}`
          } `}
          placeholder={placeHolderText}
          onBlur={handleInputBlur}
          /**
           * action
           */
          onChange={(event) => handleChangeOnInput(event)}
        />
        {backIcon && (
          <div
            className="absolute right-4 top-1 laptop:cursor-pointer"
            /**
             * action
             */
            onClick={handleClickOnIcon}
          >
            {backIcon}
          </div>
        )}
      </div>
      {errorMessage && (
        <>
          {labelText && <div className="col-span-3 tablet:col-span-1" />}
          <div className={`col-span-3 ${labelText && "tablet:col-span-2"} `}>
            {errorMessage && (
              <p className="caption-font px-2 text-danger"> {errorMessage} </p>
            )}
          </div>
        </>
      )}

      {!errorMessage && <div className="py-2"></div>}
    </div>
  );
};

export default PrimaryInput;
