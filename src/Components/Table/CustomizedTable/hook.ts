import _, { debounce } from "lodash";
import { useEffect, useState, useMemo } from "react";

// components
import {
  DeleteDataType,
  TABLE_PROPS_TYPE,
  UPDATE_TABLE_DATA_MODAL,
} from "./__type";

import { UPDATED_HEADER_TYPE } from "./components/TableHeader/__type";
import { TABLE_BODY_ROW } from "./components/TableBody/__type";
import { UPDATED_TABLE_DATA } from "./constants";
import { updateColumnBody, updateColumnHeader } from "./utils";
import {
  sortAscendingOrder,
  sortDescendingOrder,
} from "../../../Utils/Data/sortData";
import {
  ASCENDING_ORDER,
  DESCENDING_ORDER,
} from "../../../Constants/sort_types";

type HookType = [
  UPDATE_TABLE_DATA_MODAL,
  DeleteDataType,
  /**
   * action
   */
  (index: number) => void,
  () => void,
  (key: string, sortType: string) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (col?: TABLE_BODY_ROW) => void,
  () => void,
  () => void
];

export function Hook(props: TABLE_PROPS_TYPE): HookType {
  const { Data, LinkList, handleSearching, setSearchedData, handleOnDelete } =
    props;

  const [tableData, setTableData] =
    useState<UPDATE_TABLE_DATA_MODAL>(UPDATED_TABLE_DATA);
  const [deleteData, setDeleteData] = useState<DeleteDataType>({
    isShow: false,
    nodeId: "",
    subNodes: 0,
    id: "",
    nodeType: "",
  });

  /**
   * Life Cycle
   */
  useEffect(() => {
    const updatedHeader: UPDATED_HEADER_TYPE = updateColumnHeader(
      Data.HeadingColumn,
      DESCENDING_ORDER
    );
    const updatedBody: TABLE_BODY_ROW[] = updateColumnBody(
      Data.DataRow,
      Data.HeadingColumn,
      LinkList
    );

    setTableData({
      ...tableData,
      HeadingColumn: updatedHeader,
      DataRow: updatedBody,
      page: Data.page,
      limit: Data.limit,
      count: Data.count,
    });

    return () => setTableData(UPDATED_TABLE_DATA);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data]);

  console.log(tableData);

  const debounceSearchingData = useMemo(() => {
    return debounce(handleSearching, 1000);
  }, [handleSearching]);

  const handleOnClickExpandArrow = (index: number) => {
    let tmp_tableData = _.cloneDeep(tableData);
    const tmp_dataRow = tmp_tableData.DataRow;

    // need to refactor - Austin
    tmp_dataRow[index] = {
      ...tmp_dataRow[index],
      isExpand: !tmp_dataRow[index].isExpand,
    };
    tmp_tableData = {
      ...tmp_tableData,
      DataRow: tmp_dataRow,
    };
    setTableData(tmp_tableData);
  };

  const handleOnClickAllExpand = () => {
    const tmp_tableData = _.cloneDeep(tableData);
    let tmp_headerColumn = tmp_tableData.HeadingColumn;
    const tmp_dataRow = tmp_tableData.DataRow;

    tmp_dataRow.map((row) => (row.isExpand = !row.isExpand));
    tmp_headerColumn = {
      ...tmp_headerColumn,
      isExpandAll: !tmp_headerColumn.isExpandAll,
    };

    setTableData({
      ...tableData,
      HeadingColumn: tmp_headerColumn,
      DataRow: tmp_dataRow,
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

  /**
   * Table all search
   */
  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchedData(value);
    debounceSearchingData(value);
  };

  const clearAllSearch = () => {
    handleSearching("");
    setSearchedData("");
  };

  /**
   * Delete
   */
  const handleDeleteModal = (col?: TABLE_BODY_ROW) => {
    if (!col) {
      setDeleteData({
        ...deleteData,
        isShow: false,
        nodeId: "",
        subNodes: 0,
      });
      return;
    }

    const tmpJoinedList = col.invisibleCols.concat(col.visibleCols);

    const nodeId = tmpJoinedList.filter((list) => list.key === "_id")[0] || "";

    const subNodes =
      tmpJoinedList.filter((list) => list.key === "Sub Nodes")[0] || "";

    setDeleteData({
      ...deleteData,
      isShow: true,
      nodeId: nodeId.value,
      subNodes: subNodes.value,
    });
  };
  const handleDeleteNode = () => {
    handleOnDelete(deleteData.nodeId);
    setDeleteData({
      ...deleteData,
      isShow: false,
      nodeId: "",
      subNodes: 0,
      id: "",
      nodeType: "",
    });
  };

  return [
    tableData,
    deleteData,
    /**
     * action
     */
    handleOnClickExpandArrow,
    handleOnClickAllExpand,
    handleOnChangeSorting,
    handleOnChangeSearch,
    handleDeleteModal,
    clearAllSearch,
    handleDeleteNode,
  ];
}
