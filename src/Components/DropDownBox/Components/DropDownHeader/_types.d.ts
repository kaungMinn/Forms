import { DefaultThemeTypes } from "../../../../Pages/Theme/_types";

export type DropDownHeaderType = {
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  theme: DefaultThemeTypes;
  errorMessage?: string;
  mainText: string;
  hasDropDown?: boolean;

  /* 
    Actions
  */

  onClick?: () => void;
};
