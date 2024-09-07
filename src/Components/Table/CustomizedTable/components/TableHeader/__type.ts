export type TABLE_HEADER_PROP_TYPE = {
  data: COLUMN_HEADER_TYPE[];
  isExpandAll: boolean;
  numberOfColumn: number;
  /**
   * action
   */
  handleClickOnAllExpand: () => void;
  handleChangeOnSort: (key: string, sortType: string) => void;
};

export type COLUMN_HEADER_TYPE = {
  name: string;
  key: string;
  hidden?: boolean;
  sortType: string;
};

export type UPDATED_HEADER_TYPE = {
  isExpandAll: boolean;
  list: COLUMN_HEADER_TYPE[];
};
