import { ReactNode } from "react";

type ColorTypes = {
  bg: string;
  text: string;
};

type GeneralColorTypes = {
  primary: ColorTypes;
  secondary: ColorTypes;
};

type StatusColor = {
  success: ColorTypes;
  danger: ColorTypes;
  disabled: ColorTypes;
};

type ActionColor = {
  createColor: ColorTypes;
  updateColor: ColorTypes;
  deleteColor: ColorTypes;
};

export type DefaultThemeTypes = {
  id: number;
  logo: ReactNode;
  detailLogo: ReactNode;
  name: string;
  primaryColor: string[];
  secondaryColor: string[];
  dashboardColor: string[];
  navColor: string[];
  tableColor: string[];
  inputColor: string[];
  textColor: string[];
  alertColor: string[];
  description: string;
  font: string;
  websiteLink: string;
  statusColor: StatusColor;
  actionColor: ActionColor;
  generalColor: GeneralColorTypes;
};
