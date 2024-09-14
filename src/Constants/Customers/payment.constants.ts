export const PAYMENTS = [
  { id: 1, label: "MMK", value: "100" },
  { id: 2, label: "SGD", value: "1" },
  { id: 3, label: "BAHT", value: "20" },
];

export const DEFAULT_BILLING_METHODS = [
  { id: 1, label: "Prepaid", value: "pre" },
  { id: 2, label: "Postpaid", value: "post" },
];

export type AvaPaymentTypes = { id: number; label: string; value: string };

export const AVA_PAYMENTS: AvaPaymentTypes[] = [
  { id: 1, label: "MMK", value: "mmk" },
  { id: 2, label: "SGD", value: "sgd" },
  { id: 3, label: "BAHT", value: "baht" },
];
