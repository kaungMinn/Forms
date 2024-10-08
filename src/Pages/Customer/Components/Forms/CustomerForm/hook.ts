import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { TabType } from "../../../../../Components/Menus/TabMenu/_types";
import {
  CityType,
  TownshipType,
} from "../../../../../Constants/Location/myanmar.constants";
import {
  PlanType,
  PriceType,
} from "../../../../../Constants/Packages/constants";
import {
  DataCenterTypes,
  DefaultServerErrorType,
  ErrorCenterTypes,
  FieldTypes,
  RefCenterTypes,
  SelectInputTypes,
} from "./_types";
import {
  AccessCodeTypes,
  DEFAULT_ICON_ACCESSES,
  errorValidator,
  fancyValidator,
  formShield,
  IconAccessTypes,
} from "./validation";
import { AvaliableSelectionType } from "../../../../../Components/DropDownBox/SelectDropDown";
import {
  DEFAULT_DATA_CENTER,
  DEFAULT_ERROR_CENTER,
  DEFAULT_REF_CENTER,
  DEFAULT_SELECT_INPUT_CENTER,
  DEFAULT_SERVER_ERRORS,
  FIELDS,
  TABS,
} from "./constants";
import { useAppDispatch } from "../../../../../Hooks/ReduxProvider";
import { modifyState } from "../../../../../Utils/Data/States/state.utils";
import {
  endDateCreator,
  inputAcceptableDate,
} from "../../../../../Utils/Date/date.utils";
import { stateCleaner } from "../../../../../Utils/Data/States/cleaner.utils";
import { arrayToggle } from "../../../../../Utils/Data/array.utils";
import { setError } from "../../../../../Store/slices/error.slice";
import {
  camelCaseToLowerSpace,
  generateRandomName,
  generateRandomSixDigit,
} from "../../../../../Utils/Data/string.utils";
import { validationSchemaGenerator } from "../../../Create/utils";
import {
  isMeaningfulCoordinate,
  isMeaningfulEmail,
  isMeaningfulIP,
  isMeaningfullDuration,
  isMeaningfullMoneyValue,
  isMeaningfulPhoneNumber,
} from "../../../../../Utils/regex.utils";
import { db } from "../../../../../DB/db";
import { CustomerFormType } from ".";
import { useParams } from "react-router-dom";
import { diffJSON } from "../../../../../Utils/Data/jsoncompasser.utils";
import { capitalize } from "lodash";

type HookType = [
  dataCenter: DataCenterTypes,
  errorCenter: ErrorCenterTypes,
  refCenter: RefCenterTypes,
  fields: FieldTypes,

  selectedTab: TabType,
  tabs: TabType[],
  iconAccessCodes: IconAccessTypes,
  iconFailCodes: IconAccessTypes,
  selectInputCenter: SelectInputTypes,
  isSuccess: boolean,
  serverErrors: DefaultServerErrorType,
  loading: boolean,

  /*
    Structures
  */
  childCleaningStructure: { [key: string]: string[] },
  childPassingStructure: {
    [key: string]: (data: Record<string, unknown>) => void;
  },

  /*
    Actions
  */
  handleSelectTab: (tab: TabType) => void,
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void,
  handleSelect: (
    data: Record<string, unknown>,
    dataKey: string,
    dataCenterKey: string
  ) => void,
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void,
  updateDataCenter: (
    key: string,
    value: DataCenterTypes[keyof DataCenterTypes]
  ) => void,
  updateErrorCenter: (
    key: string,
    value: ErrorCenterTypes[keyof ErrorCenterTypes]
  ) => void,
  handleCreateCustomers: () => void,
  handleIsSuccess: (value: boolean) => void,
  resetDataCenter: () => void
];

const Hook = ({ action }: CustomerFormType): HookType => {
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

  const [fields, setFields] = useState<FieldTypes>(FIELDS);
  const [iconAccessCodes, setIconAccessCodes] = useState<IconAccessTypes>(
    DEFAULT_ICON_ACCESSES
  );
  const [iconFailCodes, setIconFailCodes] = useState<IconAccessTypes>(
    DEFAULT_ICON_ACCESSES
  );
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const [serverErrors, setServerErrors] = useState<DefaultServerErrorType>(
    DEFAULT_SERVER_ERRORS
  );
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

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

  const handleIsSuccess = (value: boolean) => {
    setIsSuccess(value);
  };

  const updateFields = (key: string, value: FieldTypes[keyof FieldTypes]) => {
    return modifyState(key, value, setFields);
  };

  const resetDataCenter = () => {
    setDataCenter(DEFAULT_DATA_CENTER);
    setSelectInputCenter(DEFAULT_SELECT_INPUT_CENTER);
    setIconAccessCodes(DEFAULT_ICON_ACCESSES);
    setIconFailCodes(DEFAULT_ICON_ACCESSES);

    setFields(FIELDS);
    setSelectedTab(TABS[0]);
  };

  /*
    CHILD PASSING ACTIONS
  */

  const handleChildOfServiceType = (data: Record<string, unknown>) => {
    const plans = data.plans;
    updateFields("plan", plans as PlanType[]);
  };

  const handleChildOfPlan = (data: Record<string, unknown>) => {
    const planData = data as PlanType;
    const price = planData.price;

    const { label, value } = price[0];
    updateFields("price", price);
    updateDataCenter("price", value.toString());
    updateDataCenter("paymentCurrency", label);

    //Duration
    const durationValue = planData.duration;
    const [durationNumber, durationType] = durationValue.split(" ");
    updateDataCenter("duration", capitalize(durationType) + "s");
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

  const handleChildOfPaymentTypes = (data: Record<string, unknown>) => {
    const { value } = data as PriceType;

    updateDataCenter("price", value.toString());
    updateErrorCenter("price", "");
  };

  const handleChildOfCity = (data: Record<string, unknown>) => {
    const { townships } = data as CityType;
    updateFields("township", townships as TownshipType[]);
  };

  const childPassingStructure = {
    serviceType: handleChildOfServiceType,
    plan: handleChildOfPlan,
    paymentCurrency: handleChildOfPaymentTypes,
    city: handleChildOfCity,
  };

  console.log("dataCenter", dataCenter);

  /*
    CHILD CLEANING ACTIONS
  */

  const childCleaningStructure = {
    customerType: ["companyName"],
    autoGeneratePPOEAccount: ["radUserName", "radPassword"],
    containIP: ["mode", "modeServer", "staticIP"],
    mode: ["staticIP"],
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
      childPassingStructure[
        dataCenterKey as keyof typeof childPassingStructure
      ];

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

  const handleCreateCustomers = async () => {
    try {
      const customers = await db.customers.toArray();
      const customerId =
        customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;
      const activityId = (await db.activities.toArray()).length + 1;

      const { isValidate } = handleNextStep();

      if (!isValidate) {
        dispatch(
          setError({
            isError: true,
            statusCode: 499,
            errorMessage: "Please fill out all the required fields!",
          })
        );
        return;
      }

      setLoading(true);

      const sameServiceID = await db.customers.get({
        serviceID: dataCenter.serviceID,
      });

      if (sameServiceID) {
        dispatch(
          setError({
            isError: true,
            statusCode: 409,
            errorMessage: "Service ID Already exits!",
          })
        );

        setServerErrors((prev) => ({ ...prev, duplicate: true }));

        setSelectedTab(TABS[1]);
        updateErrorCenter("serviceID", "Service ID Already Exists");
        setIconAccessCodes((prev) => ({ ...prev, 2: false }));
        return;
      } else {
        setServerErrors(DEFAULT_SERVER_ERRORS);
      }

      let tmp_data_center = {
        ...dataCenter,
        // duration: `${dataCenter.durationNumber} ${dataCenter.duration}`,
      };

      if (
        tmp_data_center.autoGeneratePPOEAccountServer &&
        action !== "update"
      ) {
        tmp_data_center = {
          ...tmp_data_center,
          radUserName: generateRandomName(),
          radPassword: generateRandomSixDigit(),
        };
      }

      if (action === "update") {
        console.log("Update");
        const response = await db.customers.get({ id: Number(id) });
        console.log("customer", response);
        if (!response || !response.customers)
          return "Console.log No Customer found!";

        await db.customers.put({
          id: Number(id),
          customers: { ...tmp_data_center, id: Number(id) },
          fields: fields,
          selectedInputs: selectInputCenter,
        });

        setIsSuccess(true);
        const updateActivity = diffJSON("Update", response.customers, {
          ...tmp_data_center,
          id: Number(id),
        }) as {
          activityLog: { change: { key: string; from: string; to: string } }[];
          field: string;
        };

        if (updateActivity.activityLog.length <= 0) return "No Changes Found";

        await db.activities.add({
          id: activityId,
          action: "Changes in Customer" + "," + dataCenter.customerName,
          ...updateActivity,
          date: new Date().toString(),
        });
        return;
      }

      await db.customers.add({
        id: customerId,
        customers: { ...tmp_data_center, id: customerId },
        fields: fields,
        selectedInputs: selectInputCenter,
      });

      setIsSuccess(true);

      await db.activities.add({
        id: activityId,
        activityLog: [],
        action: "Created a customer" + "," + dataCenter.customerName,
        field: "Create",
        date: new Date().toString(),
      });
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
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

  /*
    LIFE CIRCLES
  */
  const { duration, durationNumber, serviceStartDate } = dataCenter;
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

  const regexKeys = [
    "staticIP",
    "durationNumber",
    "price",
    "coordinates",
    "phoneNumber",
    "viberNumber",
    "email",
    "mmk",
    "sgd",
    "baht",
  ];

  const regexStructure = {
    staticIP: isMeaningfulIP,
    durationNumber: isMeaningfullDuration,
    price: isMeaningfullMoneyValue,
    coordinates: isMeaningfulCoordinate,
    phoneNumber: isMeaningfulPhoneNumber,
    viberNumber: isMeaningfulPhoneNumber,
    email: isMeaningfulEmail,
    mmk: isMeaningfullMoneyValue,
    sgd: isMeaningfullMoneyValue,
    baht: isMeaningfullMoneyValue,
  };

  useEffect(() => {
    regexKeys.map((key) => {
      regexTesting(key, regexStructure[key as keyof typeof regexStructure]);
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataCenter]);

  //Update circles

  useEffect(() => {
    if (action !== "update") return;

    db.customers.get(Number(id)).then((response) => {
      if (response) {
        const { fields, customers, selectedInputs } = response;

        setDataCenter(customers);
        setFields(fields);
        setSelectInputCenter(selectedInputs);
      }
    });

    //eslint-disable-next-line
  }, []);

  return [
    dataCenter,
    errorCenter,
    refCenter,
    fields,
    selectedTab,
    tabs,

    iconAccessCodes,
    iconFailCodes,
    selectInputCenter,
    isSuccess,
    serverErrors,
    loading,

    /*
      Structures
    */
    childCleaningStructure,
    childPassingStructure,

    /*
      Actions
    */
    handleSelectTab,
    handleOnChange,
    handleSelect,
    handleCheck,
    updateDataCenter,
    updateErrorCenter,
    handleCreateCustomers,
    handleIsSuccess,
    resetDataCenter,
  ];
};

export default Hook;
