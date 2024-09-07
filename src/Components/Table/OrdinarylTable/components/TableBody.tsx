import React, { useMemo } from "react";

// components
import { TABLE_BODY_ROW } from "Components/Table/CustomizedTable/components/TableBody/__type";
import { editTableColumnLength } from "Components/Table/CustomizedTable/utils";
import { BiChevronRight } from "react-icons/bi";
import { ExpandDataBox } from "Components/Table/CustomizedTable/components/TableBody";

type TableBodyType = {
  data: TABLE_BODY_ROW[];
  numberOfColumn: number;
  /**
   * action
   */
  handleClickOnArrow: (index: number) => void;
};

const TableBody: React.FC<TableBodyType> = (props) => {
  const {
    data,
    numberOfColumn,
    /**
     * action
     */
    handleClickOnArrow,
  } = props;

  const dataList: TABLE_BODY_ROW[] = useMemo(() => {
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

  return (
    <tbody>
      {dataList.map((col: TABLE_BODY_ROW, index: number) => (
        <React.Fragment key={index}>
          <tr className="group border-b border-default_light  duration-300 odd:bg-default even:bg-default_light laptop:hover:bg-primary">
            <td>
              <BiChevronRight
                className={`mx-auto h-auto w-5 cursor-pointer text-base_light laptop:group-hover:text-default ${
                  col.isExpand ? "rotate-90" : "rotate-0"
                } duration-200`}
                /**
                 * action
                 */
                onClick={() => handleClickOnArrow(index)}
              />
            </td>
            {col.visibleCols.length > 0 &&
              col.visibleCols.map(
                (vCol: any) =>
                  !vCol.hidden && (
                    <td key={vCol.key} className="px-2 py-3">
                      <p className="secondary-font text-center font-normal text-base_light laptop:group-hover:text-default">
                        {vCol.value ? vCol.value : "-----"}
                      </p>
                      {/* <TableDataComponent data={vCol.value} /> */}
                    </td>
                  )
              )}
          </tr>
          {col.isExpand && col.invisibleCols.length > 0 && (
            <ExpandDataBox
              invisibleColsList={col.invisibleCols}
              numberOfColumn={numberOfColumn}
            />
          )}
        </React.Fragment>
      ))}
    </tbody>
  );
};

export default TableBody;
