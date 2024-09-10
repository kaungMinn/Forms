import React from "react";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";

type TertiaryInputTypes = {
  name: string;
  value: string;
  theme: DefaultThemeTypes;
  placeHolderText?: string;
  /* 
        Actions
    */
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};
const TertiaryInput = (props: TertiaryInputTypes) => {
  const { name, value, onChange, placeHolderText = "" } = props;
  return (
    <input
      className="border h-8 px-2 w-full block outline-none text-sm mb-4 rounded-md "
      value={value}
      name={name}
      type="text"
      onChange={(ev) => onChange(ev)}
      placeholder={placeHolderText}
    />
  );
};

export default TertiaryInput;
