import React, { ChangeEvent, InputHTMLAttributes, RefObject } from "react";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";
import PrimaryBadge from "../Badge/PrimaryBadge";

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
  badgeLabel?: string;

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
  badgeLabel = "",

  /*
    States
  */
  updateDataCenter,
  updateErrorCenter,
  /**
   * action
   */
  handleChangeOnInput,

  handleInputBlur,
}: PrimaryInputPropType) => {
  const { inputColor, primaryColor, alertColor } = theme;
  const [placeHolderColor, textColor, focusBorder, focusShadow] = inputColor;
  const [disabledBg, disabledText, disabledBorder, alertBg] = alertColor;

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
          {isRequired && <span className={`${alertColor[4]}`}> ** </span>}
        </div>
      )}
      <div>
        <div className="flex gap-1 items-center">
          <input
            type={type}
            name={name}
            ref={inputRef}
            value={value}
            required={isRequired}
            disabled={isDisabled}
            className={`placeholder:caption-font secondary-font border h-9 w-full rounded-lg  pl-4 pr-6  shadow-sm placeholder:font-medium ${
              backIcon && "pr-12"
            } outline-none duration-300  focus:shadow-sm ${textColor} ${placeHolderColor} ${
              isDisabled
                ? `${disabledBg} ${disabledText} ${disabledBorder}`
                : "bg-transparent border-default_dark border-opacity-60 "
            } ${
              errorMessage
                ? ` ${alertColor[5]}`
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

          {badgeLabel && (
            <PrimaryBadge
              theme={theme}
              label={badgeLabel}
              width="w-20"
              height="h-9"
              bgColor={`${errorMessage ? alertBg : ""}`}
            />
          )}
        </div>
      </div>

      <div className="py-0.5"></div>

      {errorMessage ? (
        <div className={`caption-font ps-1  ${alertColor[4]}`}>
          {errorMessage}
        </div>
      ) : (
        <div className="py-2"></div>
      )}
    </div>
  );
};

export default PrimaryInput;
