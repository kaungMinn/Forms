type CustomizedErrorBoxPropsType = {
  isOpen: boolean;
  titleLabel: string;
  bodyText: string;
  btnCancelLabel?: string;
  btnOkLabel?: string;
  /**
   * action
   */
  clickOnOk?: () => void;
  clickOnCancel?: () => void;
};

export { CustomizedErrorBoxPropsType };
