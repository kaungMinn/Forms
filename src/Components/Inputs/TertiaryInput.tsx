import React from "react";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";
import PrimaryBadge from "../Badge/PrimaryBadge";

type TertiaryInputTypes = {
  name: string;
  value: string;
  theme: DefaultThemeTypes;
  placeHolderText?: string;
  sideLabel?: string;
  badgeWidth?: string;
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
    /*
      Actions
    */
    onChange,
  } = props;
  const { inputColor, primaryColor } = theme;

  const [placeHolderColor, textColor] = inputColor;

  return (
    <div className="flex items-center gap-2 ">
      <input
        className={`border h-8 px-2 w-full block outline-none text-sm  rounded-md  ${placeHolderColor} ${textColor} ${primaryColor[0]}`}
        value={value}
        name={name}
        type="text"
        onChange={(ev) => onChange(ev)}
        placeholder={placeHolderText}
      />
      {sideLabel && (
        <PrimaryBadge theme={theme} label={sideLabel} width={badgeWidth} />
      )}
    </div>
  );
};

export default TertiaryInput;
