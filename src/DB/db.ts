// src/db.ts
import Dexie from "dexie";
import { Customer } from "./_types";

class MyDatabase extends Dexie {
  customers!: Dexie.Table<Customer, number>;

  constructor() {
    super("database");
    this.version(1).stores({
      customers: `db
                ++id, 
                brandName,
                customerName,
                customerType,
                customerTypeServer,
                companyName,
                autoGeneratePPOEAccount,
                autoGeneratePPOEAccountServer,
                radUserName,
                radPassword,
                serviceID,
                serviceIDName,
                containIP,
                containIPServer,
                mode,
                modeServer,
                staticIP,
                serviceType,
                serviceTypeServer,
                plan,
                planServer,
                paymentCurrency,
                price,
                serviceStatus,
                billingMethod,
                billingMethodServer,
                serviceStartDate,
                serviceEndDate,
                duration,
                durationNumber,
                enable,
                enableServer,
                paymentTypes,
                mmk,
                sgd,
                baht,
                city,
                township,
                address,
                coordinates,
                phoneNumber,
                viberNumber,
                email,
                remark
            `,
    });
  }
}

export const db = new MyDatabase();
