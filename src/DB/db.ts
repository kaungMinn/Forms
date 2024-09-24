// src/db.ts
import Dexie from "dexie";
import { Customer } from "./_types";

class MyDatabase extends Dexie {
  customers!: Dexie.Table<Customer, number>;

  constructor() {
    super("database");
    this.version(1).stores({
      customers: `
        ++id,     
        serviceID , serviceID.asc
      `,
    });
  }
}

export const db = new MyDatabase();
