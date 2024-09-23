// src/db.ts
import Dexie from "dexie";
import { Customer } from "./_types";

class MyDatabase extends Dexie {
  customers!: Dexie.Table<Customer, number>;

  constructor() {
    super("database");
    this.version(1).stores({
      customers: `
        ++id,             // auto-incremented primary key
        customers,        // customer data
        fields,           // additional fields
        selectedInputs    // inputs that are selected
      `,
    });
  }
}

export const db = new MyDatabase();
