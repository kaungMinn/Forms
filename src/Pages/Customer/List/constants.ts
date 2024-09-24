import { createRef } from "react";
import { CITIES } from "../../../Constants/Location/myanmar.constants";
import { PACKAGES } from "../../../Constants/Packages/constants";
import { FilterDataTypes } from "../../../Filters/_types";
import { DataCenterTypes, ErrorCenterTypes, FieldTypes } from "./_types";

export const headers = [
  { _id: 29, key: "id", name: "ID" },
  { _id: 2, key: "customerName", name: "Customer Name" },
  { _id: 1, key: "brandName", name: "Brand Name" },
  { _id: 3, key: "customerType", name: "Customer Type" },
  { _id: 4, key: "companyName", name: "Company Name" },
  { _id: 11, key: "serviceType", name: "Service Type" },
  { _id: 12, key: "plan", name: "Plan" },
  { _id: 5, key: "serviceID", name: "Service ID" },
  { _id: 6, key: "radUserName", name: "User Name" },
  { _id: 7, key: "radPassword", name: "Password" },
  { _id: 8, key: "serviceIDName", name: "Service ID Name" },
  { _id: 9, key: "mode", name: "Mode" },
  { _id: 10, key: "staticIP", name: "Static IP" },
  { _id: 13, key: "paymentCurrency", name: "Payment Currency" },
  { _id: 14, key: "price", name: "Price" },
  { _id: 15, key: "serviceStatus", name: "Service Status" },
  { _id: 16, key: "billingMethod", name: "Billing Method" },
  { _id: 17, key: "serviceStartDate", name: "Start Date" },
  { _id: 18, key: "serviceEndDate", name: "End Date" },
  { _id: 19, key: "duration", name: "Duration" },
  { _id: 20, key: "paymentTypes", name: "Payment Types" },
  { _id: 21, key: "city", name: "City" },
  { _id: 22, key: "township", name: "Township" },
  { _id: 23, key: "address", name: "Address" },
  { _id: 24, key: "coordinates", name: "Coordinates" },
  { _id: 25, key: "phoneNumber", name: "Phone Number" },
  { _id: 26, key: "viberNumber", name: "Viber Number" },
  { _id: 27, key: "email", name: "Email" },
  { _id: 28, key: "remark", name: "Remark" },
];

export const DEFAULT_INPUT_DATA: FilterDataTypes[] = [
  {
    id: 1,
    type: "dropdown",
    label: "Service Type",
    dataKey: "label",
    dataCenterKey: "serviceType",
    placeHolderText: "Select service type",
    hasSearch: true,
    dropDownData: PACKAGES,
  },
  {
    id: 2,
    type: "dropdown",
    label: "Plan",
    dataKey: "label",
    dataCenterKey: "plan",
    placeHolderText: "Select a plan",
    hasSearch: true,
  },
  {
    id: 3,
    type: "dropdown",
    label: "City",
    dataKey: "label",
    dataCenterKey: "city",
    placeHolderText: "Select a city",
    hasSearch: true,
  },
  {
    id: 4,
    type: "dropdown",
    label: "Township",
    dataKey: "label",
    dataCenterKey: "township",
    placeHolderText: "Select a township",
    hasSearch: true,
  },
  {
    id: 5,
    type: "datetime-local",
    label: "Start Date",
    dataKey: "",
    dataCenterKey: "startDate",
    placeHolderText: "Enter start date",
    hasSearch: false,
  },
  {
    id: 6,
    type: "datetime-local",
    label: "End Date",
    dataKey: "",
    dataCenterKey: "endDate",
    placeHolderText: "Enter end date",
    hasSearch: false,
    parent: "startDate",
  },
];

export const DATA_CENTER: DataCenterTypes = {
  serviceType: "",
  plan: "",
  city: "",
  township: "",
  startDate: "",
  endDate: "",
};

export const ERROR_CENTER: ErrorCenterTypes = {
  serviceType: "",
  plan: "",
  city: "",
  township: "",
  startDate: "",
  endDate: "",
};

export const REF_CENTER = {
  serviceType: createRef<HTMLInputElement>(),
  plan: createRef<HTMLInputElement>(),
  city: createRef<HTMLInputElement>(),
  township: createRef<HTMLInputElement>(),
  startDate: createRef<HTMLInputElement>(),
  endDate: createRef<HTMLInputElement>(),
};

export const FIELDS: FieldTypes = {
  serviceType: PACKAGES,
  plan: [],
  city: CITIES,
  township: [],
};
