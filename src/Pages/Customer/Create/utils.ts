import {
  isMeaningfullDuration,
  isMeaningfullMoneyValue,
} from "../../../Utils/regex.utils";
import { DataCenterTypes } from "../_types";
import { SchemaTypes } from "../Components/Forms/CustomerForm/validation";

export const validationSchemaGenerator = (
  dataCenter: DataCenterTypes
): SchemaTypes[] => {
  return [
    {
      condition:
        dataCenter.customerType === "Company" && !dataCenter.companyName,
      field: "companyName",
      step: "step1",
    },
    {
      condition: !dataCenter.brandName,
      field: "brandName",
      step: "step1",
    },
    {
      condition: !dataCenter.customerName,
      field: "customerName",
      step: "step1",
    },
    {
      condition:
        !dataCenter.autoGeneratePPOEAccountServer && !dataCenter.radUserName,
      field: "radUserName",
      step: "step2",
    },
    {
      condition:
        !dataCenter.autoGeneratePPOEAccountServer && !dataCenter.radPassword,
      field: "radPassword",
      step: "step2",
    },
    {
      condition: !dataCenter.serviceID,
      field: "serviceID",
      step: "step2",
    },
    {
      condition: dataCenter.containIPServer && !dataCenter.mode,
      field: "mode",
      step: "step2",
    },
    {
      condition: dataCenter.containIPServer && !dataCenter.staticIP,
      field: "staticIP",
      step: "step2",
    },

    {
      condition: !dataCenter.serviceStatus,
      field: "serviceStatus",
      step: "step2",
    },
    {
      condition: !dataCenter.serviceType,
      field: "serviceType",
      step: "step2",
    },

    {
      condition: !dataCenter.plan,
      field: "plan",
      step: "step2",
    },
    {
      condition: !dataCenter.paymentCurrency,
      field: "paymentCurrency ",
      step: "step2",
    },
    {
      condition: !dataCenter.price,
      field: "price",
      step: "step2",
    },
    {
      condition:
        dataCenter.price !== "" && !isMeaningfullMoneyValue(dataCenter.price),
      field: "price",
      step: "step2",
      validationKey: "validMoney",
    },
    {
      condition: !dataCenter.durationNumber,
      field: "durationNumber",
      step: "step2",
    },
    {
      condition:
        dataCenter.durationNumber !== "" &&
        !isMeaningfullDuration(dataCenter.durationNumber),
      field: "durationNumber",
      step: "step2",
      validationKey: "validDuration",
    },
    {
      condition: !dataCenter.serviceStartDate,
      field: "serviceStartDate",
      step: "step2",
    },

    {
      condition: !dataCenter.serviceEndDate,
      field: "serviceEndDate",
      step: "step2",
    },

    {
      condition: !dataCenter.paymentTypes,
      field: "paymentTypes",
      step: "step3",
    },
    {
      condition: dataCenter.paymentTypes.includes("MMK") && !dataCenter.mmk,
      field: "mmk",
      step: "step3",
    },
    {
      condition:
        dataCenter.paymentTypes.includes("MMK") &&
        dataCenter.mmk !== "" &&
        !isMeaningfullMoneyValue(dataCenter.mmk),
      field: "mmk",
      step: "step3",
    },
    {
      condition: dataCenter.paymentTypes.includes("SGD") && !dataCenter.sgd,
      field: "sgd",
      step: "step3",
    },
    {
      condition:
        dataCenter.paymentTypes.includes("SGD") &&
        dataCenter.sgd !== "" &&
        !isMeaningfullMoneyValue(dataCenter.sgd),
      field: "sgd",
      step: "step3",
    },
    {
      condition: dataCenter.paymentTypes.includes("BAHT") && !dataCenter.baht,
      field: "baht",
      step: "step3",
    },
    {
      condition:
        dataCenter.paymentTypes.includes("BAHT") &&
        dataCenter.baht !== "" &&
        !isMeaningfullMoneyValue(dataCenter.baht),
      field: "baht",
      step: "step3",
    },
    {
      condition: !dataCenter.city,
      field: "city",
      step: "step3",
    },

    {
      condition: !dataCenter.township,
      field: "township",
      step: "step3",
    },
  ];
};
