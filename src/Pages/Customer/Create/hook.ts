import { ChangeEvent, useState } from "react";
import {
  DEFAULT_DATA_CENTER,
  DEFAULT_ERROR_CENTER,
  DEFAULT_REF_CENTER,
} from "./constants";
import { DataCenterTypes, ErrorCenterTypes, RefCenterTypes } from "./_types";
import { CustomizedDropDownDataTypes } from "../../../Components/DropDownBox/CustomizedDropDown/_types";
import { setStateObject } from "../../../Utils/Data/States/state.utils";

const Hook = () => {
  const [dataCenter, setDataCenter] =
    useState<DataCenterTypes>(DEFAULT_DATA_CENTER);
  const [errorCenter, setErrorCenter] =
    useState<ErrorCenterTypes>(DEFAULT_ERROR_CENTER);
  const [refCenter, setRefCenter] =
    useState<RefCenterTypes>(DEFAULT_REF_CENTER);

  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setStateObject(name, value, setDataCenter);
    setStateObject(name, "", setErrorCenter);
  };

  const handleSelect = (
    data: CustomizedDropDownDataTypes,
    dataKey: keyof CustomizedDropDownDataTypes,
    dataCenterKey: string
  ) => {
    const value = data[dataKey];
    setStateObject(dataCenterKey, value, setDataCenter);
    setStateObject(dataCenterKey, "", setErrorCenter);
  };

  return [dataCenter, errorCenter, refCenter, handleOnChange, handleSelect];
};

export default Hook;
