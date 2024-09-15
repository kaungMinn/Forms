export type PriceType = { number: number; type: string };

export type PlanType = {
  id: number;
  _id?: number;
  label: string;
  value?: string;
  price: PriceType;
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
      { id: 101, label: "Basic 10 Mbps", price: { number: 25, type: "MMK" } },
      { id: 102, label: "Basic 25 Mbps", price: { number: 30, type: "SGD" } },
      { id: 103, label: "Basic 50 Mbps", price: { number: 45, type: "BAHT" } },
      { id: 104, label: "Basic 100 Mbps", price: { number: 60, type: "MMK" } },
      { id: 105, label: "Basic 200 Mbps", price: { number: 75, type: "SGD" } },
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
      },
      { id: 202, label: "Streaming HD", price: { number: 35, type: "MMK" } },
      { id: 203, label: "Streaming 4K", price: { number: 50, type: "SGD" } },
      { id: 204, label: "Streaming UHD", price: { number: 65, type: "BAHT" } },
      { id: 205, label: "Streaming Max", price: { number: 80, type: "MMK" } },
    ],
  },
  {
    id: 3,
    label: "Standard Plan",
    plans: [
      {
        id: 301,
        label: "Standard 25 Mbps",
        price: { number: 25, type: "SGD" },
      },
      {
        id: 302,
        label: "Standard 50 Mbps",
        price: { number: 40, type: "BAHT" },
      },
      {
        id: 303,
        label: "Standard 100 Mbps",
        price: { number: 55, type: "MMK" },
      },
      {
        id: 304,
        label: "Standard 150 Mbps",
        price: { number: 70, type: "SGD" },
      },
      {
        id: 305,
        label: "Standard 200 Mbps",
        price: { number: 85, type: "BAHT" },
      },
    ],
  },
  {
    id: 4,
    label: "Premium Plan",
    plans: [
      {
        id: 401,
        label: "Premium 100 Mbps",
        price: { number: 30, type: "BAHT" },
      },
      {
        id: 402,
        label: "Premium 200 Mbps",
        price: { number: 50, type: "SGD" },
      },
      {
        id: 403,
        label: "Premium 500 Mbps",
        price: { number: 70, type: "MMK" },
      },
      { id: 404, label: "Premium 1 Gbps", price: { number: 90, type: "BAHT" } },
      { id: 405, label: "Premium 2 Gbps", price: { number: 100, type: "SGD" } },
    ],
  },
  {
    id: 5,
    label: "Family Bundle",
    plans: [
      {
        id: 501,
        label: "Family Basic 50 Mbps",
        price: { number: 40, type: "SGD" },
      },
      {
        id: 502,
        label: "Family Standard 100 Mbps",
        price: { number: 55, type: "MMK" },
      },
      {
        id: 503,
        label: "Family Premium 200 Mbps",
        price: { number: 70, type: "BAHT" },
      },
      {
        id: 504,
        label: "Family Ultimate 500 Mbps",
        price: { number: 85, type: "SGD" },
      },
      {
        id: 505,
        label: "Family Max 1 Gbps",
        price: { number: 95, type: "MMK" },
      },
    ],
  },
  {
    id: 6,
    label: "Student Special",
    plans: [
      {
        id: 601,
        label: "Student 10 Mbps",
        price: { number: 20, type: "BAHT" },
      },
      { id: 602, label: "Student 25 Mbps", price: { number: 30, type: "SGD" } },
      { id: 603, label: "Student 50 Mbps", price: { number: 45, type: "MMK" } },
      {
        id: 604,
        label: "Student 100 Mbps",
        price: { number: 60, type: "BAHT" },
      },
      {
        id: 605,
        label: "Student 200 Mbps",
        price: { number: 75, type: "SGD" },
      },
    ],
  },
  {
    id: 7,
    label: "Business Pro",
    plans: [
      {
        id: 701,
        label: "Business 50 Mbps",
        price: { number: 35, type: "SGD" },
      },
      {
        id: 702,
        label: "Business 100 Mbps",
        price: { number: 50, type: "MMK" },
      },
      {
        id: 703,
        label: "Business 250 Mbps",
        price: { number: 70, type: "BAHT" },
      },
      {
        id: 704,
        label: "Business 500 Mbps",
        price: { number: 85, type: "SGD" },
      },
      { id: 705, label: "Business 1 Gbps", price: { number: 95, type: "MMK" } },
    ],
  },
  {
    id: 8,
    label: "Corporate Plan",
    plans: [
      {
        id: 801,
        label: "Corporate 100 Mbps",
        price: { number: 40, type: "BAHT" },
      },
      {
        id: 802,
        label: "Corporate 200 Mbps",
        price: { number: 55, type: "SGD" },
      },
      {
        id: 803,
        label: "Corporate 500 Mbps",
        price: { number: 70, type: "MMK" },
      },
      {
        id: 804,
        label: "Corporate 1 Gbps",
        price: { number: 85, type: "BAHT" },
      },
      {
        id: 805,
        label: "Corporate 2 Gbps",
        price: { number: 100, type: "SGD" },
      },
    ],
  },
  {
    id: 9,
    label: "Economy Plan",
    plans: [
      { id: 901, label: "Economy 10 Mbps", price: { number: 15, type: "SGD" } },
      {
        id: 902,
        label: "Economy 20 Mbps",
        price: { number: 25, type: "BAHT" },
      },
      { id: 903, label: "Economy 30 Mbps", price: { number: 35, type: "MMK" } },
      { id: 904, label: "Economy 50 Mbps", price: { number: 45, type: "SGD" } },
      {
        id: 905,
        label: "Economy 100 Mbps",
        price: { number: 55, type: "BAHT" },
      },
    ],
  },
  {
    id: 10,
    label: "Essential Plan",
    plans: [
      {
        id: 1001,
        label: "Essential 25 Mbps",
        price: { number: 30, type: "BAHT" },
      },
      {
        id: 1002,
        label: "Essential 50 Mbps",
        price: { number: 45, type: "SGD" },
      },
      {
        id: 1003,
        label: "Essential 100 Mbps",
        price: { number: 60, type: "MMK" },
      },
      {
        id: 1004,
        label: "Essential 150 Mbps",
        price: { number: 70, type: "BAHT" },
      },
      {
        id: 1005,
        label: "Essential 200 Mbps",
        price: { number: 85, type: "SGD" },
      },
    ],
  },
  {
    id: 11,
    label: "Traveler's Pack",
    plans: [
      {
        id: 1101,
        label: "Traveler's 1 GB",
        price: { number: 20, type: "SGD" },
      },
      {
        id: 1102,
        label: "Traveler's 3 GB",
        price: { number: 35, type: "BAHT" },
      },
      {
        id: 1103,
        label: "Traveler's 5 GB",
        price: { number: 50, type: "MMK" },
      },
      {
        id: 1104,
        label: "Traveler's 10 GB",
        price: { number: 65, type: "SGD" },
      },
      {
        id: 1105,
        label: "Traveler's 20 GB",
        price: { number: 80, type: "BAHT" },
      },
    ],
  },
  {
    id: 12,
    label: "Weekend Plan",
    plans: [
      { id: 1201, label: "Weekend 5 GB", price: { number: 25, type: "MMK" } },
      { id: 1202, label: "Weekend 10 GB", price: { number: 35, type: "SGD" } },
      { id: 1203, label: "Weekend 15 GB", price: { number: 45, type: "BAHT" } },
      { id: 1204, label: "Weekend 20 GB", price: { number: 55, type: "MMK" } },
      { id: 1205, label: "Weekend 30 GB", price: { number: 65, type: "SGD" } },
    ],
  },
  {
    id: 13,
    label: "Home Internet",
    plans: [
      {
        id: 1301,
        label: "Home Basic 25 Mbps",
        price: { number: 30, type: "SGD" },
      },
      {
        id: 1302,
        label: "Home Standard 50 Mbps",
        price: { number: 45, type: "BAHT" },
      },
      {
        id: 1303,
        label: "Home Premium 100 Mbps",
        price: { number: 60, type: "MMK" },
      },
      {
        id: 1304,
        label: "Home Ultra 200 Mbps",
        price: { number: 75, type: "SGD" },
      },
      {
        id: 1305,
        label: "Home Max 500 Mbps",
        price: { number: 90, type: "BAHT" },
      },
    ],
  },
  {
    id: 14,
    label: "Office Internet",
    plans: [
      { id: 1401, label: "Office 50 Mbps", price: { number: 35, type: "SGD" } },
      {
        id: 1402,
        label: "Office 100 Mbps",
        price: { number: 50, type: "BAHT" },
      },
      {
        id: 1403,
        label: "Office 250 Mbps",
        price: { number: 65, type: "MMK" },
      },
      {
        id: 1404,
        label: "Office 500 Mbps",
        price: { number: 80, type: "SGD" },
      },
      { id: 1405, label: "Office 1 Gbps", price: { number: 95, type: "BAHT" } },
    ],
  },
  {
    id: 15,
    label: "Ultra Fast Package",
    plans: [
      {
        id: 1501,
        label: "Ultra Fast 500 Mbps",
        price: { number: 50, type: "BAHT" },
      },
      {
        id: 1502,
        label: "Ultra Fast 1 Gbps",
        price: { number: 70, type: "SGD" },
      },
      {
        id: 1503,
        label: "Ultra Fast 2 Gbps",
        price: { number: 85, type: "MMK" },
      },
      {
        id: 1504,
        label: "Ultra Fast 5 Gbps",
        price: { number: 95, type: "BAHT" },
      },
      {
        id: 1505,
        label: "Ultra Fast 10 Gbps",
        price: { number: 100, type: "SGD" },
      },
    ],
  },
  {
    id: 16,
    label: "Turbo Plan",
    plans: [
      { id: 1601, label: "Turbo 100 Mbps", price: { number: 35, type: "MMK" } },
      { id: 1602, label: "Turbo 200 Mbps", price: { number: 50, type: "SGD" } },
      {
        id: 1603,
        label: "Turbo 500 Mbps",
        price: { number: 65, type: "BAHT" },
      },
      { id: 1604, label: "Turbo 1 Gbps", price: { number: 80, type: "SGD" } },
      { id: 1605, label: "Turbo 2 Gbps", price: { number: 95, type: "MMK" } },
    ],
  },
  {
    id: 17,
    label: "Sports Streaming Package",
    plans: [
      { id: 1701, label: "Sports Basic", price: { number: 25, type: "SGD" } },
      { id: 1702, label: "Sports HD", price: { number: 35, type: "BAHT" } },
      { id: 1703, label: "Sports 4K", price: { number: 50, type: "MMK" } },
      { id: 1704, label: "Sports UHD", price: { number: 65, type: "SGD" } },
      {
        id: 1705,
        label: "Sports Premium",
        price: { number: 80, type: "BAHT" },
      },
    ],
  },
  {
    id: 18,
    label: "Gaming Pro",
    plans: [
      {
        id: 1801,
        label: "Gaming Basic 25 Mbps",
        price: { number: 30, type: "BAHT" },
      },
      {
        id: 1802,
        label: "Gaming Standard 50 Mbps",
        price: { number: 45, type: "SGD" },
      },
      {
        id: 1803,
        label: "Gaming Pro 100 Mbps",
        price: { number: 60, type: "MMK" },
      },
      {
        id: 1804,
        label: "Gaming Ultimate 200 Mbps",
        price: { number: 75, type: "SGD" },
      },
      {
        id: 1805,
        label: "Gaming Max 500 Mbps",
        price: { number: 90, type: "BAHT" },
      },
    ],
  },
  {
    id: 19,
    label: "Movie Lover's Pack",
    plans: [
      { id: 1901, label: "Movies Basic", price: { number: 25, type: "SGD" } },
      { id: 1902, label: "Movies HD", price: { number: 35, type: "BAHT" } },
      { id: 1903, label: "Movies 4K", price: { number: 50, type: "MMK" } },
      { id: 1904, label: "Movies UHD", price: { number: 65, type: "SGD" } },
      {
        id: 1905,
        label: "Movies Premium",
        price: { number: 80, type: "BAHT" },
      },
    ],
  },
  {
    id: 20,
    label: "Music Streaming Plan",
    plans: [
      { id: 2001, label: "Music Basic", price: { number: 20, type: "BAHT" } },
      { id: 2002, label: "Music HD", price: { number: 30, type: "SGD" } },
      { id: 2003, label: "Music Premium", price: { number: 45, type: "MMK" } },
      { id: 2004, label: "Music Ultra", price: { number: 55, type: "BAHT" } },
      { id: 2005, label: "Music Max", price: { number: 70, type: "SGD" } },
    ],
  },
  {
    id: 21,
    label: "News & Updates Plan",
    plans: [
      { id: 2101, label: "News Basic", price: { number: 25, type: "SGD" } },
      { id: 2102, label: "News Premium", price: { number: 35, type: "BAHT" } },
      { id: 2103, label: "News Pro", price: { number: 50, type: "MMK" } },
      { id: 2104, label: "News Ultimate", price: { number: 65, type: "SGD" } },
      { id: 2105, label: "News Max", price: { number: 80, type: "BAHT" } },
    ],
  },
  {
    id: 22,
    label: "Remote Work Plan",
    plans: [
      {
        id: 2201,
        label: "Remote Work 50 Mbps",
        price: { number: 35, type: "BAHT" },
      },
      {
        id: 2202,
        label: "Remote Work 100 Mbps",
        price: { number: 50, type: "SGD" },
      },
      {
        id: 2203,
        label: "Remote Work 250 Mbps",
        price: { number: 65, type: "MMK" },
      },
      {
        id: 2204,
        label: "Remote Work 500 Mbps",
        price: { number: 80, type: "SGD" },
      },
      {
        id: 2205,
        label: "Remote Work 1 Gbps",
        price: { number: 95, type: "BAHT" },
      },
    ],
  },
];
