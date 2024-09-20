import {
  isMeaningfulIP,
  isMeaningfullDuration,
  isMeaningfullMoneyValue,
} from "../../../../../Utils/regex.utils";
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
  noBreak?: boolean;
  validationKey?: string;
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
  refCenter: RefCenterTypes,
  validationKey: string | undefined
) => {
  const resultErrorCenter = {
    ...errorCenter,
    [validationKey || key]: validations[key as keyof CustomerValidationTypes],
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

  for (const { condition, field, step, noBreak, validationKey } of schema) {
    if (condition) {
      step(validationAccessCodes);
      const error_center = handleErrorMessage(
        field,
        errorCenter,

        refCenter,
        validationKey
      );

      errorCenter = error_center;

      isValidate = false;

      if (!noBreak) {
        break;
      }
    } else {
      handleStepThree(validationAccessCodes);
      isValidate = true;
    }
  }

  return [isValidate, validationAccessCodes, errorCenter, refCenter];
};

export type IconAccessTypes = {
  1: boolean;
  2: boolean;
  3: boolean;
};
export const DEFAULT_ICON_ACCESSES: IconAccessTypes = {
  1: false,
  2: false,
  3: false,
};

//FANCY ONE
export const fancyValidator = (
  dataCenter: DataCenterTypes,
  accesses: IconAccessTypes
): { accessCodes: IconAccessTypes } => {
  const passStep1 = (accesses: IconAccessTypes) => {
    accesses[1] = true;
  };

  const failStep1 = (accesses: IconAccessTypes) => {
    accesses[1] = false;
  };

  const passStep2 = (accesses: IconAccessTypes) => {
    accesses[2] = true;
  };

  const failStep2 = (accesses: IconAccessTypes) => {
    accesses[2] = false;
  };

  const passStep3 = (accesses: IconAccessTypes) => {
    accesses[3] = true;
  };

  const failStep3 = (accesses: IconAccessTypes) => {
    accesses[3] = false;
  };

  const tmp_accesses = { ...accesses };

  const schema = [
    {
      condition: !dataCenter.brandName,
      field: "brandName",
      success: passStep1,
      fail: failStep1,
    },
    {
      condition: !dataCenter.customerName,
      field: "customerName",
      success: passStep1,
      fail: failStep1,
    },
    {
      condition:
        !dataCenter.autoGeneratePPOEAccountServer && !dataCenter.radUserName,
      field: "radUserName",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition:
        !dataCenter.autoGeneratePPOEAccountServer && !dataCenter.radPassword,
      field: "radPassword",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition: !dataCenter.serviceID,
      field: "serviceID",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: dataCenter.containIPServer && !dataCenter.mode,
      field: "mode",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: dataCenter.containIPServer && !dataCenter.staticIP,
      field: "staticIP",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition:
        dataCenter.containIPServer &&
        dataCenter.staticIP !== "" &&
        !isMeaningfulIP(dataCenter.staticIP),
      field: "staticIP",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !dataCenter.serviceType,
      field: "serviceType",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !dataCenter.plan,
      field: "plan",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition: !dataCenter.paymentCurrency,
      field: "paymentCurrency",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition: !dataCenter.price,
      field: "price",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition:
        dataCenter.price !== "" && !isMeaningfullMoneyValue(dataCenter.price),
      success: passStep2,
      fail: failStep2,
    },
    {
      condition: !dataCenter.durationNumber,
      field: "durationNumber",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition:
        dataCenter.durationNumber !== "" &&
        !isMeaningfullDuration(dataCenter.durationNumber),
      field: "durationNumber",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition: !dataCenter.serviceStartDate,
      field: "serviceStartDate",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !dataCenter.serviceEndDate,
      field: "serviceEndDate",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition: !dataCenter.paymentTypes,
      field: "paymentTypes",
      success: passStep3,
      fail: failStep3,
    },

    {
      condition: dataCenter.paymentTypes.includes("MMK") && !dataCenter.mmk,
      field: "mmk",
      success: passStep3,
      fail: failStep3,
    },
    {
      condition:
        dataCenter.paymentTypes.includes("MMK") &&
        !isMeaningfullMoneyValue(dataCenter.mmk),
      field: "mmk",
      success: passStep3,
      fail: failStep3,
    },
    {
      condition: dataCenter.paymentTypes.includes("SGD") && !dataCenter.sgd,
      field: "sgd",
      success: passStep3,
      fail: failStep3,
    },
    {
      condition:
        dataCenter.paymentTypes.includes("SGD") &&
        dataCenter.sgd !== "" &&
        !isMeaningfullMoneyValue(dataCenter.sgd),
      field: "sgd",
      success: passStep3,
      fail: failStep3,
    },
    {
      condition: dataCenter.paymentTypes.includes("BAHT") && !dataCenter.baht,
      field: "baht",
      success: passStep3,
      fail: failStep3,
    },
    {
      condition:
        dataCenter.paymentTypes.includes("BAHT") &&
        dataCenter.baht !== "" &&
        !isMeaningfullMoneyValue(dataCenter.baht),
      field: "baht",
      success: passStep3,
      fail: failStep3,
    },
    {
      condition: !dataCenter.city,
      field: "city",
      success: passStep3,
      fail: failStep3,
    },

    {
      condition: !dataCenter.township,
      field: "township",
      success: passStep3,
      fail: failStep3,
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

//ERROR ONE
export const errorValidator = (
  errorCenter: ErrorCenterTypes,
  failAccesses: IconAccessTypes
): { failAccesses: IconAccessTypes } => {
  const failStep1 = (failCodes: IconAccessTypes) => {
    failCodes[1] = true;
  };

  const passStep1 = (failCodes: IconAccessTypes) => {
    failCodes[1] = false;
  };

  const failStep2 = (failCodes: IconAccessTypes) => {
    failCodes[2] = true;
  };

  const passStep2 = (failCodes: IconAccessTypes) => {
    failCodes[2] = false;
  };

  const failStep3 = (failCodes: IconAccessTypes) => {
    failCodes[3] = true;
  };

  const passStep3 = (failCodes: IconAccessTypes) => {
    failCodes[3] = false;
  };

  const tmp_accesses = { ...failAccesses };

  const schema = [
    {
      condition: !errorCenter.brandName,
      field: "brandName",
      success: passStep1,
      fail: failStep1,
    },
    {
      condition: !errorCenter.customerName,
      field: "customerName",
      success: passStep1,
      fail: failStep1,
    },
    {
      condition: !errorCenter.radUserName,
      field: "radUserName",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition: !errorCenter.radPassword,
      field: "radPassword",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition: !errorCenter.serviceID,
      field: "serviceID",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !errorCenter.mode,
      field: "mode",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !errorCenter.staticIP,
      field: "staticIP",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !errorCenter.serviceType,
      field: "serviceType",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !errorCenter.plan,
      field: "plan",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition: !errorCenter.paymentCurrency,
      field: "paymentCurrency",
      success: passStep2,
      fail: failStep2,
    },
    {
      condition: !errorCenter.price,
      field: "price",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !errorCenter.durationNumber,
      field: "durationNumber",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !errorCenter.serviceStartDate,
      field: "serviceStartDate",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !errorCenter.serviceEndDate,
      field: "serviceEndDate",
      success: passStep2,
      fail: failStep2,
    },

    {
      condition: !errorCenter.paymentTypes,
      field: "paymentTypes",
      success: passStep3,
      fail: failStep3,
    },
    {
      condition: !errorCenter.mmk,
      field: "mmk",
      success: passStep3,
      fail: failStep3,
    },

    {
      condition: !errorCenter.sgd,
      field: "sgd",
      success: passStep3,
      fail: failStep3,
    },
    {
      condition: !errorCenter.baht,
      field: "baht",
      success: passStep3,
      fail: failStep3,
    },
    {
      condition: !errorCenter.city,
      field: "city",
      success: passStep3,
      fail: failStep3,
    },

    {
      condition: !errorCenter.township,
      field: "township",
      success: passStep3,
      fail: failStep3,
    },
  ];

  for (const { condition, success, fail } of schema) {
    if (condition) {
      success(tmp_accesses);
    } else {
      fail(tmp_accesses);
      break;
    }
  }

  return { failAccesses: tmp_accesses };
};
