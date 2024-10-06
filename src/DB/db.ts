// src/db.ts
import Dexie from "dexie";
import { Activity, Customer } from "./_types";
import { DefaultThemeTypes } from "../Pages/Theme/_types";

class MyDatabase extends Dexie {
  customers!: Dexie.Table<Customer, number>;
  theme!: Dexie.Table<DefaultThemeTypes, number>;
  activities!: Dexie.Table<Activity, number>;
  constructor() {
    super("database");
    this.version(3).stores({
      customers: `
        ++id,     
        serviceID , serviceID.asc
      `,
      theme: `++id`,
      activities: `++id`,
    });
  }
}

export const db = new MyDatabase();
