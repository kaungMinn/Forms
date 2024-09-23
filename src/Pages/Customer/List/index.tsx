import { useCallback, useEffect, useState } from "react";
import CustomizedTable from "../../../Components/Table/CustomizedTable";
import { DEFAULT_INPUT_DATA, headers } from "./constants";
import { useAppSelector } from "../../../Hooks/ReduxProvider";
import Heading from "../../../Components/Labels/Heading";
import { db } from "../../../DB/db";
import { Customer } from "../../../DB/_types";
import DataLoading from "../../../Components/Loadings/DataLoading";
import SuccessBox from "../../../Components/ModalBox/SuccessBox";
import Filters from "../../../Filters";
import Hook from "./hook";

const CustomerList = () => {
  const [
    dataCenter,
    errorCenter,
    refCenter,
    fields,
    /*
      Structures
    */
    childPassingStructure,
    childCleaningStructure,
    /*
      Actions
    */
    updateDataCenter,
    updateErrorCenter,
    handleResetDataCenter,
  ] = Hook();

  const [body, setBody] = useState<Customer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentData, setCurrentData] = useState<typeof body>([]);
  const [loading, setLoading] = useState(false);
  const theme = useAppSelector((state) => state.theme);
  const { dashboardColor } = theme;
  const [dashboardBg, dashboardText] = dashboardColor;
  const [searchData, setSearchedData] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const handleIsSuccess = (value: boolean) => {
    setIsSuccess(value);
  };

  const handleSearching = useCallback(async (value: string) => {
    try {
      const data = await db.customers
        .filter((customer) => {
          return (
            customer.customerName.toLowerCase().includes(value.toLowerCase()) ||
            customer.serviceID.toLowerCase().includes(value.toLowerCase())
          );
        })
        .toArray();

      setBody(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

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
  }, [currentPage, dataPerPage, body]);

  useEffect(() => {
    dataHandlerForPagination();
  }, [dataHandlerForPagination]);

  const handleChangeOnPageSize = (pageSize: { id: number; value: number }) => {
    const { value } = pageSize;
    setDataPerPage(value);
  };

  const handleGetBodyData = async () => {
    setLoading(true);
    try {
      const response = await db.customers.orderBy("id").reverse().toArray();
      setBody(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBodyData = async (id: number | string | boolean) => {
    if (typeof id !== "number") return;
    try {
      await db.customers.delete(id);
      handleGetBodyData();
      handleIsSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetBodyData();
  }, []);

  const handleFilterData = async () => {
    try {
      const { serviceType, plan, city, township, startDate, endDate } =
        dataCenter;
      const results = await db.customers
        .filter((customer) => {
          const matchServiceType = serviceType
            ? serviceType === customer.serviceType
            : true;
          const matchPlan = plan ? plan === customer.plan : true;
          const matchCity = city ? city === customer.city : true;
          const matchTownship = township
            ? township === customer.township
            : true;

          const matchesDate =
            startDate || endDate
              ? (startDate
                  ? new Date(customer.serviceStartDate) >= new Date(startDate)
                  : true) &&
                (endDate
                  ? new Date(customer.serviceStartDate) <= new Date(endDate)
                  : true)
              : true;

          return (
            matchServiceType &&
            matchPlan &&
            matchCity &&
            matchTownship &&
            matchesDate
          );
        })
        .toArray();

      setBody(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${dashboardBg} ${dashboardText}`}>
      {loading && <DataLoading />}

      <Heading heading="Customers" subHeading="Manage your customers" />
      <Filters
        inputData={DEFAULT_INPUT_DATA}
        dataCenter={dataCenter}
        errorCenter={errorCenter}
        refCenter={refCenter}
        fields={fields}
        childPassingStructure={childPassingStructure}
        childCleaningStructure={childCleaningStructure}
        updateDataCenter={updateDataCenter}
        updateErrorCenter={updateErrorCenter}
        handleFilterData={handleFilterData}
        handleReset={() => {
          handleResetDataCenter();
          handleGetBodyData();
        }}
      />

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
        searchedData={searchData}
        settingIconList={<></>}
        handleOnChangePageSize={handleChangeOnPageSize}
        handleOnChangePagination={handleChangeOnPagination}
        handleSearching={handleSearching}
        handleUpdateModal={() => {
          "test";
        }}
        handleOnRouteConnection={() => {
          "test";
        }}
        handleOnDelete={handleDeleteBodyData}
        setSearchedData={setSearchedData}
        theme={theme}
      />

      <SuccessBox
        isOpen={isSuccess}
        titleLabel="Success"
        bodyText="Successfully create a customer"
        btnLabel="Close"
        clickOn={() => {
          handleIsSuccess(!isSuccess);
        }}
      />
    </div>
  );
};

export default CustomerList;
