import { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  DEFAULT_DATA_CENTER,
  DEFAULT_ERROR_CENTER,
  DEFAULT_REF_CENTER,
  DEFAULT_SELECT_INPUT_CENTER,
  TABS,
} from "../constants";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
  SelectInputTypes,
} from "../_types";
import { CustomizedDropDownDataTypes } from "../../../Components/DropDownBox/CustomizedDropDown/_types";
import { modifyState } from "../../../Utils/Data/States/state.utils";
import { TabType } from "../../../Components/Menus/TabMenu/_types";
import { AvaliableSelectionType } from "../../../Components/DropDownBox/SelectDropDown";
import { arrayToggle } from "../../../Utils/Data/array.utils";
import { PlanType } from "../../../Constants/Packages/constants";
import {
  endDateCreator,
  inputAcceptableDate,
} from "../../../Utils/Date/date.utils";
import {
  CityType,
  TownshipType,
} from "../../../Constants/Location/myanmar.constants";
import {
  AccessCodeTypes,
  DEFAULT_ICON_ACCESSES,
  errorValidator,
  fancyValidator,
  formShield,
  IconAccessTypes,
} from "../Components/Forms/CustomerForm/validation";
import { validationSchemaGenerator } from "./utils";
import { stateCleaner } from "../../../Utils/Data/States/cleaner.utils";
import {
  isMeaningfulCoordinate,
  isMeaningfulEmail,
  isMeaningfullDuration,
  isMeaningfullMoneyValue,
  isMeaningfulPhoneNumber,
} from "../../../Utils/regex.utils";
import { camelCaseToLowerSpace } from "../../../Utils/Data/string.utils";

type HookType = [
  dataCenter: DataCenterTypes,
  errorCenter: ErrorCenterTypes,
  refCenter: RefCenterTypes,
  selectedTab: TabType,
  tabs: TabType[],
  plans: PlanType[],
  townships: TownshipType[],
  iconAccessCodes: IconAccessTypes,
  iconFailCodes: IconAccessTypes,
  selectInputCenter: SelectInputTypes,

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
    STATES
  */
  const [dataCenter, setDataCenter] =
    useState<DataCenterTypes>(DEFAULT_DATA_CENTER);
  const [errorCenter, setErrorCenter] =
    useState<ErrorCenterTypes>(DEFAULT_ERROR_CENTER);
  const [refCenter, setRefCenter] =
    useState<RefCenterTypes>(DEFAULT_REF_CENTER);
  const [selectInputCenter, setSelectInputCenter] = useState<SelectInputTypes>(
    DEFAULT_SELECT_INPUT_CENTER
  );
  const [plans, setPlans] = useState<PlanType[]>([]);
  const [townships, setTownships] = useState<TownshipType[]>([]);
  const [iconAccessCodes, setIconAccessCodes] = useState<IconAccessTypes>(
    DEFAULT_ICON_ACCESSES
  );
  const [iconFailCodes, setIconFailCodes] = useState<IconAccessTypes>(
    DEFAULT_ICON_ACCESSES
  );

  /*
    STATE ACTIONS
  */
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

  /*
    CHILD PASSING ACTIONS
  */

  const handleUpdatePlans = (data: Record<string, unknown>) => {
    const plans = data.plans;
    setPlans(plans as PlanType[]);
  };

  const handleUpdatePrice = (data: Record<string, unknown>) => {
    const planData = data as PlanType;
    const price = planData.price;

    const { number, type } = price;
    updateDataCenter("price", number.toString());
    updateDataCenter("paymentCurrency", type);

    //Duration
    const durationValue = planData.duration;
    const [durationNumber, durationType] = durationValue.split(" ");
    updateDataCenter("duration", durationType);
    updateDataCenter("durationNumber", durationNumber);

    //End Date
    const endDate = inputAcceptableDate(
      endDateCreator(
        durationType,
        durationNumber.toString(),
        dataCenter.serviceStartDate
      )
    );
    updateDataCenter("serviceEndDate", endDate);
  };

  const handleUpdateTownship = (data: Record<string, unknown>) => {
    const { townships } = data as CityType;
    setTownships(townships);
  };

  const childDataStructure = {
    serviceType: handleUpdatePlans,
    plan: handleUpdatePrice,
    city: handleUpdateTownship,
  };

  /*
    CHILD CLEANING ACTIONS
  */

  const childCleaningStructure = {
    autoGeneratePPOEAccount: ["radUserName", "radUserName"],
    containIP: ["mode", "modeServer", "staticIP"],
    serviceType: [
      "plan",
      "planServer",
      "paymentCurrency",
      "price",
      "serviceEndDate",
      "durationNumber",
    ],
    city: ["township"],
  };

  /*
    ACTIONS
  */
  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;

    updateDataCenter(name, value);
    updateErrorCenter(name, "");
  };

  const handleSelect = (
    data: Record<string, unknown>,
    dataKey: string,
    dataCenterKey: string
  ) => {
    let value = data[dataKey];

    if (typeof value === "undefined") {
      console.log("Change valid datakey");
      return;
    }
    if (typeof value === "number") value = value.toString();
    updateDataCenter(dataCenterKey, value as string);
    updateErrorCenter(dataCenterKey, "");

    const childData =
      childDataStructure[dataCenterKey as keyof typeof childDataStructure];

    const childCleaningKeys =
      childCleaningStructure[
        dataCenterKey as keyof typeof childCleaningStructure
      ];

    if (childData) {
      childData(data);
    }

    if (childCleaningKeys) {
      stateCleaner(childCleaningKeys, updateDataCenter);
      stateCleaner(childCleaningKeys, updateErrorCenter);
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

    let key = "";
    if (typeof data.value === "string") {
      key = data.value;
    }
    updateDataCenter(key, "");
    updateErrorCenter(key, "");
  };

  /*
    TABS
  */
  const [selectedTab, setSelectedTab] = useState<TabType>(TABS[0]);
  const [tabs] = useState<TabType[]>(TABS);

  const handleSelectTab = (tab: TabType) => {
    if (selectedTab.id === tab.id) return;
    const { validationAccessCodes } = handleNextStep();
    const steps = {
      1: validationAccessCodes.step1,
      2: validationAccessCodes.step2,
      3: validationAccessCodes.step3,
    };

    if (!steps[tab.id as keyof typeof steps]) return;
    setSelectedTab(tab);
  };

  const handleNextStep = (): {
    isValidate: boolean;
    validationAccessCodes: AccessCodeTypes;
  } => {
    const schema = validationSchemaGenerator(dataCenter);
    const [
      isValidate,
      validationAccessCodes,
      updatedErrorCenter,
      updatedRefCenter,
    ] = formShield(schema, errorCenter, refCenter);

    if (!isValidate) {
      setErrorCenter(updatedErrorCenter);
      setRefCenter(updatedRefCenter);
    }

    return { isValidate, validationAccessCodes };
  };

  /*
    LIFE-CIRCLE CALLBACK
  */

  const successIconGenerator = useCallback(() => {
    setIconAccessCodes((prevIconAccessCodes) => {
      const { accessCodes } = fancyValidator(dataCenter, prevIconAccessCodes);
      return accessCodes;
    });
  }, [dataCenter]);

  const failIconGenerator = useCallback(() => {
    setIconFailCodes((prevIconFailCodes) => {
      const { failAccesses } = errorValidator(errorCenter, prevIconFailCodes);
      return failAccesses;
    });
  }, [errorCenter]);

  console.log("Errorcenter", errorCenter);

  /*
    LIFE CIRCLES
  */
  const {
    duration,
    durationNumber,
    serviceStartDate,
    price,
    coordinates,
    phoneNumber,
    viberNumber,
    email,
    mmk,
    sgd,
    baht,
  } = dataCenter;
  useEffect(() => {
    //Generate end date
    if (!durationNumber || !isMeaningfullDuration(durationNumber)) {
      updateDataCenter("serviceEndDate", "");
      return;
    }
    const serviceEndDate = inputAcceptableDate(
      endDateCreator(duration, durationNumber, serviceStartDate)
    );
    updateDataCenter("serviceEndDate", serviceEndDate);
  }, [duration, durationNumber, serviceStartDate]);

  useEffect(() => {
    //Generate success icon
    successIconGenerator();
  }, [successIconGenerator]);

  useEffect(() => {
    //Generate fail icon
    failIconGenerator();
  }, [failIconGenerator]);

  //Regex validations
  const regexTesting = (key: string, regexFun: (value: string) => boolean) => {
    const data = dataCenter[key as keyof DataCenterTypes];
    if (data) {
      const hasMeaning = regexFun(data as string);
      updateErrorCenter(
        key,
        hasMeaning ? "" : `Enter valid ${camelCaseToLowerSpace(key)}`
      );
    } else {
      updateErrorCenter(key, "");
    }
  };

  useEffect(() => {
    regexTesting("durationNumber", isMeaningfullDuration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [durationNumber]);

  useEffect(() => {
    regexTesting("price", isMeaningfullMoneyValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  useEffect(() => {
    regexTesting("coordinates", isMeaningfulCoordinate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  useEffect(() => {
    regexTesting("phoneNumber", isMeaningfulPhoneNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber]);

  useEffect(() => {
    regexTesting("viberNumber", isMeaningfulPhoneNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viberNumber]);

  useEffect(() => {
    regexTesting("email", isMeaningfulEmail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  useEffect(() => {
    regexTesting("mmk", isMeaningfullMoneyValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mmk]);

  useEffect(() => {
    regexTesting("sgd", isMeaningfullMoneyValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sgd]);

  useEffect(() => {
    regexTesting("baht", isMeaningfullMoneyValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baht]);

  return [
    dataCenter,
    errorCenter,
    refCenter,
    selectedTab,
    tabs,
    plans,
    townships,
    iconAccessCodes,
    iconFailCodes,
    selectInputCenter,
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
