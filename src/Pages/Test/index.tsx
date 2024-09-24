import Dexie from "dexie";
import { useEffect } from "react";

type Users = {
  id: number;
  name: string;
};

class MyDatabase extends Dexie {
  users!: Dexie.Table<Users, number>;
  constructor() {
    super("database");
    this.version(1).stores({
      users: `++id, name`,
    });
  }
}

const database = new MyDatabase();

const Test = () => {
  const getData = async () => {
    const response = await database.users.toArray();
    console.log("REsponse", response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-400"
        onClick={() => getData()}
      >
        Test
      </button>
    </div>
  );
};

export default Test;
