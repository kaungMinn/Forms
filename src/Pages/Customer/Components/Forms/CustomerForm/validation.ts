import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../_types";
import { CustomerValidationTypes } from "./_types";
import { DEFAULT_CUSTOMER_VALIDATIONS as validations } from "./constants";

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

  if (
    refCenter &&
    refCenter[key as keyof RefCenterTypes] &&
    refCenter[key as keyof RefCenterTypes].current
  ) {
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

//FANCY ONE
export const fancyValidator = (
  dataCenter: DataCenterTypes
): { accessCodes: AccessCodeTypes } => {
  const setDefaultSteps = (accesses: AccessCodeTypes) => {
    accesses.step1 = false;
    accesses.step2 = false;
    accesses.step3 = false;
  };

  const passStep1 = (accesses: AccessCodeTypes) => {
    accesses.step1 = true;
    accesses.step2 = false;
    accesses.step3 = false;
  };

  const passStep2 = (accesses: AccessCodeTypes) => {
    accesses.step1 = true;
    accesses.step2 = true;
    accesses.step3 = false;
  };

  const accesses = { step1: false, step2: false, step3: false };

  const tmp_accesses = { ...accesses };

  const schema = [
    {
      condition: !dataCenter.brandName,
      field: "brandName",
      success: passStep1,
      fail: setDefaultSteps,
    },
    {
      condition: !dataCenter.customerName,
      field: "customerName",
      success: passStep1,
      fail: setDefaultSteps,
    },
    {
      condition:
        !dataCenter.autoGeneratePPOEAccountServer && !dataCenter.radUserName,
      field: "radUserName",
      success: passStep2,
      fail: passStep1,
    },
    {
      condition:
        !dataCenter.autoGeneratePPOEAccountServer && !dataCenter.radPassword,
      field: "radPassword",
      success: passStep2,
      fail: passStep1,
    },
    {
      condition: !dataCenter.serviceID,
      field: "serviceID",
      success: passStep2,
      fail: passStep1,
    },

    {
      condition: dataCenter.containIPServer && !dataCenter.mode,
      field: "mode",
      success: passStep2,
      fail: passStep1,
    },

    {
      condition: dataCenter.containIPServer && !dataCenter.staticIP,
      field: "staticIP",
      success: passStep2,
      fail: passStep1,
    },

    {
      condition: !dataCenter.serviceType,
      field: "serviceType",
      success: passStep2,
      fail: passStep1,
    },

    {
      condition: !dataCenter.plan,
      field: "plan",
      success: passStep2,
      fail: passStep1,
    },
  ];

  for (const { condition, success, fail } of schema) {
    if (condition) {
      fail(tmp_accesses);
      break;
    } else {
      success(tmp_accesses);
    }
  }

  return { accessCodes: tmp_accesses };
};
