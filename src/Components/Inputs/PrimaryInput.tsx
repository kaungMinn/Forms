import React, { ChangeEvent, InputHTMLAttributes, RefObject } from "react";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";

interface PrimaryInputPropType extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelIcon?: React.ReactNode;
  type: string;
  name: string;
  inputRef?: RefObject<HTMLInputElement>;
  value: string;
  placeHolderText: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  backIcon?: React.ReactNode;
  errorMessage?: string;
  theme: DefaultThemeTypes;

  /*
    States
  */
  updateDataCenter: (key: string, value: string) => void;
  updateErrorCenter: (key: string, value: string) => void;
  /**
   * action
   */
  handleChangeOnInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickOnIcon?: () => void;
  handleInputBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrimaryInput: React.FC<PrimaryInputPropType> = ({
  label = "",
  type = "text",
  name = "",
  inputRef,
  value = "",
  placeHolderText = "",
  isRequired = false,
  isDisabled = false,
  backIcon,
  errorMessage = "",
  theme,
  /*
    States
  */
  updateDataCenter,
  updateErrorCenter,
  /**
   * action
   */
  handleChangeOnInput,
  handleClickOnIcon,
  handleInputBlur,
}: PrimaryInputPropType) => {
  const { inputColor, primaryColor } = theme;
  const [placeHolderColor, textColor, focusBorder, focusShadow] = inputColor;

  const handleClick = () => {
    if (!inputRef || !inputRef.current) return;
    inputRef.current.showPicker(); // Trigger the native picker
  };

  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;

    updateDataCenter(name, value);
    updateErrorCenter(name, "");
  };

  return (
    <div className="">
      {label && (
        <div
          className={`caption-font font-medium block mb-2 ${primaryColor[1]}`}
        >
          {label}
          {isRequired && <span className="caption-font text-danger"> ** </span>}
        </div>
      )}
      <div
        className={`relative col-span-3 space-y-2 ${
          label && "tablet:col-span-2"
        }`}
      >
        <input
          type={type}
          name={name}
          ref={inputRef}
          value={value}
          required={isRequired}
          disabled={isDisabled}
          className={`placeholder:caption-font secondary-font h-9 w-full rounded-lg border border-default_dark border-opacity-60 bg-transparent pl-4 pr-6  shadow-sm placeholder:font-medium ${
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
          onChange={(event) =>
            handleChangeOnInput
              ? handleChangeOnInput(event)
              : handleOnChange(event)
          }
          onClick={handleClick}
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
          {label && <div className="col-span-3 tablet:col-span-1" />}
          <div className={`col-span-3 ${label && "tablet:col-span-2"} `}>
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
