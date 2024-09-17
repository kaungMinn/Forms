import React, { RefObject } from "react";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";
import PrimaryBadge from "../Badge/PrimaryBadge";

type TertiaryInputTypes = {
  name: string;
  value: string;
  theme: DefaultThemeTypes;
  placeHolderText?: string;
  sideLabel?: string;
  badgeWidth?: string;
  errorMessage?: string;
  inputRef?: RefObject<HTMLInputElement>;
  isDisabled?: boolean;
  /* 
        Actions
    */
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};
const TertiaryInput = (props: TertiaryInputTypes) => {
  const {
    name,
    value,
    placeHolderText = "",
    sideLabel = "",
    theme,
    badgeWidth,
    errorMessage = "",
    inputRef,
    isDisabled,
    /*
      Actions
    */
    onChange,
  } = props;
  const { inputColor, primaryColor, alertColor } = theme;

  const [disabledBg, disabledText, disabledBorder] = alertColor;

  const [placeHolderColor, textColor] = inputColor;

  return (
    <div>
      <div className="flex items-center gap-2 ">
        <input
          className={`border h-9 px-3 w-full block outline-none text-sm  rounded-lg  ${placeHolderColor} ${textColor} ${
            primaryColor[0]
          } ${
            isDisabled && `${disabledBg} ${disabledBorder} ${disabledText}`
          }  ${errorMessage ? `${alertColor[5]}` : ``}`}
          value={value}
          name={name}
          type="text"
          onChange={(ev) => onChange(ev)}
          placeholder={placeHolderText}
          ref={inputRef}
        />
        {sideLabel && (
          <PrimaryBadge
            theme={theme}
            label={sideLabel}
            width={badgeWidth}
            bgColor={errorMessage ? alertColor[3] : ""}
          />
        )}
      </div>

      {errorMessage ? (
        <div className={`px-2 py-1 caption-font ${alertColor[4]}`}>
          {errorMessage}
        </div>
      ) : (
        <div className="py-2"></div>
      )}
    </div>
  );
};

export default TertiaryInput;
