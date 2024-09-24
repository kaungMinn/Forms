import { RefObject } from "react";
import {
  CityType,
  TownshipType,
} from "../../../Constants/Location/myanmar.constants";
import { PackageType, PlanType } from "../../../Constants/Packages/constants";

export type DataCenterTypes = {
  serviceType: string;

  plan: string;

  city: string;
  township: string;
  startDate: string;
  endDate: string;
};

export type ErrorCenterTypes = {
  serviceType: string;

  plan: string;

  city: string;
  township: string;
  startDate: string;
  endDate: string;
};

export type RefCenterTypes = {
  serviceType: RefObject<HTMLInputElement>;

  plan: RefObject<HTMLInputElement>;

  city: RefObject<HTMLInputElement>;
  township: RefObject<HTMLInputElement>;
  startDate: RefObject<HTMLInputElement>;
  endDate: RefObject<HTMLInputElement>;
};

export type FieldTypes = {
  serviceType: PackageType[];
  plan: PlanType[];
  city: CityType[];
  township: TownshipType[];
};
