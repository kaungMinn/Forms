import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import { CustomizedDropDownDataTypes } from "./_types";
import HoverWrapper from "../../Wrappers/HoverWrapper";
import React, { useEffect, useState } from "react";
import TertiaryInput from "../../Inputs/TertiaryInput";

const DEFAULT_SEARCHED_VALUE = {
  searchedData: "",
  normalizedSearchedData: "",
};

const ShowData = ({
  dataKey,
  dropDownData,
  theme,
  value,
  hasMultiSelect,
  handleSelect,
}: {
  dataKey: string;
  dropDownData: CustomizedDropDownDataTypes[];
  theme: DefaultThemeTypes;
  value: string;
  hasMultiSelect?: boolean;
  handleSelect: (data: CustomizedDropDownDataTypes, dataKey: string) => void;
}) => {

  const { primaryColor } = theme;
  const [primaryBg] = primaryColor;

  const handleIsSelected = (label: string) => {
    let isSelected = false;
    if (hasMultiSelect) {
      const stringParts = value.split(",");
      isSelected = stringParts.includes(label);
    }
    return isSelected;
  }



  return (
    <>
      {dropDownData.length > 0 ? (
        <div
          className={`space-y-2 p-4 rounded-md ${primaryBg} ${dropDownData.length > 5 && "h-[13rem] overflow-auto"
            }`}
        >
          {dropDownData.map((data, index) => {
            const { label } = data;
            const isSelected = handleIsSelected(label)
            return (
              <div
                key={index}

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
        <div className="flex items-center justify-center caption-font">No Data</div>
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

  const { dashboardColor } = theme;
  const [dashboardBg] = dashboardColor;
  const [searchedValue, setSearchedValue] = useState(DEFAULT_SEARCHED_VALUE);
  const [searchedDropDownData, setSearchDropDownData] = useState([...dropDownData]);
  const handleSearchedValue = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setSearchedValue({
      ...searchedValue,
      [name]: value,
      normalizedSearchedData: value.toLowerCase(),
    });
  };

  useEffect(() => {
    if (!searchedValue.normalizedSearchedData) {
      setSearchDropDownData(dropDownData)
      return
    };
    let tmp_dropdown_data = dropDownData.filter((data) => data.label.toLocaleLowerCase().includes(searchedValue.normalizedSearchedData))

    setSearchDropDownData(tmp_dropdown_data)
  }, [searchedValue])

  return (
    <div className={`border shadow-md p-4 rounded-lg space-y-2 ${dashboardBg}`}>
      {hasSearch && (
        <TertiaryInput
          name="searchedData"
          value={searchedValue.searchedData}
          theme={theme}
          placeHolderText="Search..."
          /* 
          Actions
          */
          onChange={handleSearchedValue}
        />
      )}

      <ShowData
        dropDownData={searchedDropDownData}
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
