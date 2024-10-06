export type PriceType = { number: number; type: string };

export type PlanType = {
  id: number;
  _id?: number;
  label: string;
  value?: string;
  price: PriceType;
  duration: string;
};

export type PackageType = {
  id: number;
  _id?: number;
  label: string;
  value?: string;
  plans: PlanType[];
};

export const PACKAGES: PackageType[] = [
  {
    id: 1,
    label: "Basic Internet Plan",
    plans: [
      {
        id: 101,
        label: "Basic 10 Mbps",
        price: { number: 25, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 102,
        label: "Basic 25 Mbps",
        price: { number: 30, type: "SGD" },
        duration: "4 day",
      },
      {
        id: 103,
        label: "Basic 50 Mbps",
        price: { number: 45, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 104,
        label: "Basic 100 Mbps",
        price: { number: 60, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 105,
        label: "Basic 200 Mbps",
        price: { number: 75, type: "SGD" },
        duration: "4 month",
      },
    ],
  },
  {
    id: 2,
    label: "Unlimited Streaming Plan",
    plans: [
      {
        id: 201,
        label: "Streaming Standard",
        price: { number: 20, type: "BAHT" },
        duration: "1 year",
      },
      {
        id: 202,
        label: "Streaming HD",
        price: { number: 35, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 203,
        label: "Streaming 4K",
        price: { number: 50, type: "SGD" },
        duration: "4 month",
      },
      {
        id: 204,
        label: "Streaming UHD",
        price: { number: 65, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 205,
        label: "Streaming Max",
        price: { number: 80, type: "MMK" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 3,
    label: "Gaming Plan",
    plans: [
      {
        id: 301,
        label: "Gaming 50 Mbps",
        price: { number: 40, type: "MMK" },
        duration: "4 year",
      },
      {
        id: 302,
        label: "Gaming 100 Mbps",
        price: { number: 55, type: "SGD" },
        duration: "5 month",
      },
      {
        id: 303,
        label: "Gaming 200 Mbps",
        price: { number: 70, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 304,
        label: "Gaming 500 Mbps",
        price: { number: 85, type: "MMK" },
        duration: "4 month",
      },
      {
        id: 305,
        label: "Gaming 1 Gbps",
        price: { number: 100, type: "SGD" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 4,
    label: "Business Plan",
    plans: [
      {
        id: 401,
        label: "Business 100 Mbps",
        price: { number: 150, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 402,
        label: "Business 200 Mbps",
        price: { number: 175, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 403,
        label: "Business 500 Mbps",
        price: { number: 200, type: "SGD" },
        duration: "4 day",
      },
      {
        id: 404,
        label: "Business 1 Gbps",
        price: { number: 250, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 405,
        label: "Business 2 Gbps",
        price: { number: 300, type: "MMK" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 5,
    label: "Enterprise Plan",
    plans: [
      {
        id: 501,
        label: "Enterprise Basic",
        price: { number: 350, type: "SGD" },
        duration: "4 month",
      },
      {
        id: 502,
        label: "Enterprise Pro",
        price: { number: 400, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 503,
        label: "Enterprise Ultra",
        price: { number: 450, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 504,
        label: "Enterprise Max",
        price: { number: 500, type: "SGD" },
        duration: "4 month",
      },
      {
        id: 505,
        label: "Enterprise VIP",
        price: { number: 600, type: "BAHT" },
        duration: "1 month",
      },
    ],
  },
  {
    id: 6,
    label: "Premium Family Plan",
    plans: [
      {
        id: 601,
        label: "Family Standard",
        price: { number: 45, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 602,
        label: "Family HD",
        price: { number: 55, type: "SGD" },
        duration: "4 month",
      },
      {
        id: 603,
        label: "Family UHD",
        price: { number: 65, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 604,
        label: "Family Max",
        price: { number: 80, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 605,
        label: "Family Pro",
        price: { number: 100, type: "SGD" },
        duration: "4 month",
      },
    ],
  },
  {
    id: 7,
    label: "Education Plan",
    plans: [
      {
        id: 701,
        label: "Education Basic",
        price: { number: 15, type: "MMK" },
        duration: "1 month",
      },
      {
        id: 702,
        label: "Education Pro",
        price: { number: 25, type: "SGD" },
        duration: "5 month",
      },
      {
        id: 703,
        label: "Education Ultra",
        price: { number: 35, type: "BAHT" },
        duration: "4 month",
      },
      {
        id: 704,
        label: "Education Max",
        price: { number: 50, type: "MMK" },
        duration: "1 month",
      },
      {
        id: 705,
        label: "Education VIP",
        price: { number: 65, type: "SGD" },
        duration: "5 month",
      },
    ],
  },

  {
    id: 8,
    label: "Traveler Plan",
    plans: [
      {
        id: 801,
        label: "Traveler Lite",
        price: { number: 10, type: "BAHT" },
        duration: "4 month",
      },
      {
        id: 802,
        label: "Traveler Standard",
        price: { number: 20, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 803,
        label: "Traveler Pro",
        price: { number: 30, type: "SGD" },
        duration: "1 month",
      },
      {
        id: 804,
        label: "Traveler Ultra",
        price: { number: 45, type: "BAHT" },
        duration: "4 month",
      },
      {
        id: 805,
        label: "Traveler Max",
        price: { number: 60, type: "MMK" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 9,
    label: "Home Office Plan",
    plans: [
      {
        id: 901,
        label: "Home Office Basic",
        price: { number: 25, type: "MMK" },
        duration: "1 month",
      },
      {
        id: 902,
        label: "Home Office Plus",
        price: { number: 40, type: "SGD" },
        duration: "5 month",
      },
      {
        id: 903,
        label: "Home Office Ultra",
        price: { number: 55, type: "BAHT" },
        duration: "4 month",
      },
      {
        id: 904,
        label: "Home Office Pro",
        price: { number: 70, type: "MMK" },
        duration: "1 month",
      },
      {
        id: 905,
        label: "Home Office Max",
        price: { number: 85, type: "SGD" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 10,
    label: "Student Plan",
    plans: [
      {
        id: 1001,
        label: "Student Basic",
        price: { number: 12, type: "MMK" },
        duration: "4 month",
      },
      {
        id: 1002,
        label: "Student Pro",
        price: { number: 18, type: "SGD" },
        duration: "1 month",
      },
      {
        id: 1003,
        label: "Student Ultra",
        price: { number: 24, type: "BAHT" },
        duration: "5 month",
      },
      {
        id: 1004,
        label: "Student Max",
        price: { number: 30, type: "MMK" },
        duration: "4 month",
      },
      {
        id: 1005,
        label: "Student VIP",
        price: { number: 40, type: "SGD" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 11,
    label: "Mobile Plan",
    plans: [
      {
        id: 1101,
        label: "Mobile Lite",
        price: { number: 8, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 1102,
        label: "Mobile Standard",
        price: { number: 16, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 1103,
        label: "Mobile Pro",
        price: { number: 24, type: "SGD" },
        duration: "4 month",
      },
      {
        id: 1104,
        label: "Mobile Ultra",
        price: { number: 32, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 1105,
        label: "Mobile Max",
        price: { number: 40, type: "MMK" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 12,
    label: "Health Plan",
    plans: [
      {
        id: 1201,
        label: "Health Basic",
        price: { number: 50, type: "SGD" },
        duration: "4 month",
      },
      {
        id: 1202,
        label: "Health Pro",
        price: { number: 70, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 1203,
        label: "Health Ultra",
        price: { number: 90, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 1204,
        label: "Health Max",
        price: { number: 120, type: "SGD" },
        duration: "4 month",
      },
      {
        id: 1205,
        label: "Health VIP",
        price: { number: 150, type: "BAHT" },
        duration: "1 month",
      },
    ],
  },
  {
    id: 8,
    label: "Traveler Plan",
    plans: [
      {
        id: 801,
        label: "Traveler Lite",
        price: { number: 10, type: "BAHT" },
        duration: "4 month",
      },
      {
        id: 802,
        label: "Traveler Standard",
        price: { number: 20, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 803,
        label: "Traveler Pro",
        price: { number: 30, type: "SGD" },
        duration: "1 month",
      },
      {
        id: 804,
        label: "Traveler Ultra",
        price: { number: 45, type: "BAHT" },
        duration: "4 month",
      },
      {
        id: 805,
        label: "Traveler Max",
        price: { number: 60, type: "MMK" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 9,
    label: "Home Office Plan",
    plans: [
      {
        id: 901,
        label: "Home Office Basic",
        price: { number: 25, type: "MMK" },
        duration: "1 month",
      },
      {
        id: 902,
        label: "Home Office Plus",
        price: { number: 40, type: "SGD" },
        duration: "5 month",
      },
      {
        id: 903,
        label: "Home Office Ultra",
        price: { number: 55, type: "BAHT" },
        duration: "4 month",
      },
      {
        id: 904,
        label: "Home Office Pro",
        price: { number: 70, type: "MMK" },
        duration: "1 month",
      },
      {
        id: 905,
        label: "Home Office Max",
        price: { number: 85, type: "SGD" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 10,
    label: "Student Plan",
    plans: [
      {
        id: 1001,
        label: "Student Basic",
        price: { number: 12, type: "MMK" },
        duration: "4 month",
      },
      {
        id: 1002,
        label: "Student Pro",
        price: { number: 18, type: "SGD" },
        duration: "1 month",
      },
      {
        id: 1003,
        label: "Student Ultra",
        price: { number: 24, type: "BAHT" },
        duration: "5 month",
      },
      {
        id: 1004,
        label: "Student Max",
        price: { number: 30, type: "MMK" },
        duration: "4 month",
      },
      {
        id: 1005,
        label: "Student VIP",
        price: { number: 40, type: "SGD" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 11,
    label: "Mobile Plan",
    plans: [
      {
        id: 1101,
        label: "Mobile Lite",
        price: { number: 8, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 1102,
        label: "Mobile Standard",
        price: { number: 16, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 1103,
        label: "Mobile Pro",
        price: { number: 24, type: "SGD" },
        duration: "4 month",
      },
      {
        id: 1104,
        label: "Mobile Ultra",
        price: { number: 32, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 1105,
        label: "Mobile Max",
        price: { number: 40, type: "MMK" },
        duration: "5 month",
      },
    ],
  },
  {
    id: 12,
    label: "Health Plan",
    plans: [
      {
        id: 1201,
        label: "Health Basic",
        price: { number: 50, type: "SGD" },
        duration: "4 month",
      },
      {
        id: 1202,
        label: "Health Pro",
        price: { number: 70, type: "BAHT" },
        duration: "1 month",
      },
      {
        id: 1203,
        label: "Health Ultra",
        price: { number: 90, type: "MMK" },
        duration: "5 month",
      },
      {
        id: 1204,
        label: "Health Max",
        price: { number: 120, type: "SGD" },
        duration: "4 month",
      },
      {
        id: 1205,
        label: "Health VIP",
        price: { number: 150, type: "BAHT" },
        duration: "1 month",
      },
    ],
  },
];
