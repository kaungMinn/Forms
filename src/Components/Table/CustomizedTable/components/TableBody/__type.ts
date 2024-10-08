import { DefaultThemeTypes } from "../../../../../Pages/Theme/_types";

export type TABLE_BODY_ROW = {
  visibleCols: TABLE_BODY_COL[];
  invisibleCols: TABLE_BODY_COL[];
  isExpand: boolean;
};

export type TABLE_BODY_COL = {
  key: string;
  name: string;
  value: any;
  isLink: boolean;
  linkAction: any;
  hidden: boolean;
};

export type TABLE_BODY_PROPS_TYPE = {
  data: TABLE_BODY_ROW[];
  numberOfColumn: number;
  /**
   * action
   */
  handleClickOnArrow: (index: number) => void;
  handleClickOnUpdate: (id: string) => void;
  handleClickOnDelete: (col?: TABLE_BODY_ROW) => void;
  theme: DefaultThemeTypes;
};

export type ExpandDataBoxType = {
  invisibleColsList: any[];
  numberOfColumn: number;
};
