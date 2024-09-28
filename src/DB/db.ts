// src/db.ts
import Dexie from "dexie";
import { Customer } from "./_types";
import { DefaultThemeTypes } from "../Pages/Theme/_types";

class MyDatabase extends Dexie {
  customers!: Dexie.Table<Customer, number>;
  theme!: Dexie.Table<DefaultThemeTypes, number>;
  constructor() {
    super("database");
    this.version(1).stores({
      customers: `
        ++id,     
        serviceID , serviceID.asc
      `,
      theme: `++id`,
    });
  }
}

export const db = new MyDatabase();
