import React, { useMemo } from "react";

// images
import { BiChevronsRight, BiSortDown, BiSortUp } from "react-icons/bi";

// components
import { TABLE_HEADER_PROP_TYPE, COLUMN_HEADER_TYPE } from "./__type";
import {
  ASCENDING_ORDER,
  DESCENDING_ORDER,
} from "../../../../../Constants/sort_types";
import { editTableColumnLength } from "../../utils";
import { DefaultThemeTypes } from "../../../../../Pages/Theme/_types";

type HeaderColumnType = {
  headerData: COLUMN_HEADER_TYPE;
  /**
   * action
   */
  onChangeSort: (key: string, sortType: string) => void;
  theme: DefaultThemeTypes;
};

export const HeaderColumn: React.FC<HeaderColumnType> = (
  props
): React.ReactElement | null => {
  const {
    headerData,
    /**
     * action
     */
    onChangeSort,
    theme,
  } = props;

  const { primaryColor } = theme;

  const selectedBg = primaryColor[2];
  const selectedText = primaryColor[3];

  const SortIcon = () => {
    if (headerData.sortType === DESCENDING_ORDER) {
      return (
        <BiSortDown
          className="h-auto w-4 cursor-pointer duration-300"
          onClick={() => onChangeSort(headerData.key, headerData.sortType)}
        />
      );
    }
    if (headerData.sortType === ASCENDING_ORDER) {
      return (
        <BiSortUp
          className="h-auto w-4 cursor-pointer duration-300"
          onClick={() => onChangeSort(headerData.key, headerData.sortType)}
        />
      );
    }
    return null;
  };

  if (headerData.hidden) return null;

  return (
    <th className={` px-2 py-4  ${selectedBg} ${selectedText}`}>
      <div className="flex justify-center space-x-1">
        <p className="caption-font text-center font-semibold">
          {headerData.name}
        </p>
        <SortIcon />
      </div>
    </th>
  );
};

const TableHeader: React.FC<TABLE_HEADER_PROP_TYPE> = (props) => {
  const {
    data,
    isExpandAll,
    numberOfColumn,
    /**
     * action
     */
    handleClickOnAllExpand,
    handleChangeOnSort,
    theme,
  } = props;

  const headerList: COLUMN_HEADER_TYPE[] = useMemo(
    () => editTableColumnLength(data, 0, numberOfColumn),
    [data, numberOfColumn]
  );

  if (headerList.length <= 0) return <></>;
  const { primaryColor } = theme;

  const selectedBg = primaryColor[2];
  const selectedText = primaryColor[3];
  return (
    <React.Fragment>
      <thead className="">
        <tr className="rounded-md ">
          <th className={`px-2 rounded-tl-md  ${selectedBg} ${selectedText}`}>
            <BiChevronsRight
              className={`mx-auto h-auto w-5 cursor-pointer  ${
                isExpandAll ? "rotate-90" : "rotate-0"
              } duration-200`}
              /**
               * action
               * */
              onClick={() => handleClickOnAllExpand()}
            />
          </th>
          {headerList.map((header: COLUMN_HEADER_TYPE) => (
            <HeaderColumn
              key={header.key}
              headerData={header}
              /**
               * action
               */
              onChangeSort={handleChangeOnSort}
              theme={theme}
            />
          ))}
          <th className={`px-2 rounded-tr-md  ${selectedBg} ${selectedText}`}>
            <p className="caption-font text-center ">Action</p>
          </th>
        </tr>
      </thead>
    </React.Fragment>
  );
};

export default TableHeader;
