import { CustomizedDropDownDataTypes } from "../Components/DropDownBox/CustomizedDropDown/_types";

export type FilterDataTypes = {
  id: number;
  type: string;
  label: string;
  dataKey: string;
  dataCenterKey: string;
  placeHolderText: string;
  hasSearch: boolean;
  dropDownData?: CustomizedDropDownDataTypes[];
  parent?: string;
};
