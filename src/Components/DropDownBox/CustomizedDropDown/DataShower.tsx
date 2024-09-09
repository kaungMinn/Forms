import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import { CustomizedDropDownDataTypes } from "./_types";
import HoverWrapper from "../../Wrappers/HoverWrapper";
import React, { useState } from "react";
import TertiaryInput from "../../Inputs/TertiaryInput";
import { canBeSplit } from "../../../Utils/Data/string.utils";
import { TiTick } from "react-icons/ti";

const DEFAULT_SEARCHED_VALUE = {
  searchedData: "",
  normalizedSearchedData: "",
};

const ShowData = ({
  dataKey,
  dropDownData,
  searchedValue,
  theme,
  value,
  hasMultiSelect,
  handleSelect,
}: {
  dataKey: string;
  dropDownData: CustomizedDropDownDataTypes[];
  searchedValue: typeof DEFAULT_SEARCHED_VALUE;
  theme: DefaultThemeTypes;
  value: string;
  hasMultiSelect?: boolean;
  handleSelect: (data: CustomizedDropDownDataTypes, dataKey: string) => void;
}) => {
  return (
    <>
      {dropDownData.length > 0 ? (
        <div
          className={`space-y-2 bg-red-200 p-4 rounded-md ${
            dropDownData.length > 5 && "h-[13rem] overflow-auto"
          }`}
        >
          {dropDownData.map((data, index) => {
            const { label } = data;
            const selectedValue =
              data[dataKey as keyof CustomizedDropDownDataTypes];
            let isSelected = false;
            if (hasMultiSelect) {
              const stringParts = value.split(",");
              isSelected = stringParts.includes(label);
              console.log(stringParts);
              console.log(isSelected);
              console.log(label);
            }

            return (
              <div
                key={index}
                className={`${
                  typeof selectedValue === "string" &&
                  selectedValue
                    .toLowerCase()
                    .includes(searchedValue.normalizedSearchedData)
                    ? "block"
                    : "hidden"
                }`}
                onClick={() => handleSelect(data, dataKey)}
              >
                <HoverWrapper
                  theme={theme}
                  isSelected={
                    value.toLowerCase() === label.toLowerCase() || isSelected
                  }
                >
                  <div className="caption-font p-2">
                    <p>{label}</p>
                  </div>
                </HoverWrapper>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center">No Data</div>
      )}
    </>
  );
};

type DataShowerType = {
  hasSearch?: boolean;
  dropDownData: CustomizedDropDownDataTypes[];
  theme: DefaultThemeTypes;
  value?: string;
  dataKey?: string;
  handleSelect: (data: CustomizedDropDownDataTypes, dataKey: string) => void;
  hasMultiSelect?: boolean;
};

const DataShower = (props: DataShowerType) => {
  const {
    hasSearch = false,
    dropDownData = [],
    theme,
    value = "",
    dataKey = "",
    hasMultiSelect,
    handleSelect,
  } = props;

  const [searchedValue, setSearchedValue] = useState(DEFAULT_SEARCHED_VALUE);
  const handleSearchedValue = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setSearchedValue({
      ...searchedValue,
      [name]: value,
      normalizedSearchedData: value.toLowerCase(),
    });
  };

  return (
    <div className="border p-4 rounded-lg space-y-2">
      {hasSearch && (
        <TertiaryInput
          name="searchedData"
          value={searchedValue.searchedData}
          theme={theme}
          /* 
          Actions
          */
          onChange={handleSearchedValue}
        />
      )}

      <ShowData
        dropDownData={dropDownData}
        searchedValue={searchedValue}
        dataKey={dataKey}
        theme={theme}
        value={value}
        hasMultiSelect={hasMultiSelect}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default DataShower;
