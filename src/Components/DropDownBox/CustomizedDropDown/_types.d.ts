import { RefObject } from "react";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";

export type CustomizedDropDownDataTypes = {
  id?: number;
  _id?: number;
  label: string;
  value?: string | boolean;
};

export type CustomizedDropDownTypes = {
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  theme: DefaultThemeTypes;
  errorMessage?: string;
  value: string;
  hasMultiSelect?: boolean;
  dropDownData: CustomizedDropDownDataTypes[];
  dataKey: string;
  dataCenterKey: string;
  secondaryDataKey?: string;
  secondaryDataCenterKey?: string;
  containerRef?: RefObject;
  hasSearch?: boolean;
  /*
    Actions
  */
  handleSelect: (
    data: CustomizedDropDownDataTypes,
    dataKey: string,
    dataCenterKey: string
  ) => void;
};
