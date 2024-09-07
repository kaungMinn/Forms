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

type HeaderColumnType = {
  headerData: COLUMN_HEADER_TYPE;
  /**
   * action
   */
  onChangeSort: (key: string, sortType: string) => void;
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
  } = props;

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
    <th className="bg-transparent px-2 py-4">
      <div className="flex justify-center space-x-1 text-primary">
        <p className="caption-font text-center font-semibold ">
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
  } = props;

  const headerList: COLUMN_HEADER_TYPE[] = useMemo(
    () => editTableColumnLength(data, 0, numberOfColumn),
    [data, numberOfColumn]
  );

  if (headerList.length <= 0) return <></>;

  return (
    <React.Fragment>
      <thead>
        <tr>
          <th className="px-2">
            <BiChevronsRight
              className={`mx-auto h-auto w-5 cursor-pointer text-primary ${
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
            />
          ))}
          <th className="px-2">
            <p className="caption-font text-center font-semibold text-primary">
              Action
            </p>
          </th>
        </tr>
      </thead>
    </React.Fragment>
  );
};

export default TableHeader;
