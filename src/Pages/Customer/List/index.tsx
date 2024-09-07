import { useCallback, useEffect, useState } from "react";
import CustomizedTable from "../../../Components/Table/CustomizedTable";
import { body, headers } from "./constants";
import { useAppSelector } from "../../../Hooks/ReduxProvider";

const CustomerList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentData, setCurrentData] = useState<typeof body>([]);

  const { dashboardColor } = useAppSelector((state) => state.theme);
  const [dashboardBg, dashboardText] = dashboardColor;
  // Calculate the indices for slicing the data

  // Change page by number
  const handleChangeOnPagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const dataHandlerForPagination = useCallback(() => {
    const indexOfLastItem = currentPage * dataPerPage;
    const indexOfFirstItem = indexOfLastItem - dataPerPage;
    const currentData = body.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentData(currentData);
  }, [currentPage, dataPerPage]);

  useEffect(() => {
    dataHandlerForPagination();
  }, [dataHandlerForPagination]);

  const handleChangeOnPageSize = (pageSize: { id: number; value: number }) => {
    const { value } = pageSize;
    setDataPerPage(value);
  };

  return (
    <div className={`${dashboardBg} ${dashboardText}`}>
      <h1 className="heading-font space-y-2">
        <p>Customers</p>
        <p className="secondary-font">Manage your customers</p>
      </h1>
      <CustomizedTable
        IsLoading={false}
        Data={{
          HeadingColumn: headers,
          DataRow: currentData,
          page: currentPage,
          limit: dataPerPage,
          count: body.length,
        }}
        PageSize={dataPerPage}
        PageNumber={currentPage}
        searchedData=""
        settingIconList={<></>}
        handleOnChangePageSize={handleChangeOnPageSize}
        handleOnChangePagination={handleChangeOnPagination}
        handleSearching={() => {
          "test";
        }}
        handleUpdateModal={() => {
          "test";
        }}
        handleOnRouteConnection={() => {
          "test";
        }}
        handleOnDelete={() => {
          "test";
        }}
        setSearchedData={() => {
          "test";
        }}
      />
    </div>
  );
};

export default CustomerList;
