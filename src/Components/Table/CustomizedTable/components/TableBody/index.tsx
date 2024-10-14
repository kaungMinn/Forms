import React from "react";

// icons
import { AiTwotoneEdit } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";

// components
import { ExpandDataBoxType, TABLE_BODY_PROPS_TYPE } from "./__type";
import { Hook } from "./hook";
import Tooltip from "../../../../Tooltip";

// import NoDataFound from "../NoDataFound";

/** It's only use for splitter card - refactor */
const TableDataComponent = ({
  data,
  isLink,
  linkAction,
}: {
  data: any;
  isLink?: boolean;
  linkAction: () => void | null;
}) => {
  const DataComponent = () => {
    if (isLink && linkAction) {
      return (
        <p
          className="secondary-font cursor-pointer text-center font-normal text-blue-500 underline laptop:group-hover:text-default"
          /**
           * action
           */
          onClick={() => linkAction()}
        >
          {data ? data : "----"}
        </p>
      );
    }

    return (
      <p className="secondary-font text-center font-normal text-base_light laptop:group-hover:text-default">
        {data ? data : "-----"}
      </p>
    );
  };

  return <DataComponent />;
};

export const ExpandDataBox = (props: ExpandDataBoxType) => {
  const { invisibleColsList = [], numberOfColumn } = props;

  return (
    <React.Fragment>
      {invisibleColsList.length > 0 ? (
        invisibleColsList.map((invCol: any) => (
          <tr key={invCol.key} className="border">
            <td colSpan={numberOfColumn + 2} className="bg-default">
              <div className="grid grid-cols-5">
                <div className="col-span-2 border-r px-5 py-2 tablet:col-span-1">
                  <p className="caption-font text-center font-medium text-default_dark">
                    {invCol.name}
                  </p>
                </div>
                <div className="col-span-3 border-l px-5 py-1.5 tablet:col-span-2">
                  <TableDataComponent
                    data={invCol.value}
                    isLink={invCol.isLink}
                    linkAction={invCol.linkAction}
                  />
                </div>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={numberOfColumn + 2}
            className="bg-default py-5 text-slate-400"
          >
            <p className="caption-font text-center">No data!</p>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};

const TableBody: React.FC<TABLE_BODY_PROPS_TYPE> = (props) => {
  const {
    numberOfColumn,
    /**
     * action
     */
    handleClickOnArrow,
    handleClickOnUpdate,
    handleClickOnDelete,
    theme,
  } = props;

  const [
    dataList,
    /**
     * action
     */
  ] = Hook(props);
  const { tableColor, primaryColor } = theme;
  const [odd, even, hover] = tableColor;

  const selectedBg = primaryColor[2];
  const selectedText = primaryColor[3];
  return (
    <tbody>
      {dataList.map((col: any, index: any) => (
        <React.Fragment key={index}>
          <tr
            className={`group border-b border-default_light  duration-200 odd:bg-default even:bg-default_light  ${odd} ${even} ${hover}`}
          >
            <td className={`  border-gray-500 ${selectedBg} ${selectedText}`}>
              <BiChevronRight
                className={`mx-auto h-auto w-5 cursor-pointer   ${
                  col.isExpand ? "rotate-90" : "rotate-0"
                } duration-200 `}
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
                    <td key={vCol.key} className="overflow-x-auto px-2 py-3">
                      <TableDataComponent
                        data={vCol.value}
                        isLink={vCol.isLink}
                        linkAction={() =>
                          vCol.linkAction(col.visibleCols[0].value)
                        }
                      />
                    </td>
                  )
              )}
            <td>
              <div className="flex items-center justify-center space-x-3 px-2">
                <Tooltip position="top" tooltipLabel="edit node">
                  <AiTwotoneEdit
                    className="h-auto w-4 text-success duration-200 laptop:cursor-pointer laptop:hover:rotate-12 laptop:group-hover:text-default"
                    /**
                     * action
                     */
                    onClick={() =>
                      handleClickOnUpdate(col.visibleCols[0].value)
                    }
                  />
                </Tooltip>

                <div className="h-6 w-px bg-default_dark bg-opacity-60" />

                <Tooltip position="top" tooltipLabel="delete node">
                  <TbTrash
                    className="h-auto w-4 text-danger duration-200 laptop:cursor-pointer laptop:hover:rotate-12 laptop:group-hover:text-default"
                    /**
                     * action
                     */
                    onClick={() => handleClickOnDelete(col)}
                  />
                </Tooltip>
              </div>
            </td>
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
