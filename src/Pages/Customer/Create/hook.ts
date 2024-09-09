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

type HookType = [
  dataCenter: DataCenterTypes,
  errorCenter: ErrorCenterTypes,
  refCenter: RefCenterTypes,
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void,
  handleSelect: (
    data: CustomizedDropDownDataTypes,
    dataKey: keyof CustomizedDropDownDataTypes,
    dataCenterKey: string
  ) => void,
  selectedTab: TabType,
  handleSelectTab: (tab: TabType) => void,
  tabs: TabType[]
];

const Hook = (): HookType => {
  const [dataCenter, setDataCenter] =
    useState<DataCenterTypes>(DEFAULT_DATA_CENTER);
  const [errorCenter, setErrorCenter] =
    useState<ErrorCenterTypes>(DEFAULT_ERROR_CENTER);
  const [refCenter] = useState<RefCenterTypes>(DEFAULT_REF_CENTER);

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
    handleOnChange,
    handleSelect,
    selectedTab,
    handleSelectTab,
    tabs,
  ];
};

export default Hook;
