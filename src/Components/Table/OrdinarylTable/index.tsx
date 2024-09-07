import React from "react";
import { TABLE_PROPS_TYPE } from "../CustomizedTable/__type";
import { Hook } from "./hook";
import TableHeader from "./components/TableHeader";
import { useWindowResize } from "../CustomizedTable/Hooks/useWindowResize";
import TableBody from "./components/TableBody";
import DropDownBox from "Components/DropDownBox";
import { ROW_LIMIT } from "../CustomizedTable/constants";
import PrimaryLoading from "Components/Loading/PrimaryLoading";
import CustomizedPagination from "../CustomizedTable/components/CustomizedPagination";
import SecondaryInput from "Components/Inputs/SecondaryInput";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export type OrdinaryTablePropsType = Omit<
  TABLE_PROPS_TYPE,
  | "searchedData"
  | "setSearchedData"
  | "handleUpdateModal"
  | "handleOnRouteConnection"
  | "handleOnDelete"
  | "settingIconList"
  | "handleOnRoutInstallation"
>;

const OrdinaryTable: React.FC<OrdinaryTablePropsType> = (props) => {
  const { IsLoading } = props;

  const {
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
  } = Hook(props);

  const { numberOfColumn } = useWindowResize();

  return (
    <React.Fragment>
      <div className="space-y-3 pb-3">
        <div className="grid grid-cols-3 gap-x-2">
          {/* <div className="col-span-1 flex items-center">
            <p className="caption-font text-default_dark"> Row per page : </p>
            <div className="w-24">
              
            </div>
          </div> */}
          <div className="col-span-1">
            <SecondaryInput
              type="text"
              id="searchBox"
              name="searchBox"
              value={searchedData}
              placeHolderText="Search ...."
              frontIcon={<BsSearch className="h-auto w-3.5 " />}
              backIcon={
                searchedData && (
                  <RxCross2
                    className="h-auto w-3.5"
                    /**
                     * action
                     */
                    onClick={clearSearching}
                  />
                )
              }
              /**
               * action
               */
              handleChangeOnInput={handleOnChangeSearch}
            />
          </div>
          <div className="col-span-1"></div>
        </div>

        {IsLoading ? (
          <div className="pt-10">
            <PrimaryLoading />
          </div>
        ) : !!tableData.DataRow.length &&
          !!tableData.HeadingColumn.list.length ? (
          <div className="space-y-3">
            <table className="h-auto w-full table-auto border-collapse border shadow-sm">
              <TableHeader
                isExpandAll={tableData.HeadingColumn.isExpandAll}
                data={tableData.HeadingColumn.list}
                numberOfColumn={numberOfColumn}
                /**
                 * action
                 */
                handleClickOnAllExpand={handleOnClickAllExpand}
                handleChangeOnSort={handleOnChangeSorting}
              />
              <TableBody
                data={tableData.DataRow}
                numberOfColumn={numberOfColumn}
                /**
                 * action
                 */
                handleClickOnArrow={handleOnClickExpandArrow}
              />
            </table>
            <CustomizedPagination
              PageSizeComponent={
                <div className="w-24">
                  <DropDownBox
                    optionList={ROW_LIMIT}
                    optionKey="value"
                    defaultOption={currentPageSize}
                    /**
                     * action
                     */
                    handleChangeOnDropDown={handleChangeOnPageSize}
                  />
                </div>
              }
              totalCount={tableData.count}
              totalRowCount={tableData.DataRow.length}
              pageSize={currentPageSize}
              currentPage={currentPageNo}
              /**
               *
               */
              onPageChange={handleChangeOnPageNumber}
            />
          </div>
        ) : (
          <div className="secondary-font mt-10 flex h-full w-full justify-center text-default_dark">
            No data
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default OrdinaryTable;
