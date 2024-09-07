import CustomizedTable from "../../../Components/Table/CustomizedTable";

const headers = [
  { _id: 1, key: "name", name: "Name" },
  { _id: 2, key: "age", name: "Age" },
  { _id: 3, key: "city", name: "City" },
  { _id: 4, key: "country", name: "Country" },
  { _id: 5, key: "village", name: "Village" },
  { _id: 6, key: "school", name: "School" },
  { _id: 7, key: "university", name: "University" },
  { _id: 8, key: "position", name: "Position" },
  { _id: 9, key: "lat", name: "Latitude" },
  { _id: 10, key: "lng", name: "Longitude" },
  { _id: 11, key: "package", name: "Package" },
  { _id: 12, key: "plan", name: "Plan" },
  { _id: 13, key: "pppoe", name: "PPPoe" },
];
const body = [
  {
    _id: 1,
    name: "kaung min khant",
    age: 22,
    city: "Yangon",
    country: "Myanmar",
    village: "laydaungkan",
    school: "BEHS.3.Dagon",
    university: "Dagon University",
    position: "Programmer",
    lat: "1.1.1.1",
    lng: "2.2.2.2",
    package: "Sweet",
    plan: "Sweet plan",
    pppoe: "This is PPPOE",
  },
  {
    _id: 2,
    name: "min kaung khant",
    age: 33,
    city: "",
    country: "",
    village: "laydaungkan",
    school: "BEHS.3.Dagon",
    university: "Dagon University",
    position: "Programmer",
    lat: "1.1.1.1",
    lng: "2.2.2.2",
    package: "Sweet",
    plan: "Sweet plan",
    pppoe: "This is PPPOE",
  },
];

const data = {
  HeadingColumn: headers,
  DataRow: body,
  page: 1,
  limit: 22,
  count: 100,
};

const CustomerList = () => {
  return (
    <div>
      CustomerList
      <CustomizedTable
        IsLoading={false}
        Data={data}
        PageSize={12}
        PageNumber={1}
        searchedData=""
        settingIconList={<></>}
        handleOnChangePageSize={() => {
          "test";
        }}
        handleOnChangePagination={() => {
          "test";
        }}
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
