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
  dropDownData: CustomizedDropDownDataTypes[];
  value: string;
  errorMessage?: string;
  containerRef?: RefObject;

  dataKey: string;
  dataCenterKey: string;
  secondaryDataKey?: string;
  secondaryDataCenterKey?: string;

  theme: DefaultThemeTypes;
  isRequired?: boolean;
  isDisabled?: boolean;
  hasMultiSelect?: boolean;
  hasSearch?: boolean;

  /*
    Structures
  */
  childCleaningStructure?: { [key: string]: string[] };
  childPassingStructure?: {
    [key: string]: (data: Record<string, unknown>) => void;
  };
  /*
    Actions
  */
  handleSelect?: (
    data: CustomizedDropDownDataTypes,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  updateDataCenter?: (key: string, value: string) => void;
  updateErrorCenter?: (key: string, value: string) => void;
};
