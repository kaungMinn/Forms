import { ErrorCenterTypes, RefCenterTypes } from "../_types";
import { CustomerValidationTypes } from "./Forms/CustomerForm/_types";
import { DEFAULT_CUSTOMER_VALIDATIONS as validations } from "./Forms/CustomerForm/constants";

export type AccessCodeTypes = {
  step1: boolean;
  step2: boolean;
  step3: boolean;
};
export type SchemaTypes = {
  condition: boolean;
  field: string;
  step: (accessCodes: AccessCodeTypes) => void;
};

export const accessCodes: AccessCodeTypes = {
  step1: true,
  step2: false,
  step3: false,
};

export const handleStepOne = (validationCodes: AccessCodeTypes) => {
  validationCodes.step1 = true;
  validationCodes.step2 = false;
  validationCodes.step3 = false;
};

export const handleStepTwo = (validationCodes: AccessCodeTypes) => {
  validationCodes.step1 = true;
  validationCodes.step2 = true;
  validationCodes.step3 = false;
};

export const handleStepThree = (validationCodes: AccessCodeTypes) => {
  validationCodes.step1 = true;
  validationCodes.step2 = true;
  validationCodes.step3 = true;
};

const handleErrorMessage = (
  key: string,
  errorCenter: ErrorCenterTypes,
  refCenter: RefCenterTypes
) => {
  const resultErrorCenter = {
    ...errorCenter,
    [key]: validations[key as keyof CustomerValidationTypes],
  };

  if (refCenter && refCenter[key as keyof RefCenterTypes].current) {
    refCenter[key as keyof RefCenterTypes].current.focus();
  }

  return resultErrorCenter;
};

export const formShield = (
  schema: SchemaTypes[],
  errorCenter: ErrorCenterTypes,
  refCenter: RefCenterTypes
): [
  isValidate: boolean,
  validationAccessCodes: AccessCodeTypes,
  errorCenter: ErrorCenterTypes,
  refCenter: RefCenterTypes
] => {
  let isValidate = true;
  const validationAccessCodes = { ...accessCodes };

  for (const { condition, field, step } of schema) {
    if (condition) {
      step(validationAccessCodes);
      errorCenter = handleErrorMessage(field, errorCenter, refCenter);
      isValidate = false;
      break;
    } else {
      handleStepThree(validationAccessCodes);
      isValidate = true;
    }
  }

  return [isValidate, validationAccessCodes, errorCenter, refCenter];
};
