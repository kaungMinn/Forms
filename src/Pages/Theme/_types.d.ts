import { ReactNode } from "react";

export type DefaultThemeTypes = {
  id: number;
  logo: ReactNode;
  detailLogo: ReactNode;
  name: string;
  primaryColor: string[];
  secondaryColor: string[];
  dashboardColor: string[];
  navColor: string[];
  description: string;
  font: string;
  websiteLink: string;
};
