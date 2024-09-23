import _ from "lodash";

// components
import { UPDATED_HEADER_TYPE } from "../components/TableHeader/__type";
import { TABLE_BODY_COL, TABLE_BODY_ROW } from "../components/TableBody/__type";
import { FIXED_COLUMN_WIDTH } from "../constants";

export function getColumnSize() {
  return Math.round(window.innerWidth / FIXED_COLUMN_WIDTH);
}

export function updateColumnHeader(
  headerData: any[],
  sortType: string
): UPDATED_HEADER_TYPE {
  const updatedHeader: UPDATED_HEADER_TYPE = {
    isExpandAll: false,
    list: [],
  };

  if (Array.isArray(headerData) && headerData.length <= 0) return updatedHeader;

  headerData.forEach((col: any) => {
    updatedHeader.list.push({
      name: col.name,
      key: col.key,
      hidden: col.key === "_id" ? true : false,
      sortType: sortType,
    });
  });

  return updatedHeader;
}

export function updateColumnBody(
  dataRow: any[],
  headingCol: any[],
  linkList?: { key: string; action: (id: string) => void }[]
): TABLE_BODY_ROW[] {
  let tmpRow: TABLE_BODY_ROW = {
    visibleCols: [],
    invisibleCols: [],
    isExpand: false,
  };
  let tmpCol: TABLE_BODY_COL = {
    key: "",
    value: "",
    isLink: false,
    linkAction: null,
    hidden: false,
  };

  const tmpRowList: TABLE_BODY_ROW[] = dataRow.map((row) => {
    const tmpColList: TABLE_BODY_COL[] = headingCol.map((col) => {
      tmpCol = {
        key: col.key,
        value: row[col.key],
        isLink: linkList?.some((l) => l.key === col.name) || false,
        linkAction: linkList?.map((l) => {
          if (l.key === col.name) {
            return l.action;
          }
          return null;
        })[0],
        hidden: col.key === "_id" ? true : false,
      };
      return tmpCol;
    });
    tmpRow = {
      ...tmpRow,
      visibleCols: tmpColList,
    };
    return tmpRow;
  });
  return tmpRowList;
}

/**
 *
 * @param list - array to edit
 * @param s - start index
 * @param e - end index
 * @returns - array which has edited
 */
export function editTableColumnLength(list: any[], s: number, e: number) {
  let temp_list: any[] = [];
  if (Array.isArray(list) && list.length > 0) {
    temp_list = list.slice(s, e);
  }

  return temp_list;
}

export function getColumnValueByKey(
  colList: {
    key: string;
    value: string | number;
    hidden: boolean;
  }[],
  key: string
): any {
  return colList.filter((vCol) => vCol.key === key)[0].value;
}
