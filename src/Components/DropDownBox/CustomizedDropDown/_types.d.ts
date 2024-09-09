import { DefaultThemeTypes } from "../../../Pages/Theme/_types";

export type CustomizedDropDownDataTypes = {
  id?: number;
  _id?: number;
  label: string;
  value?: string;
};

export type CustomizedDropDownTypes = {
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  theme: DefaultThemeTypes;
  errorMessage?: string;
  value: string;
  dataKey: string;
  dropDownData: CustomizedDropDownDataTypes[];
  handleSelect: (data: CustomizedDropDownDataTypes, dataKey: string) => void;
  hasMultiSelect?: boolean;
};
