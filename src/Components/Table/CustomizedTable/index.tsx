import React from "react";

//icons
import { RxCross2 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";

// components
import { Hook } from "./hook";
import { TABLE_PROPS_TYPE } from "./__type";

import CustomizedPagination from "./components/CustomizedPagination";

import DeleteBox from "./components/DeleteBox";

import { useWindowResize } from "./Hooks/useWindowResize";
import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";
import { ROW_LIMIT } from "./constants";
import DashboardLoading from "../../Loadings/DashboardLoading";
import SecondaryInput from "../../Inputs/SecondaryInput";
import SuccessBox from "../../ModalBox/SuccessBox";
import DropDownBox from "../../DropDownBox";
import { useAppSelector } from "../../../Hooks/ReduxProvider";

const CustomizedTable: React.FC<TABLE_PROPS_TYPE> = (props) => {
  const [
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
  ] = Hook(props);

  const {
    PageSize,
    PageNumber,
    searchedData,
    settingIconList,
    /**
     *  action
     * */
    handleOnChangePageSize,
    handleOnChangePagination,
    handleUpdateModal,
    handleOnRouteConnection,
    theme,
  } = props;

  const { numberOfColumn } = useWindowResize();
  const { isLoading, isSuccess } = useAppSelector((state) => state.list);

  return (
    <React.Fragment>
      <div className="h-auto w-full space-y-3 pb-3">
        {/* Table Rows Limit && Search */}
        <div className="flex flex-row items-center justify-start space-x-2 laptop:justify-between">
          <div className="basis-2/6 laptop:basis-2/5">
            <SecondaryInput
              type="text"
              id="searchBox"
              name="searchBox"
              value={searchedData}
              placeHolderText="Search ...."
              frontIcon={<BsSearch className="h-auto w-3.5" />}
              backIcon={
                searchedData && (
                  <RxCross2 className="h-auto w-3.5" onClick={clearAllSearch} />
                )
              }
              handleChangeOnInput={handleOnChangeSearch}
              theme={theme}
            />
          </div>
          <div className="laptop:basis-2/5">
            <div className="mt-1 flex items-center justify-end space-x-4">
              {settingIconList}
            </div>
          </div>
        </div>

        {isLoading ? (
          <div>
            <DashboardLoading />
          </div>
        ) : !!tableData.DataRow.length &&
          !!tableData.HeadingColumn.list.length ? (
          <div className="h-auto w-full space-y-2">
            <table className="h-auto w-full table-auto border-collapse overflow-x-hidden shadow">
              <TableHeader
                isExpandAll={tableData.HeadingColumn.isExpandAll}
                data={tableData.HeadingColumn.list}
                numberOfColumn={numberOfColumn}
                /**
                 * action
                 */
                handleClickOnAllExpand={handleOnClickAllExpand}
                handleChangeOnSort={handleOnChangeSorting}
                theme={theme}
              />

              <TableBody
                data={tableData.DataRow}
                numberOfColumn={numberOfColumn}
                /**
                 * action
                 */
                handleClickOnArrow={handleOnClickExpandArrow}
                handleClickOnUpdate={handleUpdateModal}
                handleClickOnDelete={handleDeleteModal}
                theme={theme}
              />
            </table>
            <CustomizedPagination
              PageSizeComponent={
                <div className="w-24">
                  <DropDownBox
                    optionList={ROW_LIMIT}
                    optionKey="value"
                    defaultOption={PageSize}
                    handleChangeOnDropDown={handleOnChangePageSize}
                  />
                </div>
              }
              totalCount={tableData.count}
              totalRowCount={tableData.DataRow.length}
              pageSize={PageSize}
              siblingCount={1}
              currentPage={PageNumber}
              /**
               * action
               */
              onPageChange={handleOnChangePagination}
            />
          </div>
        ) : (
          <div>
            <p className="secondary-font text-center text-default_dark">
              No data!
            </p>
          </div>
        )}
      </div>
      <DeleteBox
        isShow={deleteData.isShow}
        nodeId={deleteData.nodeId}
        subNodes={deleteData.subNodes}
        /**
         * action
         */
        handleClose={handleDeleteModal}
        handleRouteConnection={handleOnRouteConnection}
        handleDeleteNode={handleDeleteNode}
      />
      <SuccessBox
        isOpen={isSuccess}
        titleLabel="Success"
        bodyText="You have deleted node successfully!"
        btnLabel="Continue"
        /**
         * action
         */
        clickOn={() => {
          // dispatch(reset());
          window.location.reload();
        }}
      />
    </React.Fragment>
  );
};

export default CustomizedTable;
