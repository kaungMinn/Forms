import { useState } from "react";

import {
  DataCenterTypes,
  ErrorCenterTypes,
  FieldTypes,
  RefCenterTypes,
} from "./_types";
import { DATA_CENTER, ERROR_CENTER, FIELDS, REF_CENTER } from "./constants";
import { modifyState } from "../../../Utils/Data/States/state.utils";
import { PlanType } from "../../../Constants/Packages/constants";
import { TownshipType } from "../../../Constants/Location/myanmar.constants";

type HookType = [
  DataCenter: DataCenterTypes,
  ErrorCenter: ErrorCenterTypes,
  refCenter: RefCenterTypes,
  fields: FieldTypes,
  /*
    Structures
  */
  childPassingStructure: {
    [key: string]: (data: Record<string, unknown>) => void;
  },
  childCleaningStructure: {
    [key: string]: string[];
  },
  /*
    Actions
  */
  updateDataCenter: (
    key: string,
    value: DataCenterTypes[keyof DataCenterTypes]
  ) => void,
  updateErrorCenter: (
    key: string,
    value: ErrorCenterTypes[keyof ErrorCenterTypes]
  ) => void,
  handleReset: () => void
];

const Hook = (): HookType => {
  const [dataCenter, setDataCenter] = useState<DataCenterTypes>(DATA_CENTER);
  const [errorCenter, setErrorCenter] =
    useState<ErrorCenterTypes>(ERROR_CENTER);
  const [refCenter] = useState<RefCenterTypes>(REF_CENTER);
  const [fields, setFields] = useState<FieldTypes>(FIELDS);

  const updateDataCenter = (
    key: string,
    value: DataCenterTypes[keyof DataCenterTypes]
  ) => {
    return modifyState(key, value, setDataCenter);
  };

  const updateErrorCenter = (
    key: string,
    value: ErrorCenterTypes[keyof ErrorCenterTypes]
  ) => {
    return modifyState(key, value, setErrorCenter);
  };

  const handleResetDataCenter = () => {
    setDataCenter(DATA_CENTER);
    setErrorCenter(ERROR_CENTER);
    setFields(FIELDS);
  };

  const updateFields = (key: string, value: FieldTypes[keyof FieldTypes]) => {
    return modifyState(key, value, setFields);
  };

  /*
    Structures
  */

  const handleChildOfServiceType = (data: Record<string, unknown>) => {
    const plans = data.plans;
    updateFields("plan", plans as PlanType[]);
  };
  const handleChildOfCity = (data: Record<string, unknown>) => {
    const township = data.townships as TownshipType[];
    updateFields("township", township as TownshipType[]);
  };

  const childPassingStructure = {
    serviceType: handleChildOfServiceType,
    city: handleChildOfCity,
  };

  const childCleaningStructure = {
    serviceType: ["plan"],
    city: ["township"],
  };

  return [
    dataCenter,
    errorCenter,
    refCenter,
    fields,
    childPassingStructure,
    childCleaningStructure,
    /*
      Actions
    */
    updateDataCenter,
    updateErrorCenter,
    handleResetDataCenter,
  ];
};

export default Hook;
