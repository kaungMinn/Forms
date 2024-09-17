import { ChangeEvent } from "react";
import TabMenu from "../../../../../Components/Menus/TabMenu";
import { TabType } from "../../../../../Components/Menus/TabMenu/_types";
import PrimaryWrapper from "../../../../../Components/Wrappers/PrimaryWrapper";
import { DefaultThemeTypes } from "../../../../Theme/_types";
import {
  BILLING_CONTACT_INFORMATION_ID,
  GENERAL_ID,
  NETWORK_AND_BILLING_ID,
} from "../../../constants";
import BillingContactInformation from "./Components/BillingContactInformation";
import General from "./Components/General";
import NetworkAndBilling from "./Components/NetworkAndBilling";
import { CustomizedDropDownDataTypes } from "../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
  SelectInputTypes,
} from "../../../_types";
import { AvaliableSelectionType } from "../../../../../Components/DropDownBox/SelectDropDown";
import { PlanType } from "../../../../../Constants/Packages/constants";
import { TownshipType } from "../../../../../Constants/Location/myanmar.constants";
import { IconAccessTypes } from "./validation";

type CustomerFormTypes = {
  tabs: TabType[];
  selectedTab: TabType;
  theme: DefaultThemeTypes;
  dataCenter: DataCenterTypes;
  errorCenter: ErrorCenterTypes;
  refCenter: RefCenterTypes;
  plans: PlanType[];
  townships: TownshipType[];
  iconAccessCodes: IconAccessTypes;
  iconFailCodes: IconAccessTypes;
  selectInputCenter: SelectInputTypes;
  /* 
    Actions
  */
  handleSelectTab: (tab: TabType) => void;
  handleSelect: (
    data: CustomizedDropDownDataTypes,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  handleCheck: (
    data: AvaliableSelectionType,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  updateDataCenter: (key: string, value: string) => void;
  updateErrorCenter: (key: string, value: string) => void;
};

const CustomerForm = (props: CustomerFormTypes) => {
  const {
    tabs,
    selectedTab,
    theme,
    dataCenter,
    errorCenter,
    refCenter,
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
  } = props;

  return (
    <PrimaryWrapper theme={theme}>
      <div className="space-y-5">
        <TabMenu
          tabs={tabs}
          selectedTab={selectedTab}
          theme={theme}
          iconAccessCodes={iconAccessCodes}
          iconFailCodes={iconFailCodes}
          /*
          Actions
        */
          handleSelectTab={handleSelectTab}
        />

        <div className="">
          {selectedTab.id === GENERAL_ID && (
            <General
              theme={theme}
              dataCenter={dataCenter}
              errorCenter={errorCenter}
              refCenter={refCenter}
              /*
                Actions
              */
              handleOnChange={handleOnChange}
              handleSelect={handleSelect}
              updateDataCenter={updateDataCenter}
              updateErrorCenter={updateErrorCenter}
            />
          )}

          {selectedTab.id === NETWORK_AND_BILLING_ID && (
            <NetworkAndBilling
              theme={theme}
              dataCenter={dataCenter}
              errorCenter={errorCenter}
              refCenter={refCenter}
              plans={plans}
              /*
                Actions
              */
              handleOnChange={handleOnChange}
              handleSelect={handleSelect}
              updateDataCenter={updateDataCenter}
              updateErrorCenter={updateErrorCenter}
            />
          )}
          {selectedTab.id === BILLING_CONTACT_INFORMATION_ID && (
            <BillingContactInformation
              theme={theme}
              dataCenter={dataCenter}
              errorCenter={errorCenter}
              refCenter={refCenter}
              townships={townships}
              selectInputCenter={selectInputCenter}
              /*
                Actions
              */
              handleOnChange={handleOnChange}
              handleSelect={handleSelect}
              handleCheck={handleCheck}
              updateDataCenter={updateDataCenter}
              updateErrorCenter={updateErrorCenter}
            />
          )}
        </div>
      </div>
    </PrimaryWrapper>
  );
};

export default CustomerForm;
