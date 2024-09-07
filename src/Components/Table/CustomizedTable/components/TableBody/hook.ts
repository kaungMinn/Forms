import { useMemo } from "react";

// components

import { editTableColumnLength } from "../../utils";
import { TABLE_BODY_PROPS_TYPE, TABLE_BODY_ROW } from "./__type";

type HookType = [
  any,
  /**
   * action
   */
  (col: TABLE_BODY_ROW) => void
];

export function Hook(props: TABLE_BODY_PROPS_TYPE): HookType {
  const { data, numberOfColumn } = props;

  const dataList: any = useMemo(() => {
    const rowList = data.map((d: TABLE_BODY_ROW) => {
      d = {
        ...d,
        visibleCols: editTableColumnLength(d.visibleCols, 0, numberOfColumn),
        invisibleCols: editTableColumnLength(
          d.visibleCols,
          numberOfColumn,
          d.visibleCols.length + d.invisibleCols.length
        ),
      };
      return d;
    });
    return rowList;
  }, [data, numberOfColumn]);

  const handleOnClickMap = (cols: TABLE_BODY_ROW) => {
    cols;
    // const tmpJoinedList = cols.invisibleCols.concat(cols.visibleCols);
    // const lat: number | string =
    //   tmpJoinedList.filter((list) => list.key === "Latitude")[0].value || 0;
    // const lng: number | string =
    //   tmpJoinedList.filter((list) => list.key === "Longitude")[0].value || 0;
    // const nodeId: string =
    //   tmpJoinedList.filter((list) => list.key === "_id")[0].value || "";
    // if (lat && lng && nodeId) {
    //   navigate(MAP_ROUTE, {
    //     state: {
    //       lat: lat,
    //       lng: lng,
    //       nodeID: nodeId,
    //     },
    //   });
    // }
  };

  return [
    dataList,
    /**
     * action
     */
    handleOnClickMap,
  ];
}
