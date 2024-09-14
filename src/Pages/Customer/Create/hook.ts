import { ChangeEvent, useState } from "react";
import {
  DEFAULT_DATA_CENTER,
  DEFAULT_ERROR_CENTER,
  DEFAULT_REF_CENTER,
  TABS,
} from "./constants";
import { DataCenterTypes, ErrorCenterTypes, RefCenterTypes } from "./_types";
import { CustomizedDropDownDataTypes } from "../../../Components/DropDownBox/CustomizedDropDown/_types";
import { setStateObject } from "../../../Utils/Data/States/state.utils";
import { TabType } from "../../../Components/Menus/TabMenu/_types";
import { AvaliableSelectionType } from "../../../Components/DropDownBox/SelectDropDown";
import { stringToggle } from "../../../Utils/Data/string.utils";
import { AvaPaymentTypes } from "../../../Constants/Customers/payment.constants";

type HookType = [
  dataCenter: DataCenterTypes,
  errorCenter: ErrorCenterTypes,
  refCenter: RefCenterTypes,
  selectedTab: TabType,
  tabs: TabType[],
  /*
    Actions
  */
  handleSelectTab: (tab: TabType) => void,
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void,
  handleSelect: (
    data: CustomizedDropDownDataTypes,
    dataKey: string,
    dataCenterKey: string
  ) => void,
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void
];

const Hook = (): HookType => {
  const [dataCenter, setDataCenter] =
    useState<DataCenterTypes>(DEFAULT_DATA_CENTER);
  const [errorCenter, setErrorCenter] =
    useState<ErrorCenterTypes>(DEFAULT_ERROR_CENTER);
  const [refCenter] = useState<RefCenterTypes>(DEFAULT_REF_CENTER);
  const [paymentTypes, setPaymentTypes] = useState<AvaPaymentTypes[]>([]);

  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setStateObject(name, value, setDataCenter);
    setStateObject(name, "", setErrorCenter);
  };

  const handleSelect = (
    data: CustomizedDropDownDataTypes,
    dataKey: string,
    dataCenterKey: string
  ) => {
    const value = data[dataKey as keyof CustomizedDropDownDataTypes];
    setStateObject(dataCenterKey, value, setDataCenter);
    setStateObject(dataCenterKey, "", setErrorCenter);
  };

  const handleCheck = (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => {
    //Key types
    const centerKey = dataCenterKey as keyof DataCenterTypes;
    const key = dataKey as keyof AvaliableSelectionType;

    //Select Data
    const selectedData = [...paymentTypes];
    const value = data[key];
    if (typeof selectedData !== "string" || typeof value !== "string") {
      console.log("Provide string values");
      return;
    }
    const resultData = stringToggle(selectedData, value);
    setDataCenter((prev) => ({ ...prev, [dataCenterKey]: resultData }));
  };

  //TABS
  const [selectedTab, setSelectedTab] = useState<TabType>(TABS[0]);
  const [tabs] = useState<TabType[]>(TABS);

  const handleSelectTab = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return [
    dataCenter,
    errorCenter,
    refCenter,
    selectedTab,
    tabs,
    /*
      Actions
    */
    handleSelectTab,
    handleOnChange,
    handleSelect,
    handleCheck,
  ];
};

export default Hook;
