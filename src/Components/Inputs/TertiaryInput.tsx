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
    /*
      Actions
    */
    onChange,
  } = props;
  const { inputColor, primaryColor } = theme;

  const [placeHolderColor, textColor] = inputColor;

  return (
    <div>
      <div className="flex items-center gap-2 ">
        <input
          className={`border h-9 px-2 w-full block outline-none text-sm  rounded-lg  ${placeHolderColor} ${textColor} ${primaryColor[0]}`}
          value={value}
          name={name}
          type="text"
          onChange={(ev) => onChange(ev)}
          placeholder={placeHolderText}
          ref={inputRef}
        />
        {sideLabel && (
          <PrimaryBadge theme={theme} label={sideLabel} width={badgeWidth} />
        )}
      </div>

      {errorMessage ? <div className={``}>{errorMessage}</div> : <div></div>}
    </div>
  );
};

export default TertiaryInput;
