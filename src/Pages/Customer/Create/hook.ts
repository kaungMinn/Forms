import { ChangeEvent, useState } from "react";
import {
  DEFAULT_DATA_CENTER,
  DEFAULT_ERROR_CENTER,
  DEFAULT_REF_CENTER,
  DEFAULT_SELECT_INPUT_CENTER,
  TABS,
} from "./constants";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
  SelectInputTypes,
} from "./_types";
import { CustomizedDropDownDataTypes } from "../../../Components/DropDownBox/CustomizedDropDown/_types";
import { modifyState } from "../../../Utils/Data/States/state.utils";
import { TabType } from "../../../Components/Menus/TabMenu/_types";
import { AvaliableSelectionType } from "../../../Components/DropDownBox/SelectDropDown";
import { arrayToggle } from "../../../Utils/Data/array.utils";
import {
  PackageType,
  PlanType,
  PriceType,
} from "../../../Constants/Packages/constants";

type HookType = [
  dataCenter: DataCenterTypes,
  errorCenter: ErrorCenterTypes,
  refCenter: RefCenterTypes,
  selectedTab: TabType,
  tabs: TabType[],
  plans: PlanType[],
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
  ) => void,
  updateDataCenter: (key: string, value: string) => void,
  updateErrorCenter: (key: string, value: string) => void
];

const Hook = (): HookType => {
  /*
    DATAS
  */
  const [dataCenter, setDataCenter] =
    useState<DataCenterTypes>(DEFAULT_DATA_CENTER);
  const [errorCenter, setErrorCenter] =
    useState<ErrorCenterTypes>(DEFAULT_ERROR_CENTER);
  const [refCenter] = useState<RefCenterTypes>(DEFAULT_REF_CENTER);
  const [selectInputCenter, setSelectInputCenter] = useState<SelectInputTypes>(
    DEFAULT_SELECT_INPUT_CENTER
  );
  const [plans, setPlans] = useState<PlanType[]>([]);
  const [price, setPrice] = useState<PriceType>({ number: 0, type: "" });
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

  const updateSelectInputCenter = (
    key: string,
    value: SelectInputTypes[keyof SelectInputTypes]
  ) => {
    return modifyState(key, value, setSelectInputCenter);
  };

  const handleUpdatePlans = (data: PackageType) => {
    const plans = data.plans;
    setPlans(plans);
  };

  const handleUpdatePrice = (data: PlanType) => {
    const price = data.price;
    setPrice(price);

    const { number, type } = price;
    updateDataCenter("price", number.toString());
    updateDataCenter("paymentCurrency", type);
  };

  const childDataStructure = {
    serviceType: handleUpdatePlans,
    plan: handleUpdatePrice,
  };

  /*
    ACTIONS
  */
  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;

    updateDataCenter(name, value);
    updateErrorCenter(name, "");
  };

  const handleSelect = (data: any, dataKey: string, dataCenterKey: string) => {
    let value = data[dataKey];

    if (typeof value === "undefined") {
      console.log("Change valid datakey");
      return;
    }
    if (typeof value === "number") value = value.toString();
    updateDataCenter(dataCenterKey, value);
    updateErrorCenter(dataCenterKey, "");

    const childData =
      childDataStructure[dataCenterKey as keyof typeof childDataStructure];

    if (childData) {
      childData(data);
    }
  };

  const handleCheck = (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => {
    //Data
    const selectInputCenterKey = dataCenterKey as keyof SelectInputTypes;
    const currentSelectInputs = selectInputCenter[selectInputCenterKey];

    //Validations
    if (!Array.isArray(currentSelectInputs)) {
      console.log("provide a valid values!");
      return;
    }

    //Toggle
    const toggledData = arrayToggle(currentSelectInputs, data, dataKey);
    const sortedData = toggledData.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
    const paymentTypes = sortedData
      .map((data) => data[dataKey as keyof AvaliableSelectionType])
      .join(", ");

    updateSelectInputCenter(dataCenterKey, sortedData);
    updateDataCenter(dataCenterKey, paymentTypes);
  };

  /*
    TABS
  */
  const [selectedTab, setSelectedTab] = useState<TabType>(TABS[0]);
  const [tabs] = useState<TabType[]>(TABS);

  const handleSelectTab = (tab: TabType) => {
    setSelectedTab(tab);
  };

  /*
    LIFE CIRCLES
  */

  return [
    dataCenter,
    errorCenter,
    refCenter,
    selectedTab,
    tabs,
    plans,
    /*
      Actions
    */
    handleSelectTab,
    handleOnChange,
    handleSelect,
    handleCheck,
    updateDataCenter,
    updateErrorCenter,
  ];
};

export default Hook;
