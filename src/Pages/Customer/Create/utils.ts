import { DataCenterTypes } from "../_types";
import {
  handleStepOne,
  handleStepTwo,
  SchemaTypes,
} from "../Components/validation";

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
      condition: !dataCenter.serviceType,
      field: "serviceType",
      step: handleStepTwo,
    },

    {
      condition: !dataCenter.plan,
      field: "plan",
      step: handleStepTwo,
    },
  ];
};
