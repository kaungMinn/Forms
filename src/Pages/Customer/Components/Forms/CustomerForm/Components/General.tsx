import { ChangeEvent, useRef } from "react";
import CustomizedDropDown from "../../../../../../Components/DropDownBox/CustomizedDropDown";
import { CustomizedDropDownDataTypes } from "../../../../../../Components/DropDownBox/CustomizedDropDown/_types";
import { DefaultThemeTypes } from "../../../../../Theme/_types";
import {
  DataCenterTypes,
  ErrorCenterTypes,
  RefCenterTypes,
} from "../../../../Create/_types";
import { PACKAGES } from "../../../../../../Constants/Packages/constants";
import PrimaryInput from "../../../../../../Components/Inputs/PrimaryInput";

type GeneralType = {
  dataCenter: DataCenterTypes;
  errorCenter: ErrorCenterTypes;
  refCenter: RefCenterTypes;
  theme: DefaultThemeTypes;
  /*
    Actions
  */
  handleSelect: (
    data: CustomizedDropDownDataTypes,
    dataKey: string,
    dataCenterKey: string
  ) => void;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
};

const General = (props: GeneralType) => {
  const { dataCenter, theme, handleOnChange, handleSelect } = props;

  const containerRef = useRef<any>(null);

  return (
    <div
      className="grid grid-cols-1 laptop:grid-cols-2 gap-x-5 "
      ref={containerRef}
    >
      <CustomizedDropDown
        label="Brand Name"
        theme={theme}
        value={dataCenter.brandName || "Select a brand name"}
        dropDownData={PACKAGES}
        dataKey="label"
        dataCenterKey="brandName"
        handleSelect={handleSelect}
        containerRef={containerRef}
      />

      <PrimaryInput
        labelText="Customer Name"
        type="text"
        name="customerName"
        value={dataCenter.customerName}
        placeHolderText="Enter customer name"
        theme={theme}
        handleChangeOnInput={handleOnChange}
      />

      <CustomizedDropDown
        label="Customer Type"
        theme={theme}
        value={dataCenter.customerType || "Select a brand name"}
        dropDownData={PACKAGES}
        dataKey="label"
        dataCenterKey="customerType"
        secondaryDataKey="value"
        secondaryDataCenterKey="customerTypeServer"
        handleSelect={handleSelect}
        containerRef={containerRef}
      />
    </div>
  );
};

export default General;
