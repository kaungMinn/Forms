import { useEffect, useMemo, useState } from "react";
import _, { debounce } from "lodash";
// components
import { OrdinaryTablePropsType } from ".";
import { UPDATE_TABLE_DATA_MODAL } from "../CustomizedTable/__type";
import { UPDATED_HEADER_TYPE } from "../CustomizedTable/components/TableHeader/__type";
import { updateColumnBody, updateColumnHeader } from "../CustomizedTable/utils";
import { ASCENDING_ORDER, DESCENDING_ORDER } from "Constants/sort_types";
import { TABLE_BODY_ROW } from "../CustomizedTable/components/TableBody/__type";
import { ROW_LIMIT, UPDATED_TABLE_DATA } from "../CustomizedTable/constants";
import { sortAscendingOrder, sortDescendingOrder } from "Utils/sortData";

const DEFAULT_PAGE_NO: number = 1;

type HookType = {
  tableData: UPDATE_TABLE_DATA_MODAL;
  currentPageSize: number;
  currentPageNo: number;
  searchedData: string;
  /**
   * action
   */
  handleOnClickExpandArrow: (index: number) => void;
  handleOnClickAllExpand: () => void;
  handleOnChangeSorting: (key: string, sortType: string) => void;
  handleChangeOnPageSize: (pageSize: { id: number; value: number }) => void;
  handleChangeOnPageNumber: (pageNo: number) => void;
  handleOnChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearching: () => void;
};

export function Hook(props: OrdinaryTablePropsType): HookType {
  const {
    Data,
    /**
     * action
     */
    handleOnChangePageSize,
    handleOnChangePagination,
    handleSearching,
  } = props;

  const [tableData, setTableData] =
    useState<UPDATE_TABLE_DATA_MODAL>(UPDATED_TABLE_DATA);
  const [currentPageSize, setCurrentPageSize] = useState<number>(
    ROW_LIMIT[0].value
  );
  const [currentPageNo, setCurrentPageNo] = useState<number>(DEFAULT_PAGE_NO);
  const [searchedData, setSearchedData] = useState<string>("");

  useEffect(() => {
    if (!Array.isArray(Data.HeadingColumn) && !Array.isArray(Data.DataRow))
      return;

    const updateHeader: UPDATED_HEADER_TYPE = updateColumnHeader(
      Data.HeadingColumn,
      DESCENDING_ORDER
    );
    const updateBody: TABLE_BODY_ROW[] = updateColumnBody(
      Data.DataRow,
      Data.HeadingColumn
    );

    setTableData({
      ...tableData,
      HeadingColumn: updateHeader,
      DataRow: updateBody,
      page: Data.page,
      limit: Data.limit,
      count: Data.count,
    });

    return () => setTableData(UPDATED_TABLE_DATA);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data]);

  const debounceSearchingData = useMemo(() => {
    return debounce(handleSearching, 1000);
  }, [handleSearching]);

  const handleOnClickExpandArrow = (index: number) => {
    let tmpTableData = _.cloneDeep(tableData);
    let tmpDataRow = tmpTableData.DataRow;

    tmpDataRow[index] = {
      ...tmpDataRow[index],
      isExpand: !tmpDataRow[index].isExpand,
    };
    tmpTableData = {
      ...tmpTableData,
      DataRow: tmpDataRow,
    };
    setTableData(tmpTableData);
  };

  const handleOnClickAllExpand = () => {
    let tmpTableData = _.cloneDeep(tableData);
    let tmpHeaderColumn = tmpTableData.HeadingColumn;
    let tmpDataRow = tmpTableData.DataRow;

    tmpDataRow.map((row) => {
      if (tmpHeaderColumn.isExpandAll) {
        row.isExpand = false;
        return null;
      }
      if (!tmpHeaderColumn.isExpandAll) {
        row.isExpand = true;
        return null;
      }
      return null;
    });
    tmpHeaderColumn = {
      ...tmpHeaderColumn,
      isExpandAll: !tmpHeaderColumn.isExpandAll,
    };
    setTableData({
      ...tableData,
      HeadingColumn: tmpHeaderColumn,
      DataRow: tmpDataRow,
    });
  };

  /**
   *
   * @param key - column header name
   * @param sortType - sorting types - descending or ascending - Austin
   */
  const handleOnChangeSorting = (key: string, sortType: string) => {
    let tmpTableData = { ...Data };
    let dataRow = [...Data.DataRow];

    let tmpSortType: string;

    if (sortType === ASCENDING_ORDER) {
      dataRow = sortAscendingOrder(dataRow, key);
      tmpSortType = DESCENDING_ORDER;
    } else {
      dataRow = sortDescendingOrder(dataRow, key);
      tmpSortType = ASCENDING_ORDER;
    }
    tmpTableData = {
      ...tmpTableData,
      HeadingColumn: updateColumnHeader(Data.HeadingColumn, tmpSortType),
      DataRow: updateColumnBody(dataRow, Data.HeadingColumn),
    };

    setTableData(tmpTableData);
  };

  const handleChangeOnPageSize = (pageSize: { id: number; value: number }) => {
    if (currentPageSize === pageSize.value) return;

    handleOnChangePageSize(pageSize, DEFAULT_PAGE_NO);
    setCurrentPageSize(pageSize.value);
    setCurrentPageNo(DEFAULT_PAGE_NO);
  };

  const handleChangeOnPageNumber = (pageNo: number) => {
    handleOnChangePagination(pageNo);
    setCurrentPageNo(pageNo);
  };

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchedData(value);
    debounceSearchingData(value);
  };

  const clearSearching = () => {
    setSearchedData("");
    debounceSearchingData("");
  };

  return {
    tableData,
    currentPageSize,
    currentPageNo,
    searchedData,
    /**
     * action
     */
    handleOnClickExpandArrow,
    handleOnClickAllExpand,
    handleOnChangeSorting,
    handleChangeOnPageSize,
    handleChangeOnPageNumber,
    handleOnChangeSearch,
    clearSearching,
  };
}
