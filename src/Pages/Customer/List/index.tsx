import { useCallback, useEffect, useState } from "react";
import CustomizedTable from "../../../Components/Table/CustomizedTable";
import { DEFAULT_INPUT_DATA, headers } from "./constants";
import { useAppSelector } from "../../../Hooks/ReduxProvider";
import Heading from "../../../Components/Labels/Heading";
import { db } from "../../../DB/db";
import DataLoading from "../../../Components/Loadings/DataLoading";
import SuccessBox from "../../../Components/ModalBox/SuccessBox";
import Filters from "../../../Filters";
import Hook from "./hook";
import { useNavigate } from "react-router-dom";
import { valueFrequency } from "../../../Utils/Data/object.utils";
import { DataCenterTypes } from "../Components/Forms/CustomerForm/_types";

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

  const [body, setBody] = useState<DataCenterTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentData, setCurrentData] = useState<typeof body>([]);
  const [loading, setLoading] = useState(false);
  const theme = useAppSelector((state) => state.theme);
  const { dashboardColor } = theme;
  const [dashboardBg, dashboardText] = dashboardColor;
  const [searchData, setSearchedData] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleIsSuccess = (value: boolean) => {
    setIsSuccess(value);
  };

  const handleSearching = useCallback(async (value: string) => {
    try {
      const data = await db.customers
        .filter((customerData) => {
          const customer = customerData.customers;
          return (
            customer.customerName.toLowerCase().includes(value.toLowerCase()) ||
            customer.serviceID.toLowerCase().includes(value.toLowerCase())
          );
        })
        .toArray();

      const tmp_body = data.map((customer) => customer.customers);

      setBody(tmp_body);
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
      const tmp_body = response.map((data) => data.customers);

      setBody(tmp_body);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBodyData = async (id: number | string | boolean) => {
    if (typeof id !== "number") return;
    try {
      const customer = await db.customers.get({ id: id });
      await db.customers.delete(id);
      handleGetBodyData();
      handleIsSuccess(true);

      const activityId = (await db.activities.toArray()).length + 1;

      await db.activities.add({
        id: activityId,
        activityLog: [],
        action: "Deleted a customer" + "," + customer?.customers.customerName,
        field: "Delete",
        date: new Date().toString(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetBodyData();
  }, []);

  const handleFilterData = async () => {
    const frequency = valueFrequency(dataCenter);
    if (frequency <= 0) return;
    try {
      const { serviceType, plan, city, township, startDate, endDate } =
        dataCenter;

      const results = await db.customers
        .filter((customerData) => {
          const customer = customerData.customers;
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

      const tmp_body = results.map((result) => result.customers);

      setBody(tmp_body);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateModal = (id: string) => {
    navigate(`/customers/${id}/update`);
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
        theme={theme}
        LinkList={[
          {
            key: "coordinates",
            action: async (id: string) => {
              const response = await db.customers.get({ id: id });
              const customer = response?.customers;

              if (customer?.coordinates) {
                window.location.href = `https://www.google.com/maps?q=${customer?.coordinates}`;
              }
            },
          },
        ]}
        /*
          Action
        */

        handleOnDelete={handleDeleteBodyData}
        setSearchedData={setSearchedData}
        handleOnChangePageSize={handleChangeOnPageSize}
        handleOnChangePagination={handleChangeOnPagination}
        handleSearching={handleSearching}
        handleUpdateModal={handleUpdateModal}
        handleOnRouteConnection={() => {
          "test";
        }}
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
