export type MENU_LIST_PROPS_TYPE = {
  list: MENU_LIST_TYPE[];
  isOpenSide: boolean;
  /**
   * action
   */
  handleChangeOnLogoutBox: () => void;
  handleClickOn: () => void;
  colors: string[];
};

export type MENU_LIST_TYPE = {
  id: number;
  name: string;
  path: string;
  icon: React.ReactNode;
  expand: boolean;
  is_sub_menu?: boolean;
  sub_menu: SUB_MENU_TYPE[];
};

export type SUB_MENU_TYPE = {
  id: number;
  name: string;
  icon: React.ReactNode;
  path: string;
};
