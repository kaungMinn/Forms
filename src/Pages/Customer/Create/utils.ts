import {
  isMeaningfullDuration,
  isMeaningfullMoneyValue,
} from "../../../Utils/regex.utils";
import { DataCenterTypes } from "../_types";
import {
  handleStepOne,
  handleStepThree,
  handleStepTwo,
  SchemaTypes,
} from "../Components/Forms/CustomerForm/validation";

export const validationSchemaGenerator = (
  dataCenter: DataCenterTypes
): SchemaTypes[] => {
  return [
    {
      condition: !dataCenter.brandName,
      field: "brandName",
      step: handleStepOne,
    },
    {
      condition: !dataCenter.customerName,
      field: "customerName",
      step: handleStepOne,
    },
    {
      condition:
        !dataCenter.autoGeneratePPOEAccountServer && !dataCenter.radUserName,
      field: "radUserName",
      step: handleStepTwo,
    },
    {
      condition:
        !dataCenter.autoGeneratePPOEAccountServer && !dataCenter.radPassword,
      field: "radPassword",
      step: handleStepTwo,
    },
    {
      condition: !dataCenter.serviceID,
      field: "serviceID",
      step: handleStepTwo,
    },
    {
      condition: dataCenter.containIPServer && !dataCenter.mode,
      field: "mode",
      step: handleStepTwo,
    },
    {
      condition: dataCenter.containIPServer && !dataCenter.staticIP,
      field: "staticIP",
      step: handleStepTwo,
    },

    {
      condition: !dataCenter.serviceStatus,
      field: "serviceStatus",
      step: handleStepTwo,
    },
    {
      condition: !dataCenter.serviceType,
      field: "serviceType",
      step: handleStepTwo,
    },

    {
      condition: !dataCenter.plan,
      field: "plan",
      step: handleStepTwo,
    },
    {
      condition: !dataCenter.paymentCurrency,
      field: "paymentCurrency ",
      step: handleStepTwo,
    },
    {
      condition: !dataCenter.price,
      field: "price",
      step: handleStepTwo,
    },

    {
      condition: !dataCenter.durationNumber,
      field: "durationNumber",
      step: handleStepTwo,
    },

    {
      condition: !dataCenter.serviceStartDate,
      field: "serviceStartDate",
      step: handleStepTwo,
    },

    {
      condition: !dataCenter.serviceEndDate,
      field: "serviceEndDate",
      step: handleStepTwo,
    },

    {
      condition:
        dataCenter.price !== "" && !isMeaningfullMoneyValue(dataCenter.price),
      field: "price",
      step: handleStepTwo,
      validationKey: "validMoney",
    },
    {
      condition: !dataCenter.durationNumber,
      field: "durationNumber",
      step: handleStepTwo,
    },
    {
      condition:
        dataCenter.durationNumber !== "" &&
        !isMeaningfullDuration(dataCenter.durationNumber),
      field: "durationNumber",
      step: handleStepTwo,
      validationKey: "validDuration",
    },
    {
      condition: !dataCenter.paymentTypes,
      field: "paymentTypes",
      step: handleStepThree,
    },
    {
      condition: dataCenter.paymentTypes.includes("MMK") && !dataCenter.mmk,
      field: "mmk",
      step: handleStepThree,
    },
    {
      condition:
        dataCenter.paymentTypes.includes("MMK") &&
        dataCenter.mmk !== "" &&
        !isMeaningfullMoneyValue(dataCenter.mmk),
      field: "mmk",
      step: handleStepThree,
    },
    {
      condition: dataCenter.paymentTypes.includes("SGD") && !dataCenter.sgd,
      field: "sgd",
      step: handleStepThree,
    },
    {
      condition:
        dataCenter.paymentTypes.includes("SGD") &&
        dataCenter.sgd !== "" &&
        !isMeaningfullMoneyValue(dataCenter.sgd),
      field: "sgd",
      step: handleStepThree,
    },
    {
      condition: dataCenter.paymentTypes.includes("BAHT") && !dataCenter.baht,
      field: "baht",
      step: handleStepThree,
    },
    {
      condition:
        dataCenter.paymentTypes.includes("BAHT") &&
        dataCenter.baht !== "" &&
        !isMeaningfullMoneyValue(dataCenter.baht),
      field: "baht",
      step: handleStepThree,
    },
    {
      condition: !dataCenter.city,
      field: "city",
      step: handleStepThree,
    },

    {
      condition: !dataCenter.township,
      field: "township",
      step: handleStepThree,
    },
  ];
};
