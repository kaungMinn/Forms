// src/db.ts
import Dexie from "dexie";
import { Activity, Customer, Theme } from "./_types";

class MyDatabase extends Dexie {
  customers!: Dexie.Table<Customer, number>;
  theme!: Dexie.Table<Theme, number>;
  activities!: Dexie.Table<Activity, number>;
  constructor() {
    super("database");
    this.version(4).stores({
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
