import { useEffect, useState } from "react";

import { db } from "../../DB/db";
import { DEFAULT_DATA_CENTER } from "../Customer/constants";
import { Customer } from "../../DB/_types";

const Test = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const addData = async () => {
    const id = (await db.customers.toArray()).length + 1;
    await db.customers.add({ ...DEFAULT_DATA_CENTER, id });
  };

  const getData = async () => {
    const data = await db.customers.toArray();
    setCustomers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex items-center gap-2">
        {/* {customers.map((customer) => (
          <div key={customer.id}>{customer.name}</div>
        ))} */}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover-bg-red-400 duration-200"
          onClick={() => {
            getData();
          }}
        >
          Add Data
        </button>
      </div>
    </div>
  );
};

export default Test;
