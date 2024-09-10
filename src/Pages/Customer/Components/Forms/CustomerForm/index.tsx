import { ChangeEvent, useCallback, useState } from "react";
import TabMenu from "../../../../../Components/Menus/TabMenu";
import { TabType } from "../../../../../Components/Menus/TabMenu/_types";
import PrimaryWrapper from "../../../../../Components/Wrappers/PrimaryWrapper";
import { DefaultThemeTypes } from "../../../../Theme/_types";
import {
  BILLING_CONTACT_INFORMATION_ID,
  GENERAL_ID,
  NETWORK_AND_BILLING_ID,
} from "../../../Create/constants";
import BillingContactInformation from "./Components/BillingContactInformation";
import General from "./Components/General";
import NetworkAndBilling from "./Components/NetworkAndBilling";
import { CustomizedDropDownDataTypes } from "../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import { DataCenterTypes, ErrorCenterTypes, RefCenterTypes } from "../../../Create/_types";

type CustomerFormTypes = {
  tabs: TabType[];
  selectedTab: TabType;
  theme: DefaultThemeTypes;
  dataCenter: DataCenterTypes;
  errorCenter: ErrorCenterTypes;
  refCenter: RefCenterTypes;
  /* 
    Actions
  */
  handleSelectTab: (tab: TabType) => void;
  handleSelect: (data: CustomizedDropDownDataTypes, dataKey: string, dataCenterKey: string) => void;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
};

const CustomerForm = (props: CustomerFormTypes) => {
  const { tabs, selectedTab, theme, handleSelectTab, dataCenter, errorCenter, refCenter, handleOnChange, handleSelect } = props;
  const DEFAULT_TAB_COMPONENTS = {
    [GENERAL_ID]: <General theme={theme} dataCenter={dataCenter} errorCenter={errorCenter} refCenter={refCenter} handleOnChange={handleOnChange} handleSelect={handleSelect} />,
    [NETWORK_AND_BILLING_ID]: <NetworkAndBilling />,
    [BILLING_CONTACT_INFORMATION_ID]: <BillingContactInformation />,
  };

  const [tabComponents] = useState(DEFAULT_TAB_COMPONENTS);
  const handleTabComponents = useCallback(() => {
    const Component =
      tabComponents[selectedTab.id as keyof typeof tabComponents];
    return Component ? Component : null;
  }, [selectedTab, tabComponents]);

  return (
    <PrimaryWrapper theme={theme}>
      <div className="space-y-5">
        <TabMenu
          tabs={tabs}
          selectedTab={selectedTab}
          theme={theme}
          /*
          Actions
        */
          handleSelectTab={handleSelectTab}
        />
        <>{handleTabComponents()}</>
      </div>
    </PrimaryWrapper>
  );
};

export default CustomerForm;
