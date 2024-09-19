// src/types.ts
export interface Customer {
  id: number;
  brandName: string;
  customerName: string;
  customerType: string;
  customerTypeServer: string;
  companyName: string;
  autoGeneratePPOEAccount: string;
  autoGeneratePPOEAccountServer: boolean | string;
  radUserName: string;
  radPassword: string;
  serviceID: string;
  serviceIDName: string;
  containIP: string;
  containIPServer: boolean;
  mode: string;
  modeServer: string;
  staticIP: string;
  serviceType: string;
  serviceTypeServer: string;
  plan: string;
  planServer: string;
  paymentCurrency: string;
  price: string;
  serviceStatus: string;
  billingMethod: string;
  billingMethodServer: string;
  serviceStartDate: string; // Adjust type as needed
  serviceEndDate: string; // Adjust type as needed
  duration: string;
  durationNumber: string;
  enable: string;
  enableServer: boolean;
  paymentTypes: string;
  mmk: string;
  sgd: string;
  baht: string;
  city: string;
  township: string;
  address: string;
  coordinates: string; // Adjust type as needed
  phoneNumber: string;
  viberNumber: string;
  email: string;
  remark: string;
}
