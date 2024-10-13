import {
  CityType,
  TownshipType,
} from "../Constants/Location/myanmar.constants";
import {
  PackageType,
  PlanType,
  PriceType,
} from "../Constants/Packages/constants";
import { SelectInputTypes } from "../Pages/Customer/_types";
import { DefaultThemeTypes } from "../Pages/Theme/_types";

// src/types.ts
export interface Customer {
  id: number;
  customers: CustomerData;
  fields: CustomerFields;
  selectedInputs: SelectInputTypes;
}

export interface CustomerData {
  id: number;
  brandName: string;
  customerName: string;
  customerType: string;
  customerTypeServer: string;
  companyName: string;
  autoGeneratePPOEAccount: string;
  autoGeneratePPOEAccountServer: boolean | string;
  radUserName: string;
  radPassword: string;
  serviceID: string;
  serviceIDName: string;
  containIP: string;
  containIPServer: boolean;
  mode: string;
  modeServer: string;
  staticIP: string;
  serviceType: string;
  serviceTypeServer: string;
  plan: string;
  planServer: string;
  paymentCurrency: string;
  price: string;
  serviceStatus: string;
  billingMethod: string;
  billingMethodServer: string;
  serviceStartDate: string; // Adjust type as needed
  serviceEndDate: string; // Adjust type as needed
  duration: string;
  durationNumber: string;
  enable: string;
  enableServer: boolean;
  paymentTypes: string;
  mmk: string;
  sgd: string;
  baht: string;
  city: string;
  township: string;
  address: string;
  coordinates: string; // Adjust type as needed
  phoneNumber: string;
  viberNumber: string;
  email: string;
  remark: string;
}
export interface CustomerFields {
  serviceType: PackageType[];
  plan: PlanType[];
  price: PriceType[];
  city: CityType[];
  township: TownshipType[];
}

export interface ActivityLogTypes {
  change: { key: string; from: string; to: string };
}

export interface Activity {
  id: number;
  activityLog: ActivityLogTypes[];
  action: string;
  field: string;
  date: string;
}

export interface ThemeType {
  id: number;
  logo: string;
  detailLogo: string;
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
}

export interface Theme {
  id: number;
  theme: DefaultThemeTypes;
}
