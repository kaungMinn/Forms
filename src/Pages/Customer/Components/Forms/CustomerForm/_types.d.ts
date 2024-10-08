import { RefObject } from "react";
import { AvaliableSelectionType } from "../../Components/DropDownBox/SelectDropDown";
import { PlanType } from "../../Constants/Packages/constants";
import {
  CityType,
  TownshipType,
} from "../../../../../Constants/Location/myanmar.constants";
import { PackageType, PriceType } from "../../../../../Constants/Packages/constants";

export type DataCenterTypes = {
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
  billingMethod: string;
  billingMethodServer: string;
  serviceStatus: string;
  serviceStartDate: string;
  serviceEndDate: string;
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
  coordinates: string;
  phoneNumber: string;
  viberNumber: string;
  email: string;
  remark: string;
};

export type ErrorCenterTypes = {
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
  containIPServer: boolean | string;
  mode: string;
  modeServer: string;
  staticIP: string;
  serviceType: string;
  serviceTypeServer: string;
  plan: string;
  planServer: string;
  paymentCurrency: string;
  price: string;
  billingMethod: string;
  billingMethodServer: string;
  serviceStatus: string;
  serviceStartDate: string;
  serviceEndDate: string;
  duration: string;
  durationNumber: string;
  enable: string;
  enableServer: string;
  paymentTypes: string;
  mmk: string;
  sgd: string;
  baht: string;
  city: string;
  township: string;
  address: string;
  coordinates: string;
  phoneNumber: string;
  viberNumber: string;
  email: string;
  remark: string;
};

export type RefCenterTypes = {
  brandName: RefObject;
  customerName: RefObject;
  customerType: RefObject;
  companyName: RefObject;
  autoGeneratePPOEAccount: RefObject;
  radUserName: RefObject;
  radPassword: RefObject;
  serviceID: RefObject;
  serviceIDName: RefObject;
  containIP: RefObject;
  mode: RefObject;
  staticIP: RefObject;
  serviceType: RefObject;
  plan: RefObject;
  paymentCurrency: RefObject;
  price: RefObject;
  billingMethod: RefObject;
  serviceStatus: RefObject;
  serviceStartDate: RefObject;
  serviceEndDate: RefObject;
  duration: RefObject;
  durationNumber: RefObject;
  paymentTypes: RefObject;
  mmk: RefObject;
  sgd: RefObject;
  baht: RefObject;
  city: RefObject;
  township: RefObject;
  address: RefObject;
  coordinates: RefObject;
  phoneNumber: RefObject;
  viberNumber: RefObject;
  email: RefObject;
  remark: RefObject;
};

export type SelectInputTypes = {
  paymentTypes: AvaliableSelectionType[];
};

export type ChildCenterTypes = {
  plan: PlanType;
};

export type DefaultServerErrorType = {
  duplicate: boolean;
};

export type CustomerValidationTypes = {
  companyName: string;
  brandName: string;
  customerName: string;
  customerType: string;
  autoGeneratePPOEAccount: string;
  radUserName: string;
  radPassword: string;
  serviceID: string;
  serviceIDName: string;
  containIP: string;
  mode: string;
  staticIP: string;
  serviceType: string;
  plan: string;
  paymentCurrency: string;
  price: string;
  billingMethod: string;
  serviceStatus: string;
  serviceStartDate: string;
  serviceEndDate: string;
  duration: string;
  durationNumber: string;
  paymentTypes: string;
  mmk: string;
  sgd: string;
  baht: string;
  city: string;
  township: string;
  address: string;
  coordinates: string;
  phoneNumber: string;
  email: string;
  viberNumber: string;
  remark: string;
  validMoney: string;
  validDuration: string;
};

export type FieldTypes = {
  serviceType: PackageType[];
  plan: PlanType[];
  price: PriceType[];
  city: CityType[];
  township: TownshipType[];
};
